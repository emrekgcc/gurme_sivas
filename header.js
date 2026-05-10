// Logo ve menü linklerini her sayfada tekrar tekrar yazmamak için dinamik olarak buradan yüklüyoruz.
function loadHeader() {
    const headerHTML = `
      <nav>
        <div class="logo">
            <a href="index.html">
                <!-- width/height eklendi: tarayıcı resim yüklenmeden önce alan rezerve eder (CLS = 0) -->
                <img src="assets/images/gurme-sivas-logo.webp"
                     alt="Gurme Sivas Ana Sayfaya Dön"
                     width="90"
                     height="90">
            </a>
        </div>
        <ul>
            <li><a href="about.html">Hakkımızda</a></li>
            <li><a href="contact.html">İletişim</a></li>
        </ul>
    </nav>`;

    const headerEl = document.querySelector('header');
    if (headerEl) headerEl.innerHTML = headerHTML;
}

// defer ile yüklenen script'lerde DOMContentLoaded zaten geçmiş olabilir,
// load yerine DOMContentLoaded kullanmak daha güvenli ve hızlıdır.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}
