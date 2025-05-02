const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const categories = Array.from({ length: 500 }, (_, i) => `Funny Dirty Category ${i + 1}`);

const letterSpan = document.getElementById("letter");
const categoryList = document.getElementById("categoryList");
const timerSpan = document.getElementById("timer");
const newGameBtn = document.getElementById("newGame");
const stopGameBtn = document.getElementById("stopGame");
const rerollLetterBtn = document.getElementById("rerollLetter");

let currentTimer = null;

function getRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomCategories(count) {
  return [...categories].sort(() => 0.5 - Math.random()).slice(0, count);
}

function updateLetter() {
  const randomLetter = getRandomLetter();
  letterSpan.textContent = randomLetter;
}

function startGame() {
  if (currentTimer !== null) {
    alert("You must stop the current round before starting a new one.");
    return;
  }

  const categoryCount = parseInt(document.getElementById("categoryCount").value, 10);
  const timeLimit = parseInt(document.getElementById("timeLimit").value, 10);

  updateLetter();

  const selectedCategories = getRandomCategories(categoryCount);
  categoryList.innerHTML = "";
  selectedCategories.forEach(cat => {
    const li = document.createElement("li");
    li.textContent = cat;
    categoryList.appendChild(li);
  });

  let timeLeft = timeLimit;
  timerSpan.textContent = timeLeft;
  currentTimer = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(currentTimer);
      currentTimer = null;
    }
  }, 1000);
}

function stopGame() {
  if (currentTimer !== null) {
    clearInterval(currentTimer);
    currentTimer = null;
    timerSpan.textContent = "0";
  }
}

newGameBtn.addEventListener("click", startGame);
stopGameBtn.addEventListener("click", stopGame);
rerollLetterBtn.addEventListener("click", updateLetter);
