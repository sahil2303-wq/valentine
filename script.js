let audio;

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", showQuestion);
});

// ---------- HEARTS ----------
function createHearts(count = 30) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 5 + "s";
    document.body.appendChild(heart);
  }
}

// ---------- TYPEWRITER ----------
function typeWriterEffect() {
  const note = document.querySelector(".note p");
  const text = note.innerText; 
  note.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      const char = text.charAt(i);
      if (char === "\n") note.innerHTML += "<br>";
      else note.innerHTML += char;
      i++;
      setTimeout(type, 35);
    }
  }
  type();
}

// ---------- SHOW PROPOSAL ----------
function showQuestion() {
  // Play music
  if (!audio) {
    audio = new Audio("song1.mp3");
    audio.loop = true;
    audio.play();
  }

  createHearts(40);
  typeWriterEffect();

  const proposal = document.getElementById("proposal");
  proposal.classList.remove("hidden");
  proposal.style.position = "relative";
  proposal.style.zIndex = 10;

  setupButtons();
}

// ---------- BUTTON LOGIC ----------
function setupButtons() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const finalMsg = document.getElementById("finalMsg");

  // NO button moves away
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // YES button click
  yesBtn.addEventListener("click", () => {
    createHearts(80);
    createConfetti(100);
    finalMsg.classList.remove("hidden");
  });
}

// ---------- CONFETTI ----------
// ---------- CONFETTI ----------
function createConfetti(count = 100) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = randomColor();
    confetti.style.width = 8 + Math.random() * 7 + "px";
    confetti.style.height = 8 + Math.random() * 7 + "px";
    confetti.style.opacity = 0.9;
    confetti.style.zIndex = 9999;
    document.body.appendChild(confetti);

    // Animate falling using CSS transform
    confetti.animate([
      { transform: `translateY(0px) rotate(0deg)` },
      { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)` }
    ], {
      duration: 2000 + Math.random() * 2000, // 2-4 seconds
      iterations: 1,
      easing: 'linear'
    });

    // Remove after animation ends
    setTimeout(() => confetti.remove(), 4000);
  }
}

function randomColor() {
  const colors = ['#ff4d6d','#ff758c','#ffd700','#ff69b4','#ffb6c1','#ff4500'];
  return colors[Math.floor(Math.random() * colors.length)];
}

