// let input = document.getElementById("inputBox");
// let buttons = document.querySelectorAll("button");

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       input.value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = "";
//       input.value = string;
//     } else if (e.target.innerHTML == "DEL") {
//       string = string.substring(0, string.length - 1);
//       input.value = string;
//     } else {
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   });
// });

let alarmTime = null;
let alarmTimeout = null;

function updateCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  const formattedTime = `${displayHours}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  document.getElementById("current-time").textContent = formattedTime;

  if (alarmTime === formattedTime) {
    document.getElementById("alarm-audio").play();
  }
}

function setAlarm() {
  const hour = document.getElementById("hour").value;
  const minute = document.getElementById("minute").value.padStart(2, "0");
  const ampm = document.getElementById("ampm").value;

  if (hour && minute && ampm) {
    alarmTime = `${hour}:${minute}:00 ${ampm}`;
    alert(`Alarm set for ${alarmTime}`);
  } else {
    alert("Please select a valid time for the alarm.");
  }
}

setInterval(updateCurrentTime, 1000);
