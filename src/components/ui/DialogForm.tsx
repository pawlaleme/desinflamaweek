import React, { useState } from 'react';

const DialogForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Função para abrir e fechar o diálogo
    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Botão redondo com interrogação */}
            <button
                onClick={toggleDialog}
                className="fixed bottom-5 right-5 w-16 h-16 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-red-700 focus:ring-2 focus:ring-indigo-500"
            >
                ?
            </button>

            {/* Diálogo */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
                    <div className="bg-white w-1/2 h-full p-6 shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                            Tire suas dúvidas sobre o desafio.
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    <span className="font-bold">Nome completo</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Digite seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                                <span className="font-bold"> Sua dúvida </span>
                                </label>
                                <textarea
                                    id="question"
                                    rows={4}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Digite sua dúvida"
                                ></textarea>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-indigo-500"
                                >
                                    Enviar
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleDialog}
                                    className="bg-black text-white py-2 px-4 rounded-md shadow-lg hover:bg-red-600 focus:ring-2 focus:ring-red-500"
                                >
                                    Fechar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DialogForm;
