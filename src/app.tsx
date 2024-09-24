import { CheckCircle, Gift, Heart, FileText } from 'lucide-react'; // Ícones adicionais
import BlinkingButton from './components/ui/BlinkingButton';
import DialogForm from './components/ui/DialogForm';
import GuideContent2 from './GuideContent2';
import Footer from './components/ui/Footer';
import Button2 from './components/ui/Button2';

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Conteúdo principal */}
      <div className="flex-grow p-4 md:p-8">
        {/* Título principal com destaque */}
        <h1 className="text-3xl md:text-6xl font-extrabold text-center text-teal-900 mb-8 md:mb-12 tracking-tight">
          <span className="text-green-600">DESINFLAMA WEEK</span>
        </h1>
        <div>
          <h1 className="bg-black text-white text-2xl text-center p-2 mt-8 mb-10"><span className="text-red-600"> ELIMINE ATÉ 4KG </span> EM UMA SEMANA</h1>

        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {/* Imagem rotacionada com perspectiva */}
          <div
            style={{
              transform: 'rotateX(360deg) rotateY(0deg)', // Rotação com os valores fornecidos
              transformStyle: 'preserve-3d', // Mantém o estilo 3D
              perspective: '1500px', // Define a perspectiva 3D
            }}
          >
            <img
              className="w-full max-w-xs md:max-w-md rounded-xl"
              style={{
                transform: 'rotateX(360deg) rotateY(25deg)', // Rotação com os valores fornecidos
                transformStyle: 'preserve-3d', // Mantém o estilo 3D
                perspective: '900px', // Define a perspectiva 3D
              }}
              src="desafio.png"
              alt="Descrição da imagem"
            />
          </div>

          {/* Lista com o conteúdo do eBook à direita */}
          <div className="text-left max-w-full md:max-w-md">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
              DESAFIO DE 7 DIAS PARA INICIAR A DESINFLAMAÇÃO
            </h2>
            <ul className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700">
              <li className="flex items-center space-x-2 md:space-x-3">
                <CheckCircle className="text-green-600 w-6 h-6 md:w-8 md:h-8" />
                <span>
                  <strong>Plano Alimentar Anti-Inflamatório:</strong> Siga um plano alimentar desenvolvido por nutricionistas para desinflamar o corpo.
                </span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-3">
                <FileText className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
                <span>
                  <strong>Receitas Fáceis:</strong> Receitas saborosas e fáceis de preparar que ajudam a reduzir inflamações.
                </span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-3">
                <Heart className="text-red-600 w-6 h-6 md:w-8 md:h-8" />
                <span>
                  <strong>Receitas de Shots Matinais:</strong> Fortaleça seu sistema imunológico com shots de saúde.
                </span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-3">
                <Gift className="text-yellow-500 w-6 h-6 md:w-8 md:h-8" />
                <span>
                  <strong>Presente Especial:</strong> Ao fim do do desafio você ganha um presente exclusivo.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center mt-6">

          <BlinkingButton />
          <GuideContent2 />
        </div>
        <div className="flex flex-col items-center mt-6">
        <Button2 />

        </div>

        {/* Botão de compra e diálogo de formulário */}
        <div className="mt-6 md:mt-8 flex flex-col items-center">
          <DialogForm />
        </div>
      </div>

      {/* Footer fixo ao final */}
      <Footer />
    </div>
  );
}
