<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\BaiKiemTra;
use App\Models\CauHoi;
use App\Models\DapAn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QuestionController extends Controller
{
    private function getSectionIds()
    {
        $user = auth()->user();
        if (!$user || !$user->giangVien) {
            abort(403, 'Unauthorized');
        }
        $giangVienId = $user->giangVien->id;
        return \App\Models\LopHocPhan::where(function ($q) use ($giangVienId) {
            $q->where('giang_vien_id', $giangVienId)
              ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                  $q2->where('giang_vien.id', $giangVienId);
              });
        })->pluck('id');
    }

    private function findExam($examId)
    {
        $sectionIds = $this->getSectionIds();
        return BaiKiemTra::whereIn('lop_hoc_phan_id', $sectionIds)->findOrFail($examId);
    }

    public function index($examId)
    {
        $exam = $this->findExam($examId);
        $questions = $exam->cauHois()->with('dapAns')->orderBy('thu_tu')->get();

        return response()->json([
            'data' => $questions->map(fn($q) => $this->formatQuestion($q))
        ]);
    }

    public function store(Request $request, $examId)
    {
        $exam = $this->findExam($examId);

        $validated = $request->validate([
            'loai'      => 'required|string|in:single_choice,multiple_choice,true_false,essay',
            'noi_dung'  => 'required|string',
            'diem'      => 'nullable|numeric|min:0.1|max:100',
            'giai_thich'=> 'nullable|string',
            'thu_tu'    => 'nullable|integer|min:0',
            'options'   => 'nullable|array',
            'options.*.noi_dung'      => 'required_with:options|string',
            'options.*.la_dap_an_dung'=> 'required_with:options|boolean',
        ]);

        $maxOrder = $exam->cauHois()->max('thu_tu') ?? -1;
        $question = $exam->cauHois()->create([
            'loai'      => $validated['loai'],
            'noi_dung'  => $validated['noi_dung'],
            'diem'      => $validated['diem'] ?? 1,
            'giai_thich'=> $validated['giai_thich'] ?? null,
            'thu_tu'    => $validated['thu_tu'] ?? ($maxOrder + 1),
        ]);

        if (!empty($validated['options'])) {
            foreach ($validated['options'] as $i => $opt) {
                $question->dapAns()->create([
                    'noi_dung'       => $opt['noi_dung'],
                    'la_dap_an_dung' => $opt['la_dap_an_dung'],
                    'thu_tu'         => $i,
                ]);
            }
        }

        $question->load('dapAns');
        return response()->json(['data' => $this->formatQuestion($question)], 201);
    }

    public function show($examId, $questionId)
    {
        $this->findExam($examId);
        $question = CauHoi::with('dapAns')->findOrFail($questionId);
        return response()->json(['data' => $this->formatQuestion($question)]);
    }

    public function update(Request $request, $examId, $questionId)
    {
        $this->findExam($examId);
        $question = CauHoi::findOrFail($questionId);

        $validated = $request->validate([
            'loai'      => 'sometimes|string|in:single_choice,multiple_choice,true_false,essay',
            'noi_dung'  => 'sometimes|string',
            'diem'      => 'nullable|numeric|min:0.1|max:100',
            'giai_thich'=> 'nullable|string',
            'thu_tu'    => 'nullable|integer|min:0',
            'options'   => 'nullable|array',
            'options.*.noi_dung'      => 'required_with:options|string',
            'options.*.la_dap_an_dung'=> 'required_with:options|boolean',
        ]);

        $fields = ['loai', 'noi_dung', 'diem', 'giai_thich', 'thu_tu'];
        $updateData = [];
        foreach ($fields as $f) {
            if (array_key_exists($f, $validated)) {
                $updateData[$f] = $validated[$f];
            }
        }
        if (!empty($updateData)) {
            $question->update($updateData);
        }

        if (array_key_exists('options', $validated)) {
            $question->dapAns()->delete();
            foreach ($validated['options'] as $i => $opt) {
                $question->dapAns()->create([
                    'noi_dung'       => $opt['noi_dung'],
                    'la_dap_an_dung' => $opt['la_dap_an_dung'],
                    'thu_tu'         => $i,
                ]);
            }
        }

        $question->load('dapAns');
        return response()->json(['data' => $this->formatQuestion($question)]);
    }

    public function destroy($examId, $questionId)
    {
        $this->findExam($examId);
        $question = CauHoi::findOrFail($questionId);
        $question->delete();
        return response()->json(['message' => 'Question deleted successfully']);
    }

    public function reorder(Request $request, $examId)
    {
        $this->findExam($examId);
        $validated = $request->validate([
            'orders' => 'required|array',
            'orders.*.id'    => 'required|integer|exists:cau_hoi,id',
            'orders.*.thu_tu'=> 'required|integer|min:0',
        ]);

        foreach ($validated['orders'] as $item) {
            CauHoi::where('id', $item['id'])->where('bai_kiem_tra_id', $examId)
                ->update(['thu_tu' => $item['thu_tu']]);
        }

        return response()->json(['message' => 'Reordered successfully']);
    }

    private function formatQuestion($q): array
    {
        return [
            'id'          => (string) $q->id,
            'examId'      => (string) $q->bai_kiem_tra_id,
            'type'        => $q->loai,
            'content'     => $q->noi_dung,
            'score'       => (float) $q->diem,
            'explanation' => $q->giai_thich ?? '',
            'order'       => (int) $q->thu_tu,
            'options'     => $q->relationLoaded('dapAns')
                ? $q->dapAns->map(fn($o) => [
                    'id'        => (string) $o->id,
                    'content'   => $o->noi_dung,
                    'isCorrect' => (bool) $o->la_dap_an_dung,
                ])->values()->toArray()
                : [],
        ];
    }
}
