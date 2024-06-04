// //yerleşik fonksuiyonlar
// alert("Merhaba Dünya")
// console.log("sistem kaydı")
// //promt
// let isim = prompt("Adınızı giriniz")
// document.write("Merhaba " + isim)

function bke() {
    let boy = prompt("boyunuzu giriniz")
    let kilo = prompt("kilonuzu giriniz")

    let sonuc = kilo / (boy * boy) * 10000;
    let hesapsonucu = document.getElementById("endexSonucu");
    hesapsonucu.textContent = "endex sonucu" + sonuc;

    if (sonuc < 18.5) {
        hesapsonucu.textContent = sonuc+ "zayıfsınız"
        hesapsonucu.style.color = "orange"
    } else if (sonuc >= 18.5 && sonuc < 24.9) {
        hesapsonucu.textContent = sonuc+ " "+"normal kilodasınız"
        hesapsonucu.style.color = "green"
    } else if (sonuc >= 25 && sonuc < 29.9) {
        hesapsonucu.textContent = sonuc+ "fazla kilolusunuz"
        hesapsonucu.style.color = "orange"
    } else if (sonuc >= 30 && sonuc < 34.9) {
        hesapsonucu.textContent = sonuc+"1. derece obezsiniz"
        hesapsonucu.style.color = "red"
    } else if (sonuc >= 35 && sonuc < 44.9) {
        hesapsonucu.textContent = sonuc+"2. derece obezsiniz"
        hesapsonucu.style.color = "red"
    } else {
        hesapsonucu.textContent = sonuc+"3. derece obezsiniz"
        hesapsonucu.style.color = "red"
    }
}