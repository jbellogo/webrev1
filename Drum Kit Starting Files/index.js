
// ADDING AN EVENT LISTENER TO ALL BUTTONS
////////////////////////////////////////////////////////////////////////////////
// METHOD #1
////////////////////////////////////////////////////////////////////////////////
// var btnArr = document.querySelectorAll('button');
// var len =  btnArr.length;
//
// for (var i = 0; i<len; i++){
//   btnArr[i].addEventListener("click", function() {
//
//     // hijacking/getting the CSS to tell us the background image
//     var BackImUrl =  getComputedStyle(this)['background-image'];
//     console.log(BackImUrl);
//     // splitting the url(location local in computer) inot array
//     BackImUrl = BackImUrl.split('/');
//     // getting the last string element of the array corresponding to
//     // the image name and some extra charachters
//     BackImUrl = BackImUrl[(BackImUrl.length - 1)];
//     // getting rid of the extra charachters .png")
//     BackImUrl = BackImUrl.slice(0, BackImUrl.length-6);
//
//     // getting the Audio
//     var audioPath = 'sounds/' + BackImUrl +'.mp3';
//     console.log(audioPath); // To verify
//
//     // fetching the sound of each button corresponding to their background image
//     var audio = new Audio(audioPath);
//     audio.play();
//
//     console.log(BackImUrl); // To verify
//   });
// }

////////////////////////////////////////////////////////////////////////////////
// METHOD #2
////////////////////////////////////////////////////////////////////////////////

var btnArr = document.querySelectorAll('button');
var len =  btnArr.length;

for (var i = 0; i<len; i++) {
  btnArr[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function makeSound(key) {

  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "l":
    var kick = new Audio('sounds/kick.mp3');
    kick.play();
    break;

    default: console.log(key);
  }
}



// // Adding keyboard listeners
// what do we addEventListener to??? before we had the button elements in an array and would add the eventListener
// to the buttons as the event meant pressing an element. but now the event is pressing a key which notwhere found in the html
// so we use "document.addEventListener"

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});

function buttonAnimation(currentKey){
  var activeButton = document.querySelector('.'+ currentKey);
  // add styling of class pressed
  activeButton.classList.add("pressed"); // don't need the .press the
  // classList.add alread knows ull input a class
  // remove this class after some time
  // can ged doc for setTimeout
  setTimeout(function () {
    activeButton.classList.remove("pressed");

  }, 100);
}
