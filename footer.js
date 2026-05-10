// Sayfa alt bilgilerini ve sosyal medya linklerini dinamik olarak basıyoruz.
// Hem daha temiz bir yapı oldu hem de bir şeyi değiştirmek gerekirse tek dosyadan hallediyorum.
function loadFooter() {
    const footerHTML = `
        <div class="footer-container">
            <div class="footer-logo">
                <img src="assets/images/gurme-sivas-logo.webp" alt="Gurme Sivas">
            </div>
           
            <div class="footer-social">
                <h4>Bizi Takip Edin</h4>
                <div class="social-icons">
                    <a href="https://www.facebook.com/gurmesivas" target="_blank" rel="noopener noreferrer" aria-label="Facebook Sayfamız"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/gurmesivas1" target="_blank" rel="noopener noreferrer" aria-label="Instagram Sayfamız"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.youtube.com/@gurmesivas" target="_blank" rel="noopener noreferrer" aria-label="YouTube Kanalımız"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
                </div>
            </div>

             <div class="footer-bottom">
        <p>&copy; 2026 Gurme Sivas. Tüm Hakları Saklıdır.</p>
    </div> 
          </div>`;

    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}
window.addEventListener('load', loadFooter);