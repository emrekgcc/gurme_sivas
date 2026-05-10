// Aynı HTML menüsünü 4-5 farklı sayfaya kopyalayıp yapıştırmak yerine modüler bir yapı kurduk.
// Böylece menüde bir link değiştiğinde tüm sayfalarda otomatik güncelleniyor.
function loadHeader() {
    const headerHTML = `
      <nav>
        <div class="logo">
            <a href="index.html">
                <img src="assets/images/gurme-sivas-logo.webp"
                     alt="Gurme Sivas Logo"
                     width="90"
                     height="90"
                     fetchpriority="high">
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

// Güvenli render için 'load' yerine 'DOMContentLoaded' kullandık.
// Sayfadaki diğer tüm resimlerin yüklenmesini beklemeden menüyü hemen ekrana basıyor.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}