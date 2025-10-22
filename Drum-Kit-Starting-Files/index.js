var buttonNums = document.querySelectorAll("button").length;
var sound, innerText, querySelectorAll;

for (var i = 0; i < buttonNums; i++) {
  querySelectorAll = document.querySelectorAll("button")[i];

  querySelectorAll.addEventListener("click", function () {
    innerText = this.innerText;
    switch (innerText) {
      case "w":
        sound = new Audio("./sounds/tom-1.mp3");
        break;

      case "a":
        sound = new Audio("./sounds/tom-2.mp3");
        break;

      case "s":
        sound = new Audio("./sounds/tom-3.mp3");
        break;

      case "d":
        sound = new Audio("./sounds/tom-4.mp3");
        break;

      case "j":
        sound = new Audio("./sounds/kick-bass.mp3");
        break;

      case "k":
        sound = new Audio("./sounds/crash.mp3");
        break;

      case "l":
        sound = new Audio("./sounds/snare.mp3");
        break;

      default:
        break;
    }

    sound.play();
  });
}

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyW":
      sound = new Audio("./sounds/tom-1.mp3");
      sound.play()
      break;

    case "KeyA":
      sound = new Audio("./sounds/tom-2.mp3");
      sound.play()
      break;

    case "KeyS":
      sound = new Audio("./sounds/tom-3.mp3");
      sound.play()
      break;

    case "KeyD":
      sound = new Audio("./sounds/tom-4.mp3");
      sound.play()
      break;

    case "KeyJ":
      sound = new Audio("./sounds/kick-bass.mp3");
      sound.play()
      break;

    case "KeyK":
      sound = new Audio("./sounds/crash.mp3");
      sound.play()
      break;

    case "KeyL":
      sound = new Audio("./sounds/snare.mp3");
      sound.play()
      break;

    default:
      break;
  }
});
