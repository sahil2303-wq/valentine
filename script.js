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

// Heart styles
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


// ---------- MAIN PROPOSAL FLOW ----------
function showQuestion() {
  createHearts(40);
  typeWriterEffect();

  // Dark overlay
  const overlay = document.createElement("div");
  overlay.style
