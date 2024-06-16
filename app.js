let tg = window.Telegram.WebApp;

tg.expand();

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let order = document.getElementById("order");

btn1.addEventListener("click", function(){
	document.getElemetById("container").style.display = "none";
	document.getElemetById("form").style.display = "block";
});


btn2.addEventListener("click", function(){
	document.getElemetById("inner").style.display = "none";
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
