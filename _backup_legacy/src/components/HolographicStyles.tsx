import { useEffect } from 'react';

export default function HolographicStyles() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .holographic-mode {
        filter: hue-rotate(180deg) saturate(1.5);
      }
      
      .holographic-mode * {
        text-shadow: 0 0 10px currentColor !important;
      }
      
      .holographic-mode .bg-absolute-black {
        background: linear-gradient(45deg, #000 0%, #001122 50%, #000 100%) !important;
      }
      
      .holographic-mode .bg-gray-900 {
        background: linear-gradient(135deg, #111 0%, #223344 50%, #111 100%) !important;
      }
      
      .holographic-mode .bg-gray-800 {
        background: linear-gradient(45deg, #222 0%, #334455 50%, #222 100%) !important;
      }
      
      .holographic-mode .border-neon-blue {
        box-shadow: 0 0 20px rgba(0, 200, 255, 0.5) !important;
      }
      
      .holographic-mode .border-tech-purple {
        box-shadow: 0 0 20px rgba(122, 47, 247, 0.5) !important;
      }
      
      .holographic-mode .text-neon-blue {
        animation: holographic-text 2s ease-in-out infinite !important;
      }
      
      .holographic-mode .text-tech-purple {
        animation: holographic-text 2s ease-in-out infinite reverse !important;
      }
      
      @keyframes holographic-text {
        0%, 100% { 
          color: #00C8FF;
          text-shadow: 0 0 10px #00C8FF, 0 0 20px #00C8FF, 0 0 30px #00C8FF;
        }
        50% { 
          color: #7A2FF7;
          text-shadow: 0 0 10px #7A2FF7, 0 0 20px #7A2FF7, 0 0 30px #7A2FF7;
        }
      }
      
      .holographic-mode .backdrop-blur-sm {
        backdrop-filter: blur(10px) hue-rotate(180deg) !important;
      }
      
      .holographic-mode canvas {
        filter: hue-rotate(180deg) saturate(2) !important;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}