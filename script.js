// Attempt to play audio after user interaction (required by some browsers)
window.addEventListener('click', function enableAudio() {
  const audio = document.getElementById("bg-audio");
  audio.play().catch(() => {});
  window.removeEventListener('click', enableAudio);
});

// Countdown timer for 2:00 PM, 10th July 2025
const targetDate = new Date("2025-07-10T14:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>Time's up!</h2>";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Create colorful rotating background words in random positions
const words = [
  "SSC",
  "বাঁশ",
  "Result",
  "বাবু তোমার রেজাল্ট কি?",
  "GPA-5.00",
  "Golden",
  "মিষ্টি খাওয়াবে না?",
  "এত পড়াশোনা করে কি হলো",
  "A+"
  "College paba na toh"
];

const colors = ["#ff4444", "#00ccff", "#ffff00", "#66ff66", "#ff99cc", "#ffa500", "#cc99ff"];
const container = document.getElementById("backgroundWords");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 100; i++) {
  const word = document.createElement("div");
  word.className = "word";
  word.textContent = words[getRandomInt(0, words.length - 1)];

  // Random position
  word.style.left = `${Math.random() * 100}vw`;
  word.style.top = `${Math.random() * 100}vh`;

  // Random rotation and color
  word.style.transform = `rotate(${getRandomInt(-180, 180)}deg)`;
  word.style.color = colors[getRandomInt(0, colors.length - 1)];
  word.style.opacity = (Math.random() * 0.6 + 0.2).toFixed(2);

  container.appendChild(word);
}

// Try autoplay for the audio
window.addEventListener('click', function enableAudio() {
  const audio = document.getElementById("bg-audio");
  audio.play().catch(() => {});
  window.removeEventListener('click', enableAudio);
});
