<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class IseedAllCommand extends Command
{
    protected $signature = 'iseed:all {--force : Overwrite existing seeders}';

    protected $description = 'Generate seeders for all tables in the current database (.env) using orangehill/iseed';

    public function handle()
    {
        $databaseName = DB::getDatabaseName();
        $this->info("Đang lấy danh sách các bảng trong database hiện tại ({$databaseName})...");

        $allTables = DB::table('information_schema.tables')
            ->where('table_schema', $databaseName)
            ->where('table_type', 'BASE TABLE')
            ->pluck('TABLE_NAME')
            ->toArray();

        // Loại bỏ các bảng hệ thống của Laravel không cần tạo seed
        $ignoreTables = [
            'migrations',
            'cache',
            'cache_locks',
            'jobs',
            'job_batches',
            'failed_jobs',
            'sessions',
            'password_reset_tokens',
        ];

        $tablesToSeed = array_filter($allTables, function ($table) use ($ignoreTables) {
            return !in_array($table, $ignoreTables);
        });

        if (empty($tablesToSeed)) {
            $this->warn('Không tìm thấy bảng nào để tạo seeder.');
            return 0;
        }

        $tableString = implode(',', $tablesToSeed);

        $this->info("Đang tạo seeder cho " . count($tablesToSeed) . " bảng: " . $tableString);

        $params = ['tables' => $tableString];
        if ($this->option('force')) {
            $params['--force'] = true;
        }

        Artisan::call('iseed', $params, $this->output);

        $this->info('Hoàn tất tạo seeder cho toàn bộ database!');
        return 0;
    }
}
