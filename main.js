// main.js
// Mengubah background menjadi warna tertentu
document.body.style.backgroundColor = "rgb:(1, 2, 22, 0.8)";

// Data kejuaraan
const kejuaraan = [
  {
    nama: "Ujian Kenaikan Tingkat Kyu ASKI Periode III Tahun 2025",
    tanggal: "2025-10-12",
    src: "",
    join: "Event Telah Selesai",
  },
  {
    nama: "KEJUARAAN KARATE FORKI CUP 2025",
    tanggal: "2025-08-03",
    src: "screenshot_20250627_203512_Gallery.jpg",
    join: "Event Telah Selesai",
  },
  {
    nama: "SIMULASI KEJUARAAN KARATE AL BADAR CUP 1st 2025",
    tanggal: "2025-05-24",
    join: "Event Telah Selesai",
    src: "IMG-20250515-WA0011.jpg",
  },
  {
    nama: "DARANGDAN CHAMPIONSHIP 1st 2024",
    tanggal: "2024-09-08",
    join: "Event Telah Selesai",
    src: "darangdan.jpg",
  },
  {
    nama: "SIMULASI PERTANDINGAN KARATE BBC CUP 1 2024",
    tanggal: "2024-07-11",
    join: "Event Telah Selesai",
    src: "brams sport logo.png",
  },
  {
    nama: "SIKERDO SINCE 24 1st 2024",
    tanggal: "2024-03-01",
    join: "Event Telah Selesai",
    src: "logo.png",
  },
];

function tampilkanKejuaraan() {
  const container = document.getElementById('kejuaraan-container');
  if (!container) return;
  container.innerHTML = '';

  kejuaraan.forEach(k => {
    const card = document.createElement('div');
    card.className = 'kejuaraan-card';

   // Judul
  const title = document.createElement('h3');
  title.innerText = k.nama;
  title.className = 'kejuaraan-text';

  // Tanggal
  const date = document.createElement('p');
  date.innerText = `Tanggal: ${k.tanggal}`;
  date.className = 'kejuaraan-text';

  // Gambar
  const img = document.createElement('img');
  img.src = k.src;
  img.alt = 'Foto Kejuaraan';
  img.className = 'kejuaraan-image';

  // Tombol Join
  const btnJoin = document.createElement('button');
  btnJoin.innerText = k.join;
  btnJoin.className = 'btn';

    // Event klik tombol
    btnJoin.addEventListener('click', () => {
      if (k.join === 'Event Telah Selesai') {
        alert('Maaf, event ini sudah selesai.');
      } else {
        // Jika event masih aktif, arahkan ke halaman pendaftaran
        window.location.href = 'register.html'; // Ganti sesuai halaman pendaftaran kamu
      }
    });

    // Tambahkan elemen ke kartu
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(img);
    card.appendChild(btnJoin);

    // Tambahkan kartu ke container
    container.appendChild(card);
  });
}

// Panggil fungsi saat halaman dimuat
window.onload = tampilkanKejuaraan;


