const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    console.log("Timer ticked down!");
  },
  onComplete() {
    console.log("Timer completed!");
  },
});
