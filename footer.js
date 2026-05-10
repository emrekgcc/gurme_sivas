// Sayfa alt bilgilerini ve sosyal medya linklerini dinamik olarak basıyoruz.
function loadFooter() {
    const footerHTML = `
        <div class="footer-container">
            <div class="footer-logo">
                <!-- width/height eklendi: CLS koruması -->
                <img src="assets/images/gurme-sivas-logo.webp"
                     alt="Gurme Sivas"
                     width="80"
                     height="80">
            </div>
            <div class="footer-social">
                <h4>Bizi Takip Edin</h4>
                <div class="social-icons">
                    <a href="https://www.facebook.com/gurmesivas"
                       target="_blank" rel="noopener noreferrer"
                       aria-label="Facebook Sayfamız">
                        <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/gurmesivas1"
                       target="_blank" rel="noopener noreferrer"
                       aria-label="Instagram Sayfamız">
                        <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.youtube.com/@gurmesivas"
                       target="_blank" rel="noopener noreferrer"
                       aria-label="YouTube Kanalımız">
                        <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Gurme Sivas. Tüm Hakları Saklıdır.</p>
            </div>
        </div>`;

    const footerEl = document.querySelector('footer');
    if (footerEl) footerEl.innerHTML = footerHTML;
}

// defer ile yüklenen script'lerde DOMContentLoaded daha hızlı ve güvenlidir
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
