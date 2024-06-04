
//Yerleşik fonksiyonlar
// alert("Merhaba Js");
// console.log("Sistem Kaydı");
// //propmt -> Console.ReadLine()
// let isim=prompt("Adınızı Nedir?");
// document.write(isim);

function bke(){
    let boy=prompt("Boy giriniz (cm)");
    let kilo=prompt("Kilo giriniz (kg)");

    let sonuc=kilo/(boy*boy)*10000;
   
    let endexSonucu=document.getElementById("endexSonucu");
    let endexMetin=document.getElementById("endexMetin");
    let endexImg=document.getElementById("endexImg");
   
    endexSonucu.textContent="Endex Sonucu: "+sonuc;

    endexImg.style.width="100px";
    if(sonuc < 18.5){
        endexMetin.innerText="Düşük Kilolu";
        endexMetin.style.color="pink";
        endexImg.src="assets/images/dusuk.png";
    }
    else if(sonuc < 25){
        endexMetin.innerText="Normal Kilo";
        endexMetin.style.color="green";
        endexImg.src="assets/images/normal.png";
    }
    else if(sonuc < 30){
        endexMetin.innerText="Kilolu";
        endexMetin.style.color="orange";
        endexImg.src="assets/images/kilolu.png";
    }
    else if(sonuc >= 30){
        endexMetin.innerText="Obez";
        endexMetin.style.color="red";
        endexImg.src="assets/images/obez.png";
    }
}