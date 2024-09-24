import React from 'react';

const BlinkingButton: React.FC = () => {
    const buttonStyle: React.CSSProperties = {
        padding: '15px 30px',
        fontSize: '20px',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, rgba(16,20,16,1) 0%, rgba(85,235,110,1) 0%, rgba(6,74,35,1) 100%)', // Cor de gradiente
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        animation: 'blink 1.5s infinite', // Animação de piscar
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)', // Sombra para dar destaque
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Suaviza o hover
    };
    const hoverStyle: React.CSSProperties = {
        transform: 'scale(1.1)', // Aumenta ligeiramente o botão ao passar o mouse
        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)', // Aumenta a sombra ao passar o mouse
    };

    const keyframesStyle = `
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `;

    return (
        <>
            {/* Estilos de animação inseridos diretamente */}
            <style>{keyframesStyle}</style>

            {/* Botão piscante estilizado */}
            <button
                style={buttonStyle}
                onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, hoverStyle); // Aplica o efeito hover
                }}
                onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, buttonStyle); // Remove o efeito hover
                }}
                onClick={() => window.location.href = '/comprar'}
            >
                COMPRE AGORA POR R$49,99!
            </button>
        </>
    );
};

export default BlinkingButton;
