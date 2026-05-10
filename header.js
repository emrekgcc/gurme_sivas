// Logo ve menü linklerini her sayfada tekrar tekrar yazmamak için dinamik olarak buradan yüklüyoruz.
function loadHeader() {
    // Performans optimizasyonu için logo uzantısını .webp olarak güncelledik.
    const headerHTML = `
      <nav>
        <div class="logo">
            <a href="index.html">
                <img src="assets/images/gurme-sivas-logo.webp" alt="Gurme Sivas Logo">
            </a>
        </div>
        <ul>
            <li><a href="about.html">Hakkımızda</a></li>
            <li><a href="contact.html">İletişim</a></li>
            
        </ul>
    </nav>`;

    document.querySelector('header').innerHTML = headerHTML;
}

window.addEventListener('load', loadHeader);