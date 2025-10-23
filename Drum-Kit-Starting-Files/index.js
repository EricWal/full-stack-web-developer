var buttonNums = document.querySelectorAll(".drum").length;
var sound, innerText, querySelectorAll;

for (var i = 0; i < buttonNums; i++) {
  querySelectorAll = document.querySelectorAll(".drum")[i];

  querySelectorAll.addEventListener("click", function () {
    innerText = this.innerText;
    makeSound(innerText);
    buttonAnimation(innerText);
  });
}

document.addEventListener("keydown", (keydownEvent) => {
  makeSound(keydownEvent.key);
  buttonAnimation(keydownEvent.key);
});

function makeSound(innerText) {
  switch (innerText) {
    case "w":
      sound = new Audio("./sounds/tom-1.mp3");
      sound.play();
      break;

    case "a":
      sound = new Audio("./sounds/tom-2.mp3");
      sound.play();
      break;

    case "s":
      sound = new Audio("./sounds/tom-3.mp3");
      sound.play();
      break;

    case "d":
      sound = new Audio("./sounds/tom-4.mp3");
      sound.play();
      break;

    case "j":
      sound = new Audio("./sounds/kick-bass.mp3");
      sound.play();
      break;

    case "k":
      sound = new Audio("./sounds/crash.mp3");
      sound.play();
      break;

    case "l":
      sound = new Audio("./sounds/snare.mp3");
      sound.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(innerText) {
  // Add Pressed class document.querySelectorAll(".drum")[0].classList.add('pressed')
  var currentClassName = document.querySelector("." + innerText);
  currentClassName.classList.add("pressed");

  setTimeout(() => {
    currentClassName.classList.remove("pressed");
  }, 100);
}
