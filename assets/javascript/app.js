//create a start button that brings the questions onto the screen
//create a div for timer to go into
//timer starts (create a count down clock)
//create a div to enter the question
//create the question


//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

var correct = document.querySelector("#correct");
console.log(correct);
correct.innerHTML = 0;

var incorrect = document.querySelector("#incorrect");
console.log(incorrect);
incorrect.innerHTML = 0;

var unanswered = document.querySelector("#unanswered");
console.log(unanswered);
unanswered.innerHTML = 0;

var time = 60;

//unhidi=ding the 
function unhide() {
    var item = document.getElementById("questions");
    if (item) {
        item.className = (item.className == 'hidden') ? 'unhidden' : 'hidden';
    }
}

function secondUnhide() {
    var item = document.getElementById("results");
    if (item) {
        item.className = (item.className == 'hidden') ? 'unhidden' : 'hidden';
    }
}


function start() {
    intervalId = setInterval(count, 1000);
    console.log(intervalId);
}

function count() {

    time--;
    console.log(time);
    //var converted = timeConverter(time);
    $("#timer").html(" You have " + time + " seconds left");
    if (time <= 0) {
        clearInterval(intervalId);
        alert("Time's Up");
        answerCount();
        secondUnhide() 
    }

}

function answerCount() {
  console.log("Answer count is running");

    for (var i = 1; i < 7; i++) {
      console.log("Going through inputs");
      var string = 'input[name=group' + [i] + ']:checked'
        console.log($(string).val());
        var value = $(string).val();
        console.log(value);
        if (value == "wrong") {
            incorrect.innerHTML++;
        } else if (value == "correct") {
            correct.innerHTML++;
        } else{
          unanswered.innerHTML++;
        }
    }
}

$("#start").on("click", function() {
    // intervalId = setInterval(count, 1000);
    console.log("got it");
    $("#replaceBtn").html($("#questions"));
    unhide(questions);


    $("#timer").html("60");
    start();
    count();
    console.log(time);
    //timeConverter();


})

$(".submit").on("click", function(event){
  event.preventDefault();
  clearInterval(intervalId);
  answerCount();
  console.log (correct.innerHTML);
  console.log(incorrect.innerHTML);
  $("#questions").html($("#results"));
  secondUnhide() 

})
