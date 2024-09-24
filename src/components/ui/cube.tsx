
const Cube: React.FC = () => {
    // Estilos principais para a cena e o cubo
    const cubeStyle: React.CSSProperties = {
        width: '300px',
        height: '300px',
        perspective: '1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const cubeInnerStyle: React.CSSProperties = {
        width: '200px',
        height: '200px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        animation: 'rotateCube 10s infinite linear', // Animação de rotação
    };

    const faceStyle: React.CSSProperties = {
        position: 'absolute',
        width: '200px',
        height: '200px',
        backgroundImage: 'url(desafio.png)', // Insere a imagem diretamente
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid #ccc',
    };

    // Inserir estilos para cada face do cubo
    return (
        <div style={cubeStyle}>
            <div style={cubeInnerStyle}>
                <div style={{ ...faceStyle, transform: 'rotateY(0deg) translateZ(100px)' }} />
                <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(100px)' }} />
                <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(100px)' }} />
                <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(100px)' }} />
                <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(100px)' }} />
                <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(100px)' }} />
            </div>
        </div>
    );
};

// Estilos de animação
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes rotateCube {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
`;
document.head.appendChild(styleSheet);

export default Cube;
