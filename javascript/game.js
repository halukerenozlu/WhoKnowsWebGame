/* ---------- Sorular ---------- */
const questions = [
  {
    text: "Türkiye Cumhuriyeti hangi yılda kuruldu?",
    choices: ["1919", "1920", "1923", "1925"],
    answer: 2,
  },
  {
    text: "Dünya'nın en büyük okyanusu hangisidir?",
    choices: ["Hint", "Atlantik", "Arktik", "Pasifik"],
    answer: 3,
  },
  {
    text: "İstanbul'u fetheden padişah kimdir?",
    choices: ["II. Bayezid", "Yavuz Selim", "Kanuni", "Fatih Sultan Mehmet"],
    answer: 3,
  },
  {
    text: "1 litre kaç mililitre eder?",
    choices: ["10", "100", "500", "1000"],
    answer: 3,
  },
  {
    text: "Dünyanın en uzun nehri hangisidir?",
    choices: ["Nil", "Amazon", "Yangtze", "Mississippi"],
    answer: 1,
  },
  {
    text: "I. Dünya Savaşı'nı başlatan suikast nerede oldu?",
    choices: ["Belgrad", "Viyana", "Venedik", "Saraybosna"],
    answer: 3,
  },
  {
    text: "Güneş Sistemi'ndeki en büyük gezegen?",
    choices: ["Jüpiter", "Satürn", "Neptün", "Dünya"],
    answer: 0,
  },
  {
    text: "DNA'nın temel birimi?",
    choices: ["Aminoasit", "Nükleotid", "Enzim", "Protein"],
    answer: 1,
  },
  {
    text: "Suyun kimyasal formülü?",
    choices: ["H2O", "CO2", "NaCl", "O2"],
    answer: 0,
  },
  {
    text: "Türk alfabesinde kaç harf var?",
    choices: ["28", "29", "30", "31"],
    answer: 1,
  },
  {
    text: "İlk Nobel alan Türk bilim insanı?",
    choices: ["Aziz Sancar", "Orhan Pamuk", "Nazım Hikmet", "Cahit Arf"],
    answer: 0,
  },
  {
    text: "Europa hangi gezegenin uydusudur?",
    choices: ["Mars", "Jüpiter", "Satürn", "Neptün"],
    answer: 1,
  },
  {
    text: "FIFA Dünya Kupası'nı en çok kazanan ülke?",
    choices: ["Almanya", "İspanya", "Brezilya", "Fransa"],
    answer: 2,
  },
  {
    text: "En çok satan solo albüm hangisidir?",
    choices: ["Thriller", "Ray of Light", "Blue Hawaii", "Invincible"],
    answer: 0,
  },
  {
    text: "Dünya üzerindeki en yüksek yerleşim yeri hangi ülkede?",
    choices: ["Peru", "Kazakistan", "Tibet", "Malezya"],
    answer: 0,
  },
  {
    text: "HTML açılımı nedir?",
    choices: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Home Tool ML",
      "Hyperlinks and Text ML",
    ],
    answer: 0,
  },
  {
    text: "Einstein'ın ünlü denklemi?",
    choices: ["F=ma", "E=mc²", "V=IR", "pV=nRT"],
    answer: 1,
  },
  {
    text: "Kuvvet birimi nedir?",
    choices: ["Pascal", "Joule", "Newton", "Watt"],
    answer: 2,
  },
  {
    text: "Karbonun atom numarası?",
    choices: ["4", "6", "8", "10"],
    answer: 1,
  },
  {
    text: "Python'da liste indisi kaçtan başlar?",
    choices: ["0", "1", "-1", "2"],
    answer: 0,
  },
  {
    text: "Aziz Vasil Katedrali hangi şehirde?",
    choices: ["Moskova", "Venedik", "Paris", "Hamburg"],
    answer: 0,
  },
  {
    text: "İlk insanlı Ay görevi?",
    choices: ["Apollo 8", "Apollo 11", "Apollo 13", "Apollo 17"],
    answer: 1,
  },
  {
    text: "En sert doğal madde?",
    choices: ["Kuvars", "Grafit", "Topaz", "Elmas"],
    answer: 3,
  },
  {
    text: "7'nin küpü kaçtır?",
    choices: ["49", "343", "512", "2401"],
    answer: 1,
  },
  {
    text: "Photoshop hangi şirketin ürünü?",
    choices: ["Microsoft", "Adobe", "Corel", "Autodesk"],
    answer: 1,
  },
  {
    text: "RGB modelinde renkler toplandığında ortaya çıkan renk?",
    choices: ["Beyaz", "Siyah", "Kırmızı", "Mavi"],
    answer: 0,
  },
  {
    text: "The Beatles grubunun solisti kimdir?",
    choices: [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr",
    ],
    answer: 0,
  },
  {
    text: "Dünya'nın doğal uydusu?",
    choices: ["Titan", "Ay", "Europa", "Phobos"],
    answer: 1,
  },
  {
    text: "Atom çekirdeğinde hangisi bulunmaz?",
    choices: ["Proton", "Elektron", "Nötron", "Hepsi bulunur"],
    answer: 1,
  },
  {
    text: "NBA de en çok şampiyonluk kazanmış takım?",
    choices: [
      "Los Angeles Lakers",
      "Boston Celtics",
      "Chicago Bulls",
      "Miami Heat",
    ],
    answer: 1,
  },
  {
    text: "Aşağıdakilerden hangisi bir anakara üzerinde yer almayan, tamamen denizde oluşmuş bir ülkedir?",
    choices: ["Singapur", "Brunei", "Papua Yeni Gine", "Bahamalar"],
    answer: 3,
  },
  {
    text: "En fazla komşu ülkeye sahip ülke hangisidir?",
    choices: ["Arjantin", "Rusya", "Çin", "Almanya"],
    answer: 1,
  },
  {
    text: "Ekvator aşağıdaki hangi ülkelerden geçmez?",
    choices: ["Brezilya", "Kenya", "Endonezya", "Hindistan"],
    answer: 3,
  },
  {
    text: "2019 tarihinde yanan Notre Dame Katedrali hangi ülkededir?",
    choices: ["İtalya", "Fransa", "Belçika", "Almanya"],
    answer: 1,
  },
  {
    text: "Dünyanın en küçük ülkesi nedir?",
    choices: ["Vatikan", "Mikronezya", "Polanya", "Ürdün"],
    answer: 0,
  },
  {
    text: "Olimpiyatlar'da en çok altın madalya kazanan sporcu kimdir?",
    choices: ["Micheal Phelps", "Larisa Latınina", "Paavo Nurmi", "Mark Spitz"],
    answer: 0,
  },
  {
    text: "En çok Ballon d'Or ödülünü kazanan oyuncu kimdir?",
    choices: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Michel Platini",
      "Johan Cryuff",
    ],
    answer: 1,
  },
  {
    text: "Nba de bir sezon içerisinde en yüksek sayı ortalamasına sahip kişi kimdir?",
    choices: [
      "Micheal jordan",
      "Lebron James",
      "Wilt Chamberlain",
      "James harden",
    ],
    answer: 2,
  },
  {
    text: "Grand Slam tek erkekler de en çok sampiyon olan kimdir?",
    choices: ["Rafael Nadal", "Novak Dokovic", "Roger Federer", "Pere Sampras"],
    answer: 1,
  },
  {
    text: "100 metreyi en hızlı koşan kişi kimdir?",
    choices: ["Yohan Blake", "Justin Gatlin", "Usain Bolt", "Asafa Powell"],
    answer: 2,
  },
  {
    text: "En hızlı Maraton koşucusu kimdir?",
    choices: [
      "Eliud Kipchoge",
      "Kelvin Kiptum",
      "Kenenisa Bekele",
      "Benson Kipruto",
    ],
    answer: 1,
  },
  {
    text: "NFL de en çok şampiyon olan oyuncu kimdir?",
    choices: ["Herb Adderley", "Tom Brady", "Forrest Gregg", "Fuzzy Thurston"],
    answer: 1,
  },
  {
    text: "MLB de en çok şampiyon olan takım hangisidir?",
    choices: [
      "St. Louis Cardinals",
      "Boston Red Sox",
      "New York Yankees",
      "San Fransisco Giants",
    ],
    answer: 2,
  },
  {
    text: "Nba tarihinin en genç MVP(En değerli oyuncu)si kimdir?",
    choices: ["Lebron James", "Kobe Bryant", "Derrick Rose", "Dirk Nowitzki"],
    answer: 2,
  },
  {
    text: "FIFA dünya kupasında en çok Şampiyon olan takım hangisidir?",
    choices: ["Almanya", "İtalya", "İngiltere", "Brezilya"],
    answer: 3,
  },
  {
    text: "F1 Grand Pix I en çok kazanan kişi kimdir?",
    choices: [
      "Max Verstappen",
      "Lewis Hamilton",
      "Micheal Schumacher",
      "Aryton Senna",
    ],
    answer: 1,
  },
  {
    text: "İkinci dünya savaşı hangi yıl başlamıştır?",
    choices: ["1945", "1939", "1928", "1935"],
    answer: 1,
  },
  {
    text: "Sovyet Sosyalist Cumhuriyetler Birliğinin dağıldığı yıl nedir?",
    choices: ["1991", "1998", "1980", "1995"],
    answer: 0,
  },
  {
    text: "Berlin Duvarı hangi yıl yıkılmıştır?",
    choices: ["1980", "1989", "1991", "1985"],
    answer: 1,
  },
  {
    text: "Mustafa Kemal Atatürk ün Samsuna çıktığı tarih hangisidir? ",
    choices: [
      "23 Nisan 1920",
      "30 Ağustos 1922",
      "19 Mayıs 1919",
      "29 Ekim 1923",
    ],
    answer: 2,
  },
  {
    text: "Yüzyıl Savaşarının bitiş tarihi hangisidir?",
    choices: ["1437", "1453", "1337", "1412"],
    answer: 1,
  },
  {
    text: "Japonyada Sengoku dönemini sona erdiren kişi kimdir?",
    choices: [
      "Toyotomi Hideyoshi",
      "Oda Nobuyuki",
      "Konoe Sakihisa",
      "Oda Nobunaga",
    ],
    answer: 3,
  },
  {
    text: "Napolyon Bonapart hangi savaşta kesin olarak yenilgiye uğramıştır?",
    choices: [
      "Austerlitz Savaşı",
      "Leipzig Savaşı",
      "Waterloo Savaşı",
      "Trafalgar Savaşı",
    ],
    answer: 2,
  },
  {
    text: "Kara ölüm veba salgını hangi yüzyıllarda Avrupaya ulaşmıştır?",
    choices: ["10. yüzyıl", "12.Yüzyıl", "14.Yüzyıl", "16.Yüzyıl"],
    answer: 2,
  },
  {
    text: "İkinci Dünya Savaşında Almanya nın saldırdığı ilk ülke hangisidir?",
    choices: ["Belçika", "Fransa", "Polonya", "İtalya"],
    answer: 2,
  },
];

/* ---------- Kurallar ve DOM ---------- */
let current = 0, // Şu anki soru indeksi
  lock = false, // Kullanıcı seçim yaptıktan sonra kilit durumu
  timerId = null, // Zamanlayıcı ID'si
  score = 0; // Kullanıcının doğru cevap sayısı

// Rastgele 10 soru seç
const selectedQuestions = getRandomQuestions(questions, 10);

const bar = document.getElementById("bar"), // İlerleme çubuğu
  timerBar = document.getElementById("timerBar"), // Zaman çubuğu
  counter = document.getElementById("counter"), // Soru sayacı
  questionEl = document.getElementById("question"), // Soru metni
  choicesEl = document.getElementById("choices"), // Seçenekler
  toast = document.getElementById("toast"), // Skor balonu
  scoreTxt = document.getElementById("scoreText"), // Skor metni
  progressWrap = document.getElementById("progressWrap"), // İlerleme çubuğu sarmalayıcı
  timeWrap = document.getElementById("timeWrap"), // Zaman çubuğu sarmalayıcı
  content = document.getElementById("content"), // İçerik alanı
  returnToLogin = document.getElementById("returnToLogin"); // Geri dön butonu

/* ---------- Başlat ---------- */
nextQuestion(); // İlk soruyu başlat

/* ---------- Fonksiyonlar ---------- */
function getRandomQuestions(allQuestions, count) {
  // Tüm sorulardan rastgele belirli sayıda soru seç
  return allQuestions.sort(() => Math.random() - 0.5).slice(0, count);
}

function nextQuestion() {
  lock = false; // Kullanıcı seçim yapabilir
  choicesEl.innerHTML = ""; // Seçenekleri temizle
  if (current >= selectedQuestions.length) {
    finish(); // Tüm sorular bittiğinde oyunu bitir
    return;
  }

  const q = selectedQuestions[current]; // Şu anki soru
  questionEl.textContent = q.text; // Soruyu ekrana yaz
  counter.textContent = `Soru ${current + 1} / ${selectedQuestions.length}`; // Soru sayacını güncelle
  bar.style.height = ((current + 1) / selectedQuestions.length) * 100 + "%"; // İlerleme çubuğunu güncelle

  q.choices.forEach((c, i) => {
    // Her bir seçenek için buton oluştur
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = c;
    btn.onclick = () => selectAnswer(btn, i, q.answer); // Seçenek tıklandığında cevap kontrolü
    choicesEl.appendChild(btn);
  });

  startTimer(); // Zamanlayıcıyı başlat
}

function startTimer() {
  clearTimeout(timerId); // Önceki zamanlayıcıyı temizle
  const duration = 10; // Her soru için 10 saniye

  // Zaman çubuğunu başlangıç durumuna getir
  timerBar.style.transition = "none";
  timerBar.style.transform = "scaleX(1)";

  // Animasyonu yeniden tetiklemek için
  void timerBar.offsetWidth;

  // Zaman çubuğu animasyonını başlat
  timerBar.style.transition = `transform ${duration}s linear`;
  timerBar.style.transform = "scaleX(0)";

  timerId = setTimeout(autoNext, duration * 1000); // Süre dolduğunda otomatik geçiş
}

function selectAnswer(btn, idx, ans) {
  if (lock) return; // Kullanıcı seçim yaptıysa işlem yapma
  lock = true; // Seçim yapıldıktan sonra kilitle
  clearTimeout(timerId); // Zamanlayıcıyı durdur
  const all = [...document.querySelectorAll(".choice")]; // Tüm seçenekleri al
  all.forEach((b) => (b.disabled = true)); // Tüm seçenekleri devre dışı bırak
  if (idx === ans) {
    score++; // Doğru cevap ise skoru artır
    btn.classList.add("correct"); // Doğru cevabı işaretle
  } else {
    btn.classList.add("wrong"); // Yanlış cevabı işaretle
    all[ans].classList.add("correct"); // Doğru cevabı göster
  }
  setTimeout(() => {
    current++; // Bir sonraki soruya geç
    nextQuestion();
  }, 1000);
}

function autoNext() {
  // Süre dolduğunda yanlış say
  const all = [...document.querySelectorAll(".choice")];
  all.forEach((b) => (b.disabled = true));
  all[selectedQuestions[current].answer].classList.add("correct"); // Doğru cevabı göster
  setTimeout(() => {
    current++; // Bir sonraki soruya geç
    nextQuestion();
  }, 1000);
}

function finish() {
  questionEl.textContent = ""; // Önceki soruyu temizle
  questionEl.innerHTML =
    '<div style="text-align:center;font-size:1.5em;">Yarışma Bitti. Tebrikler🎉</div>'; // Oyun bitti mesajı ortalı
  choicesEl.innerHTML = ""; // Seçenekleri temizle
  counter.textContent = ""; // Sayaç bilgisini temizle
  progressWrap.style.display = "none"; // İlerleme çubuğunu gizle
  timeWrap.style.display = "none"; // Zaman çubuğunu gizle

  const big = document.createElement("h1"); // Skor için büyük bir başlık oluştur
  if (score >= 5) {
    big.textContent = `${score} / ${selectedQuestions.length} Doğru - \nBaşarılı oldunuz.`; // Başarı mesajı
    big.classList.add("success-message");
  } else {
    big.textContent = `${score} / ${selectedQuestions.length} Doğru - \nBaşarısız oldunuz, tekrar deneyiniz.`; // Başarısızlık mesajı
    big.classList.add("fail-message");
  }
  content.appendChild(big);

  scoreTxt.textContent = `${score} / ${selectedQuestions.length} doğru`;
  // Skor balonunu güncelle
  toast.classList.add("show"); // Skor balonunu göster
  returnToLogin.style.display = "block"; // Geri dön butonunu göster

  saveScore(score, selectedQuestions.length); // Skoru kaydet
  updateScoreboard(); // Skor tablosunu güncelle
}

function saveScore(score, total) {
  const username = localStorage.getItem("username") || "Anonim"; // Kullanıcı adını al
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({ username, score, total, date: new Date().toLocaleString() }); // Yeni skoru ekle
  if (scores.length > 3) scores.shift(); // Sadece son 3 skoru tut
  localStorage.setItem("scores", JSON.stringify(scores)); // Skorları sakla
}

function updateScoreboard() {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  const scoreList = document.getElementById("scoreList");
  scoreList.innerHTML = ""; // Mevcut listeyi temizle
  scores.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.username}: ${entry.score} / ${entry.total}`;
    scoreList.appendChild(li);
  });
}

// Skor tablosu butonunu oluştur
const scoreboardButton = document.createElement("button");
scoreboardButton.className = "scoreboard-button";
scoreboardButton.textContent = "📊";
document.body.appendChild(scoreboardButton);

scoreboardButton.addEventListener("click", () => {
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.classList.toggle("active"); // Skor tablosunu aç/kapat
});

// Sayfa yüklendiğinde skor tablosunu güncelle
updateScoreboard();

returnToLogin.addEventListener("click", () => {
  window.location.href = "login.html"; // Giriş sayfasına yönlendir
});

// Oyun penceresi kapatıldığında skorları sıfırla
window.addEventListener("beforeunload", () => {
  localStorage.removeItem("scores"); // Skorları sıfırla
});
