const grid = document.getElementById('restaurant-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Zorunlu yeniden düzenleme engeli: indexOf döngü içinde çağrılırsa her kart için O(n) tarama olur.
// Başlangıçta bir kez Map oluşturarak O(1)'e indiriyoruz.
const restoranIndexMap = new Map(restoranlar.map((r, i) => [r, i]));

function restoranlariGoster(liste) {
    let htmlContent = "";

    const siraliListe = [...liste].sort((a, b) => {
        const puanA = parseFloat(a.puan) || 0;
        const puanB = parseFloat(b.puan) || 0;
        return puanB - puanA;
    });

    siraliListe.forEach((restoran, index) => {
        const orijinalIndex = restoranIndexMap.get(restoran);
        const gorunecekPuan = parseFloat(restoran.puan) ? restoran.puan : "Puan Yok";
        // İlk 3 kart eager (LCP için görünür alan), geri kalanlar lazy
        const loadingAttr = index < 3 ? 'eager' : 'lazy';

        htmlContent += `
            <a class="card" href="detay.html?id=${orijinalIndex}" aria-label="${restoran.ad} detaylarını keşfet">
                <div class="img-container">
                   <img src="${restoran.resim}"
                        alt="${restoran.ad}"
                        class="card-img"
                        loading="${loadingAttr}"
                        width="400"
                        height="230"
                        decoding="async">
                </div>
                <div class="card-body">
                    <div class="card-info">
                        <h3>${restoran.ad}</h3>
                        <p>${restoran.aciklama}</p>
                    </div>
                    <span class="btn-kesfet" aria-hidden="true">KEŞFET</span>
                </div>
                <div class="puan-etiketi">⭐ ${gorunecekPuan}</div>
            </a>
        `;
    });

    grid.innerHTML = htmlContent;
}

restoranlariGoster(restoranlar);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const aktifBtn = document.querySelector('.filter-btn.active');
        if (aktifBtn) aktifBtn.classList.remove('active');
        btn.classList.add('active');

        const sInput = document.getElementById('searchInput');
        if (sInput) sInput.value = "";

        const secilenKategori = btn.getAttribute('data-filter');
        if (secilenKategori === "all") {
            restoranlariGoster(restoranlar);
        } else {
            const filtrelenmis = restoranlar.filter(r => r.kategori === secilenKategori);
            restoranlariGoster(filtrelenmis);
        }
    });
});

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const arananKelime = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));

        if (arananKelime === "") {
            const tumuBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (tumuBtn) tumuBtn.classList.add('active');
            restoranlariGoster(restoranlar);
            return;
        }

        const filtrelenmis = restoranlar.filter(restoran =>
            restoran.ad.toLowerCase().includes(arananKelime) ||
            restoran.aciklama.toLowerCase().includes(arananKelime) ||
            restoran.kategori.toLowerCase().includes(arananKelime) ||
            (restoran.detayliYazi && restoran.detayliYazi.toLowerCase().includes(arananKelime))
        );
        restoranlariGoster(filtrelenmis);
    });
}