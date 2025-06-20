// ----- 5'ten geriye doğru geri sayım -----
let timeLeft = 5; // Kalan süre
const countEl = document.getElementById("count");
const username = localStorage.getItem("username") || "Oyuncu"; // Kullanıcı adını al

document.querySelector(
  "h2"
).textContent = `${username}, hazır mısınız? Oyun başlıyor!`; // Kullanıcıya mesaj göster

const interval = setInterval(() => {
  timeLeft--; // Süreyi azalt
  countEl.textContent = timeLeft; // Kalan süreyi ekrana yaz

  if (timeLeft === 0) {
    clearInterval(interval); // Geri sayımı durdur
    window.location.href = "game.html"; // game.html sayfasına yönlendir
  }
}, 1000);
