-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Apr 2023 pada 05.30
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `turtor-nest`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `file_kita`
--

CREATE TABLE `file_kita` (
  `id` int(11) NOT NULL,
  `nama` varchar(500) NOT NULL,
  `deskripsi` text NOT NULL,
  `isPublic` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `file_kita`
--

INSERT INTO `file_kita` (`id`, `nama`, `deskripsi`, `isPublic`) VALUES
(3, 'Ijazah', 'Ijazah S1', 1),
(4, 'Ijazah', 'Ijazah SMA', 0),
(6, 'KTP', 'FC KTP Depan', 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `file_kita`
--
ALTER TABLE `file_kita`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `file_kita`
--
ALTER TABLE `file_kita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
