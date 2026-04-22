// 🎨 Красивое приветствие с анимацией
document.body.style.cssText = `
  margin: 0;
  padding: 0;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
`;

const container = document.createElement('div');
container.style.cssText = `
  text-align: center;
  z-index: 1;
`;

const heading = document.createElement('h1');
heading.innerHTML = '✨ Hello Git ✨';
heading.style.cssText = `
  font-size: 4rem;
  color: white;
  margin: 0;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: glow 3s ease-in-out infinite;
  letter-spacing: 2px;
`;

// Добавляем CSS анимацию
const style = document.createElement('style');
style.textContent = `
  @keyframes glow {
    0%, 100% { 
      text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.5);
      transform: scale(1);
    }
    50% { 
      text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 255, 255, 0.8);
      transform: scale(1.05);
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); opacity: 0.7; }
    50% { transform: translateY(-20px); opacity: 1; }
  }

  .particle {
    position: fixed;
    pointer-events: none;
    animation: float 4s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

container.appendChild(heading);
document.body.appendChild(container);

// Создаём красивые частицы
for (let i = 0; i < 20; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.innerHTML = '⭐';
  particle.style.cssText = `
    font-size: ${Math.random() * 20 + 10}px;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation-delay: ${Math.random() * 4}s;
  `;
  document.body.appendChild(particle);
}

console.log('🚀 Welcome to Git! Давайте создавать что-то прекрасное!');
console.log('✨ This is a beautiful interactive greeting! ✨');
