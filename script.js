const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const categories = [
  "Things you yell during sex", "Bad places to get a boner", "Weird things found in your butt",
  "Sexy Halloween costumes gone wrong", "Dirty things you can whisper at church",
  "Porn categories no one should click", "Grossest pet names", "Things done naked",
  "Excuses to leave a party", "First date no-no’s"
];

const timerSpan = document.getElementById('timer');
let currentTimer = null;

function toggleMode() {
  document.body.classList.toggle("dark");
}

function getRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomCategories(count) {
  return [...categories].sort(() => 0.5 - Math.random()).slice(0, count);
}

function rerollLetter() {
  document.getElementById('letter').innerText = getRandomLetter();
}

function rerollCategories() {
  const count = parseInt(document.getElementById('categoryCount').value, 10);
  const selected = getRandomCategories(count);
  const list = document.getElementById('categoryList');
  list.innerHTML = '';
  selected.forEach(cat => {
    const li = document.createElement('li');
    li.textContent = cat;
    list.appendChild(li);
  });
}

function newGame() {
  if (currentTimer) {
    alert("A game is already running. Stop it first.");
    return;
  }
  rerollLetter();
  rerollCategories();
  let timeLeft = parseInt(document.getElementById('timeLimit').value, 10);
  timerSpan.textContent = timeLeft;
  currentTimer = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(currentTimer);
      currentTimer = null;
      alert("Time's up!");
    }
  }, 1000);
}

function stopGame() {
  if (currentTimer) {
    clearInterval(currentTimer);
    currentTimer = null;
    timerSpan.textContent = "0";
  }
}

