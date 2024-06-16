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
	document.getElemetById("container").style.display = "none";
	document.getElemetById("form").style.display = "block";
});

order.addEventListener("click", () => {
	tg.close;
});
