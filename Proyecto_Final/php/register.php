<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "inventario";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $conn->real_escape_string($_POST['username']);
    $pass = $conn->real_escape_string($_POST['password']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $birthdate = $conn->real_escape_string($_POST['birthdate']);
    $profileImage = '../images/default-profile.png';

    // Consulta SQL segura con parámetros preparados
    $sql = $conn->prepare("INSERT INTO usuarios (username, password, email, phone, birthdate, profile_image) VALUES (?, ?, ?, ?, ?, ?)");
    $sql->bind_param("ssssss", $user, $pass, $email, $phone, $birthdate, $profileImage);

    if ($sql->execute()) {
        echo "Registro exitoso";
        header("Location: ../html/login.html");
    } else {
        echo "Error: " . $sql->error;
    }
    $sql->close();
}

$conn->close();
?>