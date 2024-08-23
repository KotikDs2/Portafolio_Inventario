-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS inventario;
USE inventario;

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    birthdate DATE NOT NULL,
    profile_image VARCHAR(255) DEFAULT '../images/default-profile.png'
);

-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

-- Conceder privilegios al usuario 'root' en la base de datos 'inventario'
GRANT ALL PRIVILEGES ON inventario.* TO 'root'@'localhost' IDENTIFIED BY 'tu_contraseña';
FLUSH PRIVILEGES;