// Check and wait if necessary till JQuery is ready
// Useful if you feel like putting the Jquery script in the head tag
$(document).ready(function(){
  jQuery("h1").css("color", "red");
  $("h2").css("color", "blue");
});

////////////////////////////////////////////////////////////////////////////////////////////
// Selectors
document.querySelector("h1");
$("h1"); // very similar to querySelector bc it is the most versatile

// Selecting many is the same in jQuery
document.querySelectorAll("button");
$("button")

////////////////////////////////////////////////////////////////////////////////////////////
// Manipulaiting style with jquery
// Not so good style...adding classes is fine but this is dirty and bad practice. u can do it tho
$("h2").css("color", "blue"); // to asssing the value y to the x property in .css(x,y)
$("h2").css("color"); // tells you the color
$("h2").css("font-size"); // tells you the color

// Add classes that change style in the CSSS (Separation of Concerns)
// Can add multiple at a time (adding two here)
$("h2").addClass("big-title center-thing");
// Remove classes
setTimeout(function () {
  $("h2").removeClass("big-title"); // youre not removing the centering class
}, 1000);




// Check if your element has a particular class
console.log($("h2").hasClass("center-thing")); // :: BOOL

////////////////////////////////////////////////////////////////////////////////////////////
// Manipulating text (two ways)
// Way 1... like innerHTML without JQ: you can inject HTML!!!
$("h1").text("Au revoir"); // there is only one h1
$("button").text("<strong>Dont click me!</strong>") // there are many <buttons> and ALL of THEM will get updated


////////////////////////////////////////////////////////////////////////////////////////////
// Manipulating attributes using .attr method
$("img").attr("src"); //getting the value
$("a").attr("href", "https://www.bing.com"); //setting the value
$("img").attr("class"); //classes are also attributes


////////////////////////////////////////////////////////////////////////////////////////////
// Adding event listeners
$("h1").click(function() {
  $("h1").css("color", "purple");   // callback/response function
})
// with vanilla JS if we wanted to add an event listener to all elements in the selector,
//   we needed a for loop! NOT with JQ
// for (var i = 0; i<5;i++){
//   document.querySelectorAll('button')[i].addEventListener("click", function () {
//     document.querySelector('h1').style.color = "turquoise";
//   });
// }

// using JQ
$("button").click(function () {
  $('h1').css("color", "turquoise");
});
// another type of event
$("input").keypress(function (event) {
  console.log(event.key);
});

$("input").on("mouseover", function (event) {
  $('h1').css("color", "purple");
});
// for detecting when anywhere on the document is clicked and replacing the h1 with it
// this is a fun little game like tom riddles diary
var i = 0;
$(document).keypress(function (event) {
  i+=100;
  i%= 1200;
  console.log(event.key);
  $("h1").text(event.key);
  $("h1").addClass("big-title relative-position");
  $("h1").css("left", i+'px');
});

////////////////////////////////////////////////////////////////////////////////////////////
// Adding and removing elements
// html element to add before our <h1>
$("h1").before("<button>New</button>");  // create html elemtns
// html element to add after our <h1>
$("h1").after("<button>New</button>");  // create html elemtns
// html element to add after our <h1>
$("h1").prepend("<button>New</button>");  // create html elemtns

////////////////////////////////////////////////////////////////////////////////////////////
// Adding animations, say with PREBUILT ONES .hide(), .show(), toggle(), fadeout(), fadein(), fadetoggle()
// slideUp(), slideDown(), slideToggle();
$("h1").on("click", function(){
  $("h1").toggle();
});
// Make your own animations: .animate({CSS rules!})
// only css rules that have a NUMERIC variable
$("h3").on("click", function(){
  $("h3").animate({opacity:0.5});
});
// can chain em
$("h3").on("click", function(){
  $("h3").slideUp().animate({opacity:0.5});
});
