-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-01-2024 a las 03:19:03
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `curriculum`
--
CREATE DATABASE IF NOT EXISTS `curriculum` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `curriculum`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curriculum`
--

CREATE TABLE `curriculum` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido_paterno` varchar(50) DEFAULT NULL,
  `apellido_materno` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `correo_electronico` varchar(50) DEFAULT NULL,
  `preparacion_academica` varchar(100) DEFAULT NULL,
  `linkedin` varchar(100) DEFAULT NULL,
  `github` varchar(100) DEFAULT NULL,
  `experiencia_profesional` text DEFAULT NULL,
  `idiomas` varchar(50) DEFAULT NULL,
  `habilidades` varchar(100) DEFAULT NULL,
  `objetivo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curriculum`
--

INSERT INTO `curriculum` (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `direccion`, `telefono`, `correo_electronico`, `preparacion_academica`, `linkedin`, `github`, `experiencia_profesional`, `idiomas`, `habilidades`, `objetivo`) VALUES
(7, 'Jared Emiliano', 'Frias', 'Aguilar', 'De las Rosas #113', '61800000000', 'jfassj@gmail.com', 'Universidad', '@jfassj', '@jfassj', 'Mucha', 'Ingles, Español', 'Muchas', 'muchos pero muchos');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `curriculum`
--
ALTER TABLE `curriculum`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `curriculum`
--
ALTER TABLE `curriculum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
