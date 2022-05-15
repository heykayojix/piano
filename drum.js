function playSound(e) {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //to select the audio element
  // console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //to select the key element to allow the key animations.
  // console.log(key);
  if (!audio) return; //stops the function from running
  audio.currentTime = 0; //this is going to rewind the audio to the start, to allow for a  quick succession.
  audio.play();
  key.classList.add("streaming"); //to the string to the class, and the CSS styles, whenever any key is pressed.
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
  // console.log(e);
  if (e.propertyName !== "transform") return; //skip it, if it's not a transform.
  // console.log(e.propertyName);
  // console.log(this);
  this.classList.remove("streaming"); //to allow the key transition bact to it pre-press mode
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
