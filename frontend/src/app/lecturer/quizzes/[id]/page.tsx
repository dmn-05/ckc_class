import { redirect } from 'next/navigation';

export default async function LecturerQuizDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    redirect(`/lecturer/quizzes/${id}/results`);
}
