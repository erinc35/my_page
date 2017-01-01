$(document).ready(function(){
navbarHover();


});

function navbarHover()  {
  $(".navbar-nav").children().on("click", function(event){
   event.preventDefault();
   mouseLeaveBlackEducation();
   mouseLeaveBlackIntro();
   mouseLeaveBlackProjects();
   mouseLeaveBlackContact();

 })

}


function mouseLeaveBlackEducation(){
 $(".navbar-nav").children().on("mouseleave", function(){
   $("#education-nav").css("background-color", "black");
 })
}
function mouseLeaveBlackIntro(){
 $(".navbar-nav").children().on("mouseleave", function(){
   $("#education-nav").css("background-color", "black");
 })
}
function mouseLeaveBlackProjects(){
 $(".navbar-nav").children().on("mouseleave", function(){
   $("#projects-nav").css("background-color", "black");
 })
}
function mouseLeaveBlackContact(){
 $(".navbar-nav").children().on("mouseleave", function(){
   $("#contact-nav").css("background-color", "black");
 })
}


// function mouseEnterWhite(){
//  $(".nav").children().on("mouseenter", function(){


//    $(".nav").children().css("background-color", "white")
//    // alert("fffff")
//    $(".nav").children().css("color", "#333333 ")

//  })
// }
