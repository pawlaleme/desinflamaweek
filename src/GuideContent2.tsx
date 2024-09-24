import { CheckCircle, Heart, Activity, Smile } from 'lucide-react';

export function GuideContent2() {
    return (
        <div className="mt-12 text-center max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Por que participar do desafio?</h2>
            <ul className="space-y-6 text-left text-lg text-gray-700">
                <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 w-8 h-8" />
                    <span><strong>Transformação Corporal:</strong> Estratégias para desinflamar o corpo e restaurar sua vitalidade.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <Heart className="text-red-600 w-8 h-8" />
                    <span><strong>Saúde Rejuvenescida:</strong> Aprenda a combater inflamações com alimentos e hábitos que promovem o bem-estar.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <Activity className="text-blue-600 w-8 h-8" />
                    <span><strong>Melhoria da Energia:</strong> Sentir-se mais disposto e cheio de energia todos os dias.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <Smile className="text-yellow-500 w-8 h-8" />
                    <span><strong>Conteúdo Simplificado:</strong> Informações práticas e aplicáveis que você pode usar hoje.</span>
                </li>
            </ul>
        </div>
    );
}

export default GuideContent2;
