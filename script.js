// Create background hearts
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 5 + "s";
    document.body.appendChild(heart);
  }
}

// Add heart styles dynamically
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
  from {
    transform: translateY(0);
    opacity: 0.7;
  }
  to {
    transform: translateY(-110vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);


// Typewriter effect for love note
function typeWriterEffect() {
  const note = document.querySelector(".note p");
  const text = note.innerText;
  note.innerText = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      note.innerText += text.charAt(i);
      i++;
      setTimeout(type, 35);
    }
  }
  type();
}


// Show final question with cinematic effect
function showQuestion() {
  createHearts();
  typeWriterEffect();

  // Dark overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.4)";
  overlay.style.zIndex = 5;
  document.body.appendChild(overlay);

  // Reveal question slowly
  setTimeout(() => {
    const q = document.getElementById("question");
    q.classList.remove("hidden");
    q.style.opacity = "1";
    q.style.position = "relative";
    q.style.zIndex = "10";
  }, 1500);

  // Optional music
  const audio = new Audio("music.mp3"); // put your song file in project folder
  audio.play();
}
