let audio;

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", showQuestion);
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

// Heart CSS dynamically
const style = document.createElement('style');
style.innerHTML = `
.heart {
  position: fixed;
  bottom: -20px;
  font-size: 24px;
  color: #ff4d6d;
  animation: floatUp linear infinite;
  opacity: 0.7;
  pointer-events: none;
}
@keyframes floatUp {
  from { transform: translateY(0); opacity: 0.7; }
  to { transform: translateY(-110vh); opacity: 0; }
}
`;
document.head.appendChild(style);

// ---------- TYPEWRITER ----------
function typeWriterEffect() {
  const note = document.querySelector(".note p");
  const text = note.innerText;
  note.innerHTML = ""; // use innerHTML
  let i = 0;

  function type() {
    if (i < text.length) {
      const char = text.charAt(i);
      if (char === "\n") {
        note.innerHTML += "<br>";
      } else if (char === " ") {
        note.innerHTML += "&nbsp;";
      } else {
        note.innerHTML += char;
      }
      i++;
      setTimeout(type, 35);
    }
  }

  type();
}

// ---------- SHOW PROPOSAL ----------
function showQuestion() {
  // Start music on click
  if (!audio) {
    audio = new Audio("song1.mp3");
    audio.loop = true;
    audio.play();
  }

  createHearts(40);
  typeWriterEffect();

  // Show proposal section
  const proposal = document.getElementById("proposal");
  proposal.classList.remove("hidden");
  proposal.style.position = "relative";
  proposal.style.zIndex = 10;

  setupButtons();
}

// ---------- YES / NO BUTTON LOGIC ----------
function setupButtons() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const finalMsg = document.getElementById("finalMsg");

  // NO button moves away when hovered
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // YES button click
  yesBtn.addEventListener("click", () => {
    createHearts(80); // heart explosion
    finalMsg.classList.remove("hidden");
  });
}
