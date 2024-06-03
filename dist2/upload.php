<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the "recordedFile" field exists in the POST data.
    if (isset($_FILES["recordedFile"])) {
        $uploadedFile = $_FILES["recordedFile"]["tmp_name"];

        // Check for file size and file type (adjust as per your requirements).
        $allowedTypes = ["audio/ogg", "audio/wav", "audio/mpeg"]; // Adjust to the correct MIME types.
        $maxFileSize = 50 * 1024 * 1024; // 50 MB

        if (in_array($_FILES["recordedFile"]["type"], $allowedTypes) &&
            $_FILES["recordedFile"]["size"] <= $maxFileSize) {
            // Generate a unique filename for the MP3 file.
            $mp3Filename = uniqid("audio_") . ".mp3";

            // Move the uploaded file to the "uploads" directory.
            $uploadDirectory = "../uploads/";
            $targetFile = $uploadDirectory . $mp3Filename;

            if (move_uploaded_file($uploadedFile, $targetFile)) {
                // File uploaded successfully.
                
                // Use FFmpeg to convert the uploaded audio file to MP3.
                $ffmpegCommand = "ffmpeg -i $targetFile $uploadDirectory$mp3Filename";
                shell_exec($ffmpegCommand);
                
                $response = [
                    "success" => true,
                    "message" => "File uploaded and converted to MP3 successfully.",
                    "mp3Filename" => $mp3Filename,
                ];
            } else {
                // Error moving the uploaded file.
                $response = [
                    "success" => false,
                    "message" => "Error moving the uploaded file.",
                ];
            }
        } else {
            // Invalid file type or size exceeds the limit.
            $response = [
                "success" => false,
                "message" => "Invalid file type or file size exceeds the limit.",
            ];
        }
    } else {
        // No file was received.
        $response = [
            "success" => false,
            "message" => "No audio file was received.",
        ];
    }

    // Return a JSON response including the MP3 filename.
    header("Content-Type: application/json");
    echo json_encode($response);
} else {
    // Return an error response for unsupported request methods.
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
