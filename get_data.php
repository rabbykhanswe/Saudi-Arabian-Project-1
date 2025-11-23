<?php
// --- DISABLE ERROR DISPLAY ---
ini_set('display_errors', 0);
error_reporting(0);

header('Content-Type: application/json');
$response = ['status' => 'error', 'gallery' => [], 'reviews' => []];

$servername = "localhost";
$username = "u833477180_fix";
$password = "@Fixed00#";
$dbname = "u833477180_fix";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) { throw new Exception("DB Connection Failed"); }
    $conn->set_charset("utf8mb4");

    $response['status'] = 'success';

    // Gallery
    $gallery_result = $conn->query("SELECT item_key, media_path FROM site_gallery");
    if ($gallery_result) {
        while ($row = $gallery_result->fetch_assoc()) {
            $response['gallery'][$row['item_key']] = $row['media_path'];
        }
    }

    // Reviews
    $review_result = $conn->query("SELECT name, location, rating, review_text, photo_path FROM reviews ORDER BY submission_date DESC LIMIT 10");
    if ($review_result) {
        while ($row = $review_result->fetch_assoc()) {
            $response['reviews'][] = $row;
        }
    }
    $conn->close();
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
exit();
?>