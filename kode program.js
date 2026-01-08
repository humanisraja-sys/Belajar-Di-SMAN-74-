// 1. Mengambil elemen berdasarkan ID
const pesanElemen = document.getElementById("pesan");
const tombol = document.getElementById("btn-klik");
const statusTeks = document.getElementById("status");

// 2. Mengubah isi teks langsung saat file dimuat
pesanElemen.innerHTML = "Status: <span class='highlight'>JavaScript Eksternal Terhubung!</span>";

// 3. Menambahkan Event Listener (Cara modern menggantikan onclick inline)
tombol.addEventListener("click", function() {
    statusTeks.innerText = "Tombol telah diklik pada: " + new Date().toLocaleTimeString();
    console.log("Log: User menekan tombol.");
    
    // Memberikan efek sederhana
    document.body.style.backgroundColor = "#f0f0f0";
});