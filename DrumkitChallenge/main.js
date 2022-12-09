var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.buttonInnerHtml;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("/sounds/sounds/boom.wav");
      tom1.play();
      break;

    case "a":
      var tom1 = new Audio("/sounds/sounds/clap.wav");
      tom1.play();
      break;

    case "s":
      var tom1 = new Audio("/sounds/sounds/hihat.wav");
      tom1.play();
      break;

    case "d":
      var tom1 = new Audio("/sounds/sounds/kick.wav");
      tom1.play();
      break;

    case "j":
      var tom1 = new Audio("/sounds/sounds/snare.wav");
      tom1.play();
      break;

    case "k":
      var tom1 = new Audio("/sounds/sounds/tom.wav");
      tom1.play();
      break;

    case "l":
      var tom1 = new Audio("/sounds/sounds/tink.wav");
      tom1.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
