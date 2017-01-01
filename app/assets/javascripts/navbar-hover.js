$(document).ready(function(){
navbarHover();


});

function navbarHover()  {
  $(".navbar-nav").children().on("click", function(event){
   event.preventDefault();
   mouseLeaveBlack();
   // mouseEnterWhite();
 })

}


function mouseLeaveBlack(){
 $(".navbar-nav").children().on("mouseleave", function(){
   $("#education-nav").css("background-color", "black");
 })
}




// function mouseEnterWhite(){
//  $(".nav").children().on("mouseenter", function(){


//    $(".nav").children().css("background-color", "white")
//    // alert("fffff")
//    $(".nav").children().css("color", "#333333 ")

//  })
// }
