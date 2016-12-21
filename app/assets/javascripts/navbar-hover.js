$(document).ready(function(){
navbarHover();


});

function navbarHover()  {
  $(".nav").children().on("click", function(event){
   event.preventDefault();
   mouseLeaveBlack();
   // mouseEnterWhite();
 })

}


function mouseLeaveBlack(){
 $(this).on("mouseleave", function(){
   $(this).css("color", "red");
 })
}




// function mouseEnterWhite(){
//  $(".nav").children().on("mouseenter", function(){


//    $(".nav").children().css("background-color", "white")
//    // alert("fffff")
//    $(".nav").children().css("color", "#333333 ")

//  })
// }
