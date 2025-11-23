<?php
session_start();
// --- DISABLE ERROR DISPLAY ---
ini_set('display_errors', 0);
error_reporting(0);

header('Content-Type: application/json');

define('ADMIN_USERNAME', 'mijanur');
define('ADMIN_PASSWORD', 'mijanur121311'); 

$servername = "localhost";
$username = "u833477180_fix";
$password = "@Fixed00#";
$dbname = "u833477180_fix";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'DB Connection Failed']);
    exit();
}
$conn->set_charset("utf8mb4");

function send_json($data) {
    echo json_encode($data);
    exit();
}

if (!isset($_SESSION['loggedin']) && $_POST['action'] !== 'login') {
    send_json(['status' => 'error', 'message' => 'Not authenticated']);
}

$action = isset($_POST['action']) ? $_POST['action'] : '';

if ($action === 'login') {
    $user = $_POST['username'] ?? '';
    $pass = $_POST['password'] ?? '';
    if ($user === ADMIN_USERNAME && $pass === ADMIN_PASSWORD) {
        $_SESSION['loggedin'] = true;
        send_json(['status' => 'success']);
    } else {
        send_json(['status' => 'error', 'message' => 'Invalid credentials']);
    }
}

if ($action === 'logout') {
    session_destroy();
    send_json(['status' => 'success']);
}

if ($action === 'fetch_data') {
    $response = ['status' => 'success', 'requests' => [], 'reviews' => [], 'gallery' => []];
    
    $res = $conn->query("SELECT * FROM contact_requests ORDER BY submission_date DESC");
    while ($row = $res->fetch_assoc()) $response['requests'][] = $row;

    $res = $conn->query("SELECT * FROM reviews ORDER BY submission_date DESC");
    while ($row = $res->fetch_assoc()) $response['reviews'][] = $row;

    $res = $conn->query("SELECT item_key, media_path FROM site_gallery");
    while ($row = $res->fetch_assoc()) $response['gallery'][$row['item_key']] = $row['media_path'];

    send_json($response);
}

if ($action === 'delete') {
    $id = intval($_POST['id']);
    $type = $_POST['type'];
    $table = ($type === 'request') ? 'contact_requests' : 'reviews';
    
    if ($type === 'review') {
        $q = $conn->query("SELECT photo_path FROM reviews WHERE id=$id");
        if ($r = $q->fetch_assoc()) {
            if ($r['photo_path'] && file_exists($r['photo_path'])) unlink($r['photo_path']);
        }
    }
    
    if ($conn->query("DELETE FROM $table WHERE id=$id")) {
        send_json(['status' => 'success', 'message' => 'Deleted']);
    } else {
        send_json(['status' => 'error', 'message' => 'Delete failed']);
    }
}

if ($action === 'update_gallery_item') {
    $key = $_POST['item_key'];
    if (isset($_FILES['media_file']) && $_FILES['media_file']['error'] === 0) {
        $ext = pathinfo($_FILES['media_file']['name'], PATHINFO_EXTENSION);
        $newName = $key . '_' . time() . '.' . $ext;
        $target = "media/" . $newName;
        
        if (move_uploaded_file($_FILES['media_file']['tmp_name'], $target)) {
            // FIX: Use INSERT ... ON DUPLICATE KEY UPDATE so it works even if table is empty
            $stmt = $conn->prepare("INSERT INTO site_gallery (item_key, media_path) VALUES (?, ?) ON DUPLICATE KEY UPDATE media_path = ?");
            $stmt->bind_param("sss", $key, $target, $target);
            if ($stmt->execute()) {
                send_json(['status' => 'success', 'message' => 'Updated', 'new_path' => $target]);
            } else {
                send_json(['status' => 'error', 'message' => 'DB Error']);
            }
        } else {
            send_json(['status' => 'error', 'message' => 'Upload Failed']);
        }
    } else {
        send_json(['status' => 'error', 'message' => 'No file']);
    }
}

$conn->close();
?>