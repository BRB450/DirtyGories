const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const categories = [
  "An awkward thing to text your ex",
  "Something sticky",
  "A bad name for a dating app",
  "A pickup line that would get you slapped",
  "A terrible safe word",
  "An excuse for not wearing underwear",
  "Something you scream in bed",
  "A weird place to find glitter",
  "Something gross in your fridge",
  "A terrible tattoo idea"
];

const letterSpan = document.getElementById("letter");
const categoryList = document.getElementById("categoryList");
const timerSpan = document.getElementById("timer");
const newGameBtn = document.getElementById("newGame");

newGameBtn.addEventListener("click", startGame);

function startGame() {
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  letterSpan.textContent = randomLetter;

  const selectedCategories = [...categories].sort(() => 0.5 - Math.random()).slice(0, 10);
  categoryList.innerHTML = "";

  selectedCategories.forEach(cat => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${cat}</strong><br><input type="text" placeholder="Your answer here">`;
    categoryList.appendChild(li);
  });

  let timeLeft = 60;
  timerSpan.textContent = timeLeft;
  const timer = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft === 0) clearInterval(timer);
  }, 1000);
}
