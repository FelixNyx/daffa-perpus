// Adding animation delay to elements
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.card-animate');
    cards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.3) + "s";
    });
});


        // Fungsi untuk menyimpan dan menampilkan transaksi dari localStorage
        function loadTransaksi() {
            const transaksi = JSON.parse(localStorage.getItem('transaksi')) || [];

            // Menyimpan transaksi baru ke localStorage
            document.getElementById('transaksiForm').addEventListener('submit', function(event) {
                event.preventDefault();

                // Ambil data dari form
                const namaTransaksi = document.getElementById('nama_transaksi').value;
                const jumlah = document.getElementById('jumlah').value;
                const kategori = document.getElementById('kategori').value;
                const tanggalPinjam = document.getElementById('tanggal_pinjam').value;
                const tanggalKembali = document.getElementById('tanggal_kembali').value;

                // Tambahkan transaksi baru
                transaksi.push({ namaTransaksi, jumlah, kategori, tanggalPinjam, tanggalKembali });

                // Simpan kembali ke localStorage
                localStorage.setItem('transaksi', JSON.stringify(transaksi));

                // Reset form
                this.reset();

                alert('Transaksi berhasil disimpan!');
            });
        }

        // Memuat transaksi saat halaman dibuka
        window.onload = loadTransaksi;

        // Muat data transaksi dari localStorage
        const transaksi = JSON.parse(localStorage.getItem('transaksi')) || [];

        const transaksiTableBody = document.querySelector('#transaksiTable tbody');
        transaksi.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.namaTransaksi}</td>
                <td>${item.jumlah}</td>
                <td>${item.kategori}</td>
                <td>${item.tanggalPinjam}</td>
                <td>${item.tanggalKembali}</td>
            `;
            transaksiTableBody.appendChild(row);
        });

        // Tampilkan pesan jika tidak ada transaksi
        if (transaksi.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="6" class="text-center">Belum ada transaksi.</td>
            `;
            transaksiTableBody.appendChild(row);
        }