function nextSequence() {
  return Math.floor(Math.random() * 4);
}
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()]
var gamePattern = []
gamePattern.push(randomChosenColour)
