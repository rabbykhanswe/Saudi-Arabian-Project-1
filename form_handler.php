<?php
// --- DISABLE ERROR DISPLAY TO BROWSER (CRITICAL FOR JSON) ---
ini_set('display_errors', 0);
error_reporting(0);

header('Content-Type: application/json');
$response = ['status' => 'error', 'message' => 'Unknown error occurred'];

$servername = "localhost";
$username = "u833477180_fix";
$password = "@Fixed00#";
$dbname = "u833477180_fix";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) { throw new Exception("DB Connection Failed"); }
    $conn->set_charset("utf8mb4");

    $formType = isset($_POST['form_type']) ? $_POST['form_type'] : '';

    if ($formType === 'review' && $_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars(trim($_POST['name']));
        $location = htmlspecialchars(trim($_POST['location']));
        $rating = intval($_POST['rating']);
        $reviewText = htmlspecialchars(trim($_POST['reviewText']));
        $photoPath = null;

        if (isset($_FILES['photo']) && $_FILES['photo']['error'] == 0) {
            $targetDir = "uploads/";
            if (!file_exists($targetDir)) mkdir($targetDir, 0777, true);
            $fileName = uniqid() . '_' . time() . '.' . pathinfo($_FILES["photo"]["name"], PATHINFO_EXTENSION);
            $targetFile = $targetDir . $fileName;
            if (move_uploaded_file($_FILES["photo"]["tmp_name"], $targetFile)) {
                $photoPath = $targetFile;
            }
        }

        $stmt = $conn->prepare("INSERT INTO reviews (name, location, rating, review_text, photo_path) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiss", $name, $location, $rating, $reviewText, $photoPath);
        if ($stmt->execute()) {
            $response = ['status' => 'success', 'message' => 'Review Submitted!'];
        } else {
            throw new Exception("Insert Failed");
        }
        $stmt->close();

    } elseif ($formType === 'contact' && $_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars(trim($_POST['name']));
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars(trim($_POST['message']));

        $stmt = $conn->prepare("INSERT INTO contact_requests (name, email, message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $message);
        if ($stmt->execute()) {
            $response = ['status' => 'success', 'message' => 'Message Sent!'];
        } else {
            throw new Exception("Insert Failed");
        }
        $stmt->close();
    } else {
        throw new Exception("Invalid Request");
    }
    $conn->close();

} catch (Exception $e) {
    $response = ['status' => 'error', 'message' => $e->getMessage()];
}

echo json_encode($response);
exit();
?>