<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const RECIPIENT = 'contact@daniel-korbmacher.de';
const SENDER = 'contact@daniel-korbmacher.de';

function fail(int $status): never
{
    http_response_code($status);
    echo json_encode(['ok' => false]);
    exit;
}

function singleLine(mixed $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', (string) $value));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail(405);
}

$payload = json_decode((string) file_get_contents('php://input'), true);

if (!is_array($payload)) {
    fail(400);
}

if (singleLine($payload['website'] ?? '') !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$name = singleLine($payload['name'] ?? '');
$email = singleLine($payload['email'] ?? '');
$message = trim((string) ($payload['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422);
}

if (mb_strlen($name) > 100 || mb_strlen($email) > 254 || mb_strlen($message) > 5000) {
    fail(422);
}

$subject = '=?UTF-8?B?' . base64_encode('Kontaktformular: ' . $name) . '?=';
$body = "Name: {$name}\nE-Mail: {$email}\n\n{$message}\n";
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'From: Portfolio <' . SENDER . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

if (!mail(RECIPIENT, $subject, $body, $headers, '-f' . SENDER)) {
    fail(500);
}

echo json_encode(['ok' => true]);
