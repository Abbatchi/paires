var cards = ["img/chat.jpg", "img/chat.jpg", "img/lionne.jpg", "img/lionne.jpg", "img/chien.jpg", "img/chien.jpg", "img/lapins.jpg", "img/lapins.jpg", "img/lama.jpg", "img/lama.jpg", "img/ane.jpg", "img/ane.jpg", "img/ours.jpg", "img/ours.jpg"];

function startGame(){
cards.sort(function() { return 0.5 - Math.random() });
for (var i = 0; i < cards.length; i++) {
	document.getElementById('card').innerHTML += "<img src=\""+cards[i]+"\">";

}
}