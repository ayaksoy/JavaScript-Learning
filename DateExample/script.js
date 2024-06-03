var date = new Date();
document.getElementById("tarih").innerText = date;
document.getElementById("yil").innerText = date.getFullYear();
document.getElementById("ay").innerText = date.getMonth()
document.getElementById("gun").innerText = date.getDay()
const aylar=["Ocak", "subat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım","Aralık"]
document.getElementById("ayIsim").innerText = aylar[date.getMonth()]

function baslat(){
	let sayi = 0;

	let sure = setInterval(()=>{
		sayi++;
		document.getElementById("sure").innerText = sayi;
		if (sayi == 10)
			clearTimeout(sure)
	},100
	)
}