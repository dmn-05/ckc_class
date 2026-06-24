<?php

// A simple script to get the column type
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$type = Illuminate\Support\Facades\Schema::getColumnType('binh_luan', 'id');
echo "Type of id is: " . $type . "\n";
