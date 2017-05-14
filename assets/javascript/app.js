
//create a start button that brings the questions onto the screen
//create a div for timer to go into
//timer starts (create a count down clock)
//create a div to enter the question
//create the question

//unhidi=ding the 
function unhide(questions) {
var item = document.getElementById("questions");
if (item) {
item.className=(item.className=='hidden')?'unhidden':'hidden';
}}


//Timer



$("#start").on("click", function() {

  console.log("got it");
  $("#replaceBtn").html($("#questions"));
  unhide(questions);


  $("#timer").html("00:00");




})





