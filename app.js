let tg = window.Telegram.WebApp;

tg.expand();

let btn1 = document.getElementById("btn1");
let order = document.getElementById("order");

btn1.addEventListener("click", function(){
	document.getElemetById("main").style.display = "none";
	document.getElemetById("form").style.display = "block";
});

order.addEventListener("click", () => {
	let name = document.getElementById("username").value;
	let email = document.getElementById("user_email").value;
	let phone = document.getElementById("user_phone").value;

	let data = {
		name: name,
		email: email,
		phone: phone
	}
	tg.sendData(JSON.stringify(data));
	tg.close;
});
