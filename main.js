// Sayfa yüklendiğinde sürekli HTML'de aramasın diye elemanları en başta seçtik
const grid = document.getElementById('restaurant-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Restoran kartlarını ekrana basan ana fonksiyonumuz
function restoranlariGoster(liste) {
    grid.innerHTML = ""; // Önce ekranı temizliyoruz ki üst üste binmesin

    // Puanı yüksek olanlar en üstte çıksın diye sıralama (sort) işlemi yapıyoruz
    const siraliListe = [...liste].sort((a, b) => {
        const puanA = parseFloat(a.puan) || 0;
        const puanB = parseFloat(b.puan) || 0;
        return puanB - puanA;
    });

    // Her bir restoran için HTML kartı oluşturup ekrana basıyoruz
    siraliListe.forEach((restoran) => {
        // Detay sayfasına giderken ID'yi doğru alsın diye orijinal indexi buluyoruz
        const orijinalIndex = restoranlar.indexOf(restoran);

        // Puanı olmayan yeni mekanlarda 'NaN' yazmasın diye ufak bir kontrol
        const gorunecekPuan = parseFloat(restoran.puan) ? restoran.puan : "Puan Yok";

        // PERFORMANS GÜNCELLEMESİ: layout shift engellemek için width/height eklendi.
        const kartHTML = `
            <div class="card">
                <img src="${restoran.resim}" alt="${restoran.ad}" class="card-img" loading="lazy" width="400" height="230">
                <div class="card-body">
                    <div class="card-info">
                        <h3>${restoran.ad}</h3>
                        <p>${restoran.aciklama}</p>
                    </div>
                    <button class="btn-kesfet" aria-label="${restoran.ad} detaylarını keşfet" onclick="window.location.href='detay.html?id=${orijinalIndex}'">KEŞFET</button>
                </div>
                <div class="puan-etiketi">⭐ ${gorunecekPuan}</div>
            </div>
        `;
        // Oluşturduğumuz kartı grid yapısının içine atıyoruz
        grid.innerHTML += kartHTML;
    });
}

// Sayfa ilk açıldığında tüm restoranları getirsin
restoranlariGoster(restoranlar);

// Filtre butonlarına tıklama olaylarını dinliyoruz
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Önce aktif olan butonun rengini eski haline getiriyoruz
        const aktifBtn = document.querySelector('.filter-btn.active');
        if (aktifBtn) aktifBtn.classList.remove('active');

        // Tıklanan butonu aktif yapıyoruz (koyu renk oluyor)
        btn.classList.add('active');

        // Kategori değiştirirken arama kutusunda yazı kaldıysa onu temizleyelim ki karışıklık olmasın
        const sInput = document.getElementById('searchInput');
        if (sInput) sInput.value = "";

        const secilenKategori = btn.getAttribute('data-filter');

        // "Tümü" seçildiyse hepsini yolla, yoksa kategoriye göre filtrele
        if (secilenKategori === "all") {
            restoranlariGoster(restoranlar);
        } else {
            const filtrelenmis = restoranlar.filter(r => r.kategori === secilenKategori);
            restoranlariGoster(filtrelenmis);
        }
    });
});

// --- ARAMA MOTORU İŞLEMLERİ ---
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    // Kullanıcı her harf girdiğinde (input) anında arama yapsın
    searchInput.addEventListener('input', (e) => {
        const arananKelime = e.target.value.toLowerCase().trim();

        // Arama yaparken yukarıdaki kategori filtrelerinin aktifliğini kaldıralım
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));

        // Eğer kullanıcı arama kutusunu tamamen silerse, sistemi başa döndür ("Tümü" aktif olsun)
        if (arananKelime === "") {
            const tumuBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (tumuBtn) tumuBtn.classList.add('active');
            restoranlariGoster(restoranlar);
            return;
        }

        // Restoran filtreleme mantığı
        const filtrelenmis = restoranlar.filter(restoran =>
            restoran.ad.toLowerCase().includes(arananKelime) ||
            restoran.aciklama.toLowerCase().includes(arananKelime) ||
            restoran.kategori.toLowerCase().includes(arananKelime) ||
            (restoran.detayliYazi && restoran.detayliYazi.toLowerCase().includes(arananKelime))
        );

        // Bulunan sonuçları ekrana basıyoruz
        restoranlariGoster(filtrelenmis);
    });
}