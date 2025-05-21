import { Menu } from './modules/menu.js';

// Função para inicializar a aplicação
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o menu
  const menu = new Menu();
  
  // Adicionar efeito de hover suave nos botões
  const menuButtons = document.querySelectorAll('.menu-button');
  
  menuButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });

  // Adiciona estilo para o efeito ripple
  const style = document.createElement('style');
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}); 