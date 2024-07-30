<?php
$host='localhost';
$data='q90036vm_mass';
$user='root';
$pass= 'mysql';
$chrs='utf8mb4';
$att="mysql:host=$host;dbname=$data;charset=$chrs";
$opts=[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
];