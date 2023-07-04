/* -------------------------------------------------------------------------- */
/*                      1 ile 100 aerasinda bir sayi tut                      */
/* -------------------------------------------------------------------------- */
let rastgeleSayi = Math.floor(Math.random() * 100 + 1);
console.log(rastgeleSayi);
/* -------------------------------------------------------------------------- */
/*                             variables tanimlama                            */
/* -------------------------------------------------------------------------- */
let hak = 3;
/* -------------------------------------------------------------------------- */
/*                           Selectors tanimlanmasi                           */
/* -------------------------------------------------------------------------- */
const kontrolBtn = document.querySelector(".kontrol-btn");
const tahminInput = document.querySelector(".tahmin-input");
const msg = document.querySelector(".msg");
const sakliNumber = document.querySelector(".sakli-number");
const hakSayisi = document.querySelector(".hak");
const tekrarBtn = document.querySelector(".tekrar-btn");

/* --------------- Check butonuna basildiginda kontrolleri yap -------------- */
kontrolBtn.addEventListener("click", () => {
  let tahminDegeri = Number(tahminInput.value);
  /* -------------- Eger tahmin degeri girilmediyse kullaniciya uyari ver ------------- */

  if (!tahminDegeri) {
    msg.innerText = "Lütfen Bir Sayı Giriniz";
  } else if (rastgeleSayi === tahminDegeri) {
    /* ---------- Eger rastgele sayi esitse inputan alinan tahmin degerine mesaj yaz--------- */
    msg.innerText = "Tebrikler Bildiniz 🤩";
    msg.style.color = "green";
    msg.style.fontSize = "50px";
    /* --------------------------- sakli sayiyi göster -------------------------- */
    sakliNumber.textContent = rastgeleSayi;
  } else {
    hak--;
    if (hak > 0) {
      tahminDegeri > rastgeleSayi
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> Azalt`)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x" ></i> Artir`);
    } else {
      /* -------------- eger tahmin hakki < 0 degilse  kaybettiniz mesajii ver--------------- */
      msg.innerText = "Kaybettiniz 😞";
      msg.style.color = "red";
      msg.style.fontSize = "50px";
      kontrolBtn.disabled = true;
      sakliNumber.textContent = rastgeleSayi;
    }
    hakSayisi.innerText = hak;
  }
  tahminInput.value = "";
});
/* -------------------------- tekrar tusuna basinca ------------------------- */
tekrarBtn.addEventListener("click", () => {
  rastgeleSayi = hak = 3;
  hakSayisi.innerText = hak;
  rastgeleSayi = Math.floor(Math.random() * 100 + 1);
  console.log(rastgeleSayi);
  kontrolBtn.disabled = false;
  sakliNumber.textContent = "?";
  tahminInput.value = "";
  msg.innerText = ".............";
});
