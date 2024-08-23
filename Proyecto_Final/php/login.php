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

    // Consulta SQL segura con parámetros preparados
    $sql = $conn->prepare("SELECT * FROM usuarios WHERE username=? AND password=?");
    $sql->bind_param("ss", $user, $pass);
    $sql->execute();
    $result = $sql->get_result();

    if ($result->num_rows > 0) {
        $_SESSION['username'] = $user;
        $_SESSION['profileImage'] = '../images/default-profile.png';
        echo "<script>
                sessionStorage.setItem('authenticated', 'true');
                sessionStorage.setItem('username', '$user');
                sessionStorage.setItem('profileImage', '../images/default-profile.png');
                window.location.href = '../html/index.html';
            </script>";
    } else {
        echo "Usuario o contraseña incorrectos";
    }
    $sql->close();
}

$conn->close();
?>