const volumeIcon = document.querySelector('.volume-icon');
const volumeRange = document.getElementById('volumeRange');
const backgroundMusic = document.getElementById('backgroundMusic');

volumeRange.addEventListener('input', function () {
  backgroundMusic.volume = this.value;
});

// Toggle About text
const aboutBtn = document.querySelector('.about-button');
const aboutText = document.getElementById('aboutText');

aboutBtn.addEventListener('click', () => {
  aboutText.classList.toggle('open');
});

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 2 + 1; // taille entre 1 et 3vw
  bubble.style.width = `${size}vw`;
  bubble.style.height = `${size}vw`;
  bubble.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(bubble);

  setTimeout(() => bubble.remove(), 5000);
}

// Plein de bulles au démarrage
for (let i = 0; i < 30; i++) {
  setTimeout(createBubble, i * 100);
}

// Quelques bulles aléatoires après
setInterval(() => {
  if (Math.random() < 0.3) { // 30% de chances toutes les 2s
    createBubble();
  }
}, 2000);

document.addEventListener('DOMContentLoaded', function() {
  const nombreEtoiles = 100;
  const body = document.body;

  for (let i = 0; i < nombreEtoiles; i++) {
    let etoile = document.createElement('div');
    etoile.className = 'etoile';
    etoile.style.top = Math.random() * 100 + 'vh';
    etoile.style.left = Math.random() * 100 + 'vw';
    etoile.style.animationDuration = (Math.random() * 1.5 + 0.5) + 's';
    body.appendChild(etoile);
  }
});
