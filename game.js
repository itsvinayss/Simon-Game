
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
var start=false;
var level=0;

function restart(){
    level=0;
    gamePattern=[];
    start=false;
    
}
$(".btn").click(function() {


    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour); 

        
       checkAnswer(userClickedPattern.length-1);
    
});

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("level " + level);
   
    
var randomNumber = Math.floor(Math.random()*4);

randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" +randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
}

function playSound(name){
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}

function animatePress(currentColor){

$("#" + currentColor).addClass("pressed");

setTimeout(function() {
   $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keypress(function(){
    if(!start){
        nextSequence();
        start=true;

    };

});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function() {
                nextSequence(); 
        
               }, 1000);
               
        }
    }
    else{

    console.log("wrong");
         playSound("wrong");
         $("body").addClass("game-over")

            setTimeout(function() {
                $("body").removeClass("game-over");
               }, 200);

               $("#level-title").text("Game-Over, Press Any key to Restart");
               
               restart();
             }
        }

    

    










