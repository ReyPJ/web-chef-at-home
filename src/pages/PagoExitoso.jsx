import { Link } from 'react-router-dom'
import { FiCheckCircle, FiMessageCircle, FiArrowLeft } from 'react-icons/fi'

function PagoExitoso() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex items-center justify-center px-4 py-8">
            <div className="max-w-lg w-full">
                {/* Card principal */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">

                    {/* Ícono de éxito */}
                    <div className="mb-6 flex justify-center">
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-6 shadow-lg">
                            <FiCheckCircle className="text-white text-6xl md:text-7xl" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Título */}
                    <h1 className="font-playball text-4xl md:text-5xl text-gray-900 mb-4">
                        Pago Confirmado
                    </h1>

                    {/* Mensaje principal */}
                    <div className="space-y-4 mb-8">
                        <p className="text-lg md:text-xl text-gray-700 font-medium">
                            Tu pago ha sido procesado exitosamente
                        </p>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <FiMessageCircle className="text-green-600 text-2xl flex-shrink-0 mt-1" />
                                <p className="text-gray-700 text-left">
                                    Recibirás una confirmación por <strong>WhatsApp</strong> en breves momentos
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-600 text-base">
                            Tu orden está siendo preparada por el restaurante
                        </p>
                    </div>

                    {/* Separador decorativo */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="h-px bg-gradient-to-l from-transparent via-gray-300 to-transparent flex-1"></div>
                    </div>

                    {/* Instrucciones */}
                    <div className="space-y-4 mb-8">
                        <p className="text-gray-600 text-sm">
                            Puedes cerrar esta ventana de forma segura
                        </p>
                        <p className="text-gray-500 text-xs">
                            Guarda el número de tu orden para cualquier consulta
                        </p>
                    </div>

                    {/* Botón de retorno */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default PagoExitoso
