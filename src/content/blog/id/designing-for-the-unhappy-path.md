---
lang: id
translationKey: designing-for-the-unhappy-path
title: 'Software yang baik juga memikirkan saat terjadi kendala'
description: 'Keputusan kecil yang membuat antarmuka tetap membantu ketika sesuatu tidak berjalan sesuai rencana.'
pubDate: '2026-11-02'
category: 'Engineering'
draft: false
---
Formulir booking mudah dijelaskan ketika semuanya berjalan lancar: pilih waktu, isi data, lalu kirim. Pertanyaan desain yang lebih berguna adalah apa yang terjadi ketika salah satu langkah itu gagal.

Koneksi terputus. Orang lain mengambil jadwal terakhir. Seseorang menekan tombol dua kali karena seolah tidak terjadi apa-apa. Situasi seperti ini wajar terjadi dan layak mendapat respons yang mudah dipahami.

## Mulai dari janji yang diberikan

Setiap tindakan membawa janji tersirat. Tombol bertuliskan “Konfirmasi booking” memberi kesan bahwa jadwal sudah pasti. Jika sistem hanya mencatat permintaan untuk ditinjau staf, tulisan tersebut menjanjikan terlalu banyak.

“Ajukan jadwal pemeriksaan” menjelaskan tindakan itu dengan lebih tepat. Respons setelah berhasil dapat menerangkan apa yang sudah terjadi, apa yang masih menunggu, dan siapa yang akan melanjutkan prosesnya.

Sebelum merancang halaman sukses, tulis janji itu dengan bahasa sederhana. Langkah ini sering mengungkap keputusan produk yang belum tuntas sebelum berubah menjadi antarmuka yang membingungkan.

## Perlakukan waktu tunggu sebagai kondisi nyata

Menonaktifkan tombol kirim dapat mencegah sebagian klik berulang, tetapi belum menjelaskan apa yang sedang terjadi. Sertai kondisi tersebut dengan tulisan yang sesuai tindakan, seperti “Mengirim permintaan Anda…”, dan sampaikan pembaruan status kepada teknologi bantu.

Jika permintaan gagal, aktifkan kembali tindakannya dan pertahankan isian yang masih valid. Orang yang sudah mengisi data kontak seharusnya tidak perlu mengulang dari awal hanya karena koneksi sempat terputus.

Server tetap perlu mencegah pengiriman ganda. Menonaktifkan tombol adalah perilaku antarmuka; langkah itu belum menjamin bahwa sebuah permintaan hanya diproses sekali.

## Letakkan cara pemulihan di dekat masalah

Pesan kesalahan umum memberi tahu bahwa ada masalah. Pesan yang berguna membantu orang menyelesaikannya.

- Nomor telepon yang belum diisi perlu ditandai di dekat kolom nomor telepon.
- Jadwal yang sudah tidak tersedia perlu dijelaskan di dekat pemilih jadwal, beserta cara memilih waktu lain.
- Gangguan koneksi sementara perlu dijelaskan di dekat tombol kirim, beserta pilihan untuk mencoba kembali.

Jangan hapus seluruh formulir ketika hanya satu isian yang perlu diperbaiki. Pertahankan konteks dan pindahkan fokus secara terarah jika itu membantu orang menemukan masalahnya.

## Jelaskan keberhasilan secara spesifik

Tanda centang hijau memang menenangkan, tetapi informasi utamanya ada pada kata-kata. Tampilan sukses yang berguna mencakup nomor referensi permintaan, cabang dan waktu yang dipilih, serta langkah berikutnya.

Tampilan itu juga perlu membedakan permintaan yang tersimpan dengan jadwal yang sudah dikonfirmasi. Perbedaan ini mencegah keberhasilan teknis menimbulkan ekspektasi yang keliru.

## Tinjauan praktis

Sebelum menganggap sebuah interaksi selesai, coba jalankan dengan koneksi lambat, isian tidak valid, pilihan yang sudah kedaluwarsa, dan pengiriman berulang. Periksa apa yang diketahui pengguna pada setiap tahap dan apa yang dapat mereka lakukan berikutnya.

Tujuannya bukan menebak semua kemungkinan kegagalan. Buatlah kendala yang mungkin terjadi mudah dipahami dan dipulihkan. Dari situlah antarmuka yang berfungsi mulai terasa dapat diandalkan.
