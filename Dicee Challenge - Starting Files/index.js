

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var srcString = 'images/dice' + randomNumber1 + '.png';
document.querySelector('img.img1').setAttribute('src', srcString);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var srcString2 = 'images/dice' + randomNumber2 + '.png';
document.querySelector('img.img2').setAttribute('src', srcString2);

var result = '';
if (randomNumber1 > randomNumber2) {
  result = '🚩 Player 1 Wins!';
} else if (randomNumber1 < randomNumber2){
  result = 'Player 2 Wins! 🚩';
} else {
  result = '🚩 Draw! 🚩';
}


document.querySelector('div.container h1').textContent = result;
