
var food = {
    "burger": {
      value: 0
    },
    "taco": {
      value: 0
    },
    "steak": {
      value: 0
    },
    "ribs": {
      value: 0
    }
  };
  
  var currentScore = 0;
  var targetScore = 0;
  var winCount = 0;
  var lossCount = 0;
  
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function start () {
    currentScore = 0;
    
    $("#targetTitle").empty();
    $("#current-score").empty();
    food["burger"].value = getRandom(1, 12);
    food.taco.value = getRandom(1, 12);
    food.steak.value = getRandom(1, 12);
    food.ribs.value = getRandom(1, 12);
    targetScore = getRandom(19, 120);
    $("#targetTitle").html(targetScore);
    $("#current-score").html(currentScore);
};

function addValues(food) {
    currentScore = currentScore + food.value;
    $("#current-score").html(currentScore);
    checkWin();
}

function checkWin () {
    if(currentScore === targetScore) {
        winCount++;
        $("#wins").html(winCount);
        start ();
    } else if (currentScore > targetScore) {
        lossCount++;
        $("#losses").html(lossCount);
        start();
    }
}
$("#burger").on("click", function() {
    addValues(food.burger);
});
$("#taco").on("click", function() {
    addValues(food.taco);
});
$("#steak").on("click", function() {
    addValues(food.steak);
});
$("#ribs").on("click", function() {
    addValues(food.ribs);
});

start()