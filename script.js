const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const categories = [
  "Something sticky", "A dirty insult", "Weird things to do in bed", "A strange noise during sex",
  "A bad nickname for your boss", "Worst Tinder bio line", "Excuses for not wearing underwear",
  "Something you'd scream in horror or pleasure", "Gross things under your bed", "A bad gift for a date",
  "Something inappropriate to yell in public", "A reason to get kicked out of a club",
  "What not to say during a job interview", "Things you wouldn't tell your grandma",
  "Awkward things to say to a crush", "Embarrassing body parts", "Silly safe words",
  "Dirty slang terms", "Things that smell bad", "Weird uses for whipped cream",
  "Sex toy names", "Naughty pet names", "Strangest body fluid", "Things you moan",
  "Weird places to get a tattoo", "Terrible places to have sex", "Something you regret texting",
  "What not to say after kissing", "Something wet", "Grossest habit", "Weird place to pee",
  "Stupid dares", "Something you'd find in a bachelor pad", "Something you'd lie about on a date",
  "Worst place to get caught naked", "Funny noises", "Gross but edible things",
  "Inappropriate Halloween costumes", "Rejected superhero names", "Weird compliments",
  "Obscene gestures", "Forbidden fantasies", "Inappropriate song lyrics", "Bad ex excuses",
  "Sex-related injuries", "Awkward after-sex moments", "Cringy pet names", "Pickup lines that fail",
  "Clothing malfunctions", "Awkward ways to break up", "Weird food fetishes",
  "Adult film titles", "Things found in a strip club", "What not to say to a cop",
  "Embarrassing tattoos", "Weirdest porn category", "Dirty-sounding foods", "Odd foot-related things",
  "Unusual things to lick", "Messed up sleep talk", "Weird flirting tactics", "Kinks gone wrong",
  "Places you’d bring lube", "Things you wouldn't admit out loud", "Dirty double entendres",
  "Things your dog saw", "Naughty dreams", "Funny walk of shame moments",
  "Things you wouldn’t want parents to hear", "Smut book titles", "Dirty emojis",
  "Awkward phone autocorrects", "WTF text messages", "Excuses for being loud at night",
  "Unusual moans", "Strange strip club names", "Stuff hidden in sock drawers",
  "Things overheard at the gym", "Dirty things in a grocery list", "Sexy costumes gone wrong",
  "Things not to whisper", "What you shouldn’t Google", "Things that cause blushing",
  "Things that make your phone sticky", "Odd morning-after surprises",
  "Misused household items", "NSFW pickup lines", "Bad party games", "Things with a weird texture",
  "Shameful Google history", "Stuff you'd never tweet", "Creepy bedroom decor", 
  "Wrong uses for cucumbers", "Inappropriate icebreaker questions", "Awkward silences",
  "Things your neighbor overheard", "Disastrous sexts", "What not to say during cuddling",
  "Funny things to yell during sex", "Strangest DM slide", "Dirty truth or dare questions", 
  "Things said while drunk", "Something to hide from roommates"
];

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
