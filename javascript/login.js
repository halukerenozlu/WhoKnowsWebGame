document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Formun varsayılan davranışını engelle
  const name = this.username.value.trim(); // Kullanıcı adını al ve boşlukları temizle

  if (name.length > 15) {
    alert(
      "Hatalı kullanıcı adı, maksimum 15 karaktere izin verilmektedir. Lütfen tekrar deneyiniz."
    );
    this.username.value = ""; // Giriş alanını temizle
    return; // İşlemi durdur
  }

  if (name) {
    alert(
      `Hoş geldin ${name}! Başarılar!\n\nKurallar:\n1. Yan kaynaklardan yararlanmak yasaktır. \n2. Her soru 10 saniyedir, 10 soru bulunmaktadır. \n3. Her sorunun 4 şıkkı vardır. \n\nBaşarılar dileriz!`
    );
    localStorage.setItem("username", name); // Kullanıcı adını sakla
    window.location.href = "gameStart.html"; // gameStart.html sayfasına yönlendir
  }
});
