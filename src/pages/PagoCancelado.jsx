import { Link } from 'react-router-dom'
import { FiAlertCircle, FiMessageCircle, FiMenu, FiArrowLeft } from 'react-icons/fi'

function PagoCancelado() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center px-4 py-8">
            <div className="max-w-lg w-full">
                {/* Card principal */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">

                    {/* Ícono de advertencia */}
                    <div className="mb-6 flex justify-center">
                        <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-full p-6 shadow-lg">
                            <FiAlertCircle className="text-white text-6xl md:text-7xl" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Título */}
                    <h1 className="font-playball text-4xl md:text-5xl text-gray-900 mb-4">
                        Pago Cancelado
                    </h1>

                    {/* Mensaje tranquilizador */}
                    <div className="space-y-4 mb-8">
                        <p className="text-lg md:text-xl text-gray-700 font-medium">
                            No te preocupes, tu orden sigue guardada
                        </p>

                        <p className="text-gray-600 text-base">
                            Puedes completar el pago cuando estés listo
                        </p>
                    </div>

                    {/* Separador decorativo */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <div className="h-px bg-gradient-to-l from-transparent via-gray-300 to-transparent flex-1"></div>
                    </div>

                    {/* Opciones para continuar */}
                    <div className="space-y-4 mb-8">
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <FiMessageCircle className="text-amber-600 text-2xl flex-shrink-0 mt-1" />
                                <div className="text-left">
                                    <p className="text-gray-700 font-medium mb-2">
                                        Para recibir nuevamente el link de pago
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Escribe <strong className="text-amber-700">HUMANO</strong> en WhatsApp y te ayudaremos
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <FiMenu className="text-blue-600 text-2xl flex-shrink-0 mt-1" />
                                <div className="text-left">
                                    <p className="text-gray-700 font-medium mb-2">
                                        O haz una nueva orden
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Escribe <strong className="text-blue-700">MENU</strong> en WhatsApp para ver los restaurantes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nota adicional */}
                    <p className="text-gray-500 text-sm mb-8">
                        Tu orden permanecerá activa durante las próximas 24 horas
                    </p>

                    {/* Botón de retorno */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <FiArrowLeft className="text-lg" />
                        <span>Volver al inicio</span>
                    </Link>
                </div>

                {/* Logo y marca */}
                <div className="text-center mt-8">
                    <p className="font-playball text-2xl md:text-3xl text-gray-700 mb-1">
                        Chef At Home
                    </p>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">
                        Zona Esmeralda
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PagoCancelado
