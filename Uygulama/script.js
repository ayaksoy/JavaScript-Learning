
/*
    Uygulama

    1.  Başlat butonu ile uygulama başlayacak
    2.  Kullanıcı Girişi
    3.  Özellik seç (renk,font,font-size)
    4.  Seçenek ile devam edebilir
            sayı sayabilir (step belirlenecek+sıfırlama+durdurma),
            mevsim (resimli),
            zaman farkı bulma,
            random telefon no oluşturma,

*/
let startbtn=document.getElementById("start");
let system=document.getElementById("system");
system.style.display="none";
let systemStatus=false;
function start(){
    systemStatus=!systemStatus;

    if(systemStatus){
        system.style.display="block";
        startbtn.innerText="System Stop";
    }
    else{
        system.style.display="none";
        startbtn.innerText="System Start";
    }
}
let loginSystem=document.getElementById("login");
let proccess=document.getElementById("proccess");
proccess.style.display="none";
function login(){
    const email="erhan@kaya.com";
    const password="123";

    let inputEmail=document.getElementById("email").value;
    let inputPassword=document.getElementById("password").value;
    let loginMessage=document.getElementById("islogin");
    if(email===inputEmail && password===inputPassword){
        loginMessage.innerText="Login Success";
        proccess.style.display="block";
        loginSystem.style.display="none";

    }
    else{
        loginMessage.innerText="Login Error";
    }
}

function applyProperty(){
    //getElementByClassName çoğul yapı içerdiği için değerler array olarak gelir
    var style=document.getElementsByClassName("fontClass");

    let fColor=document.getElementById("fColor").value;
    let fFamily=document.getElementById("fFamily").value;
    let fSize=document.getElementById("fSize").value;
    for(var i=0;i<style.length;i++){
        style[i].style.color=fColor;
        style[i].style.fontFamily=fFamily;
        style[i].style.fontSize=fSize+"px";
    }
}
let SayiSayContent=document.getElementById("SayiSayContent");
SayiSayContent.style.display="none"
let MevsimBulContent=document.getElementById("MevsimBulContent");
MevsimBulContent.style.display="none"
function selectPoccess(){
    let SayiSay=document.getElementById("SayiSay").checked;
    let MevsimBul=document.getElementById("MevsimBul").checked;
    let ZamanFarki=document.getElementById("ZamanFarki").checked;
    let RandomTelefon=document.getElementById("RandomTelefon").checked;

    if(SayiSay){
        SayiSayContent.style.display="block"
        MevsimBulContent.style.display="none"
    }
    else if(MevsimBul){
        SayiSayContent.style.display="none"
        MevsimBulContent.style.display="block"

    }
    else if(ZamanFarki){
        zamanFarkiFunction();
    }
    else if(RandomTelefon){
        randomTelefonFunction();
    }
}
let sayiSay;
function sayiSayFunction(){
    clearTimeout(sayiSay);
    var sayi=0;
    var step=document.getElementById("sayiStep").value;
    var time=document.getElementById("sayiTime").value;
    sayiSay=setInterval(()=>{
        sayi+=Number(step);
        document.getElementById("sayiDegeri").innerText=sayi;
    },Number(time));
}
function mevsimBulFunction(){
    var mevsimSecim=document.getElementById("aySecim").value;
    var secilenMevsim=document.getElementById("secilenMevsim");
    var secilenMevsimImg=document.getElementById("secilenMevsimImg");
    var aylar=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
    switch(mevsimSecim){
        case "12":
        case "1":
        case "2":
            secilenMevsim.innerText="Kış Mevsimi "+aylar[Number(mevsimSecim)-1];
            secilenMevsimImg.src="assets/images/kis.png"
            break;
        case "3":
        case "4":
        case "5":
            secilenMevsim.innerText="İlk Bahar Mevsimi "+aylar[Number(mevsimSecim)-1];
            secilenMevsimImg.src="assets/images/ilkbahar.png"
            break;
        case "6":
        case "7":
        case "8":
            secilenMevsim.innerText="Yaz Mevsimi "+aylar[Number(mevsimSecim)-1];
            secilenMevsimImg.src="assets/images/yaz.png"
            break;
        case "9":
        case "10":
        case "11":
            secilenMevsim.innerText="Son Bahar Mevsimi "+aylar[Number(mevsimSecim)-1];
            secilenMevsimImg.src="assets/images/sonbahar.png"
            break;
    }
}
function zamanFarkiFunction(){

}
function randomTelefonFunction(){

}