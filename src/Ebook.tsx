import { CheckCircle, Gift, Heart, FileText } from 'lucide-react'; // Ícones adicionais
import { Button } from './components/ui/button';

export function Ebook() {
    return (
        
        <div className="flex flex-col items-center justify-center p-8 mb-8 md:mb-12 ">
            {/* Título principal com destaque */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-center text-teal-900 mb-8 md:mb-12 tracking-tight">
                <span className="text-green-600 ">DESINFLAMA WEEK</span>
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                {/* Imagem à esquerda */}
                <div className="relative w-64 h-64 md:w-96 md:h-96 bg-white shadow-xl rounded-lg overflow-hidden">
                    <div
                        className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg"
                        style={{ backgroundImage: 'url("desafio.png")' }}
                    >
                    </div>
                </div>

                {/* Lista com o conteúdo do eBook à direita */}
                <div className="text-left max-w-full md:max-w-md">
         
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">DESAFIO DE 7 DIAS PARA INICIAR A DESINFLAMAÇÃO</h2>
                    <ul className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700">
                        <li className="flex items-center space-x-2 md:space-x-3">
                            <CheckCircle className="text-green-600 w-6 h-6 md:w-8 md:h-8" />
                            <span><strong>Plano Alimentar Anti-Inflamatório:</strong> Siga um plano alimentar desenvolvido por nutricionistas para desinflamar o corpo.</span>
                        </li>
                        <li className="flex items-center space-x-2 md:space-x-3">
                            <FileText className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
                            <span><strong>Receitas Fáceis:</strong> Receitas saborosas e fáceis de preparar que ajudam a reduzir inflamações.</span>
                        </li>
                        <li className="flex items-center space-x-2 md:space-x-3">
                            <Heart className="text-red-600 w-6 h-6 md:w-8 md:h-8" />
                            <span><strong>Receitas de Shots Matinais:</strong> Fortaleça seu sistema imunológico com shots de saúde.</span>
                        </li>
                        <li className="flex items-center space-x-2 md:space-x-3">
                            <Gift className="text-yellow-500 w-6 h-6 md:w-8 md:h-8" />
                            <span><strong>Presente Especial:</strong> Um ebook bônus com dicas exclusivas de desintoxicação corporal.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Botão de compra */}
            <div className="mt-6 md:mt-8">
                <Button onClick={() => window.location.href = '/comprar'}>
                    Comprar Agora por R$49,90!
                </Button>
            </div>
        </div>
    );
}
