let tg = window.Telegram.WebApp;

tg.expand();

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let order = document.getElementById("order");

btn1.addEventListener("click", function(){
	document.getElementById("main").style.display = "none";
	document.getElementById("form").style.display = "block";
});

btn2.addEventListener("click", function(){
	document.getElementById("main").style.display = "none";
	document.getElementById("form").style.display = "block";
});

order.addEventListener("click", () => {
	let name = document.getElementById("username").value;
	let email = document.getElementById("user_email").value;
	let phone = document.getElementById("user_phone").value;
	if(name.length < 4) {
		document.getElementById("error").innerText = ".. Ошибка в имени ..";
		return;
	}
	if(email.length < 4) {
		document.getElementById("error").innerText = ".. Ошибка в email ..";
		return;
	}
	if(phone.length < 10) {	
		document.getElementById("error").innerText = ".. Ошибка в номере телефона ..";
		return;
	}

	let data = {
		name: name,
		email: email,
		phone: phone
	}
	tg.sendData(JSON.stringify(data));
	tg.close;
});
