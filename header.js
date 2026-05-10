// Logo ve menü linklerini her sayfada tekrar tekrar yazmamak için dinamik olarak buradan yüklüyoruz.
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

// DOMContentLoaded: DOM hazır olunca hemen çalışır.
// 'load' olayı tüm resimler ve kaynaklar bitene kadar bekler — kötü seçimdir.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}