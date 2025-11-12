import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiShield, FiFileText } from 'react-icons/fi'

function PrivacidadTerminos() {
    const [activeTab, setActiveTab] = useState('privacidad')

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gold transition-colors"
                    >
                        <FiArrowLeft className="text-xl" />
                        <span className="text-sm font-medium">Volver al inicio</span>
                    </Link>
                    <h1 className="font-playball text-3xl md:text-4xl text-center text-gray-900 mt-4 mb-2">
                        Chef At Home
                    </h1>
                    <p className="text-center text-gray-600 text-sm">
                        Información Legal
                    </p>
                </div>
            </header>

            {/* Tabs Navigation */}
            <div className="bg-white border-b border-gray-200 sticky top-[140px] z-40">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="flex gap-1">
                        <button
                            onClick={() => setActiveTab('privacidad')}
                            className={`flex items-center gap-2 px-6 py-4 font-medium transition-all relative ${
                                activeTab === 'privacidad'
                                    ? 'text-gold'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <FiShield className="text-lg" />
                            <span>Política de Privacidad</span>
                            {activeTab === 'privacidad' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></div>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('terminos')}
                            className={`flex items-center gap-2 px-6 py-4 font-medium transition-all relative ${
                                activeTab === 'terminos'
                                    ? 'text-gold'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <FiFileText className="text-lg" />
                            <span>Términos y Condiciones</span>
                            {activeTab === 'terminos' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></div>
                            )}
                        </button>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                {activeTab === 'privacidad' ? <PrivacidadContent /> : <TerminosContent />}
            </main>

            {/* Footer Info */}
            <footer className="bg-gray-900 text-white py-8 mt-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-sm text-gray-400 mb-2">
                        ¿Preguntas sobre privacidad o términos?
                    </p>
                    <a
                        href="mailto:privacidad@chef-at-home.com.mx"
                        className="text-gold hover:text-gold/80 transition-colors"
                    >
                        privacidad@chef-at-home.com.mx
                    </a>
                    <p className="text-xs text-gray-500 mt-6">
                        Chef At Home © 2025 - Todos los derechos reservados
                    </p>
                </div>
            </footer>
        </div>
    )
}

function PrivacidadContent() {
    return (
        <article className="prose prose-gray max-w-none">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-8 mb-12 border border-gold/20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Política de Privacidad
                </h2>
                <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Última actualización:</strong> Enero 2025</p>
                    <p><strong>Efectiva desde:</strong> Enero 2025</p>
                    <p><strong>Responsable:</strong> Chef At Home</p>
                </div>
            </div>

            {/* Tabla de Contenidos */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contenido</h3>
                <nav className="space-y-2 text-sm">
                    <a href="#introduccion" className="block text-gray-700 hover:text-gold transition-colors">
                        1. Introducción
                    </a>
                    <a href="#informacion-recopilada" className="block text-gray-700 hover:text-gold transition-colors">
                        2. Información que Recopilamos
                    </a>
                    <a href="#uso-informacion" className="block text-gray-700 hover:text-gold transition-colors">
                        3. Cómo Usamos tu Información
                    </a>
                    <a href="#compartir-informacion" className="block text-gray-700 hover:text-gold transition-colors">
                        4. Con Quién Compartimos tu Información
                    </a>
                    <a href="#whatsapp" className="block text-gray-700 hover:text-gold transition-colors">
                        5. Uso de WhatsApp Business
                    </a>
                    <a href="#seguridad" className="block text-gray-700 hover:text-gold transition-colors">
                        6. Seguridad de los Datos
                    </a>
                    <a href="#retencion" className="block text-gray-700 hover:text-gold transition-colors">
                        7. Retención de Datos
                    </a>
                    <a href="#derechos-arco" className="block text-gray-700 hover:text-gold transition-colors">
                        8. Tus Derechos (ARCO)
                    </a>
                    <a href="#cookies" className="block text-gray-700 hover:text-gold transition-colors">
                        9. Cookies y Tecnologías Similares
                    </a>
                    <a href="#cambios" className="block text-gray-700 hover:text-gold transition-colors">
                        10. Cambios a esta Política
                    </a>
                    <a href="#contacto" className="block text-gray-700 hover:text-gold transition-colors">
                        11. Contacto
                    </a>
                    <a href="#jurisdiccion" className="block text-gray-700 hover:text-gold transition-colors">
                        12. Jurisdicción
                    </a>
                </nav>
            </div>

            {/* Secciones */}
            <section id="introduccion" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">1.</span> Introducción
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        En <strong>Chef At Home</strong> respetamos tu privacidad y estamos comprometidos con la
                        protección de tus datos personales. Esta Política de Privacidad describe cómo recopilamos,
                        usamos, compartimos y protegemos tu información cuando utilizas nuestro servicio de bot de
                        WhatsApp para pedidos de comida a domicilio.
                    </p>
                    <p>
                        Nuestro servicio conecta a clientes con 5 restaurantes locales en la Zona Esmeralda, México,
                        facilitando pedidos a través de WhatsApp Business.
                    </p>
                    <p>
                        Esta política cumple con la <strong>Ley Federal de Protección de Datos Personales en
                        Posesión de los Particulares (LFPDPPP)</strong> de México y su Reglamento.
                    </p>
                </div>
            </section>

            <section id="informacion-recopilada" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">2.</span> Información que Recopilamos
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Cuando utilizas nuestro bot de WhatsApp, recopilamos la siguiente información:
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Información Personal:</h4>
                        <ul className="space-y-2 list-disc list-inside ml-2">
                            <li><strong>Número de teléfono de WhatsApp:</strong> Para identificarte y comunicarnos contigo</li>
                            <li><strong>Nombre:</strong> Para personalizar tu experiencia y procesar pedidos</li>
                            <li><strong>Dirección(es) de entrega:</strong> Para entregar tus pedidos correctamente</li>
                            <li><strong>Zona de entrega:</strong> Para calcular costos de envío</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Información de Pedidos:</h4>
                        <ul className="space-y-2 list-disc list-inside ml-2">
                            <li><strong>Historial de pedidos:</strong> Restaurantes, platillos seleccionados y montos</li>
                            <li><strong>Preferencias:</strong> Indicadores de cliente frecuente</li>
                            <li><strong>Fecha y hora de pedidos:</strong> Para procesamiento y registro</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Información de WhatsApp:</h4>
                        <ul className="space-y-2 list-disc list-inside ml-2">
                            <li><strong>Mensajes del chat:</strong> Tus conversaciones con el bot para procesar pedidos</li>
                            <li><strong>Metadatos:</strong> Hora de mensajes y estado de entrega</li>
                        </ul>
                    </div>

                    <p className="italic text-gray-600 text-sm bg-gray-50 p-4 rounded-lg">
                        <strong>Nota:</strong> NO recopilamos información sensible como datos de tarjetas de crédito.
                        Los pagos se realizan en efectivo al momento de la entrega o mediante métodos de pago externos.
                    </p>
                </div>
            </section>

            <section id="uso-informacion" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">3.</span> Cómo Usamos tu Información
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Utilizamos tu información personal para:</p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">✓ Procesar Pedidos</h4>
                            <p className="text-sm text-gray-600">
                                Recibir, confirmar y coordinar la preparación y entrega de tus pedidos
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">✓ Comunicación</h4>
                            <p className="text-sm text-gray-600">
                                Enviar confirmaciones, actualizaciones de estado y resolver dudas
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">✓ Calcular Costos</h4>
                            <p className="text-sm text-gray-600">
                                Determinar tarifas de envío basadas en tu ubicación
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">✓ Identificar Clientes</h4>
                            <p className="text-sm text-gray-600">
                                Reconocer clientes frecuentes para ofrecer un mejor servicio
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">✓ Soporte al Cliente</h4>
                            <p className="text-sm text-gray-600">
                                Atender consultas, quejas y resolver problemas
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">✓ Mejorar el Servicio</h4>
                            <p className="text-sm text-gray-600">
                                Analizar patrones de uso para optimizar la experiencia
                            </p>
                        </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-5 mt-6">
                        <h4 className="font-semibold text-red-900 mb-2">Lo que NO hacemos:</h4>
                        <ul className="space-y-1 text-sm text-red-800 list-disc list-inside ml-2">
                            <li>NO vendemos tu información a terceros</li>
                            <li>NO usamos tus datos para marketing sin tu consentimiento explícito</li>
                            <li>NO compartimos tu información más allá de lo necesario para procesar pedidos</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="compartir-informacion" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">4.</span> Con Quién Compartimos tu Información
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Compartimos tu información únicamente con las partes necesarias para procesar y entregar
                        tus pedidos:
                    </p>

                    <div className="space-y-4">
                        <div className="border-l-4 border-gold/50 pl-5 py-2">
                            <h4 className="font-semibold text-gray-900 mb-2">🍽️ Restaurantes Participantes</h4>
                            <p className="text-sm text-gray-600 mb-2">
                                Compartimos solo la información necesaria para preparar tu pedido:
                            </p>
                            <ul className="text-sm text-gray-600 list-disc list-inside ml-2 space-y-1">
                                <li>Tu nombre</li>
                                <li>Platillos solicitados</li>
                                <li>Instrucciones especiales (si las hay)</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-gold/50 pl-5 py-2">
                            <h4 className="font-semibold text-gray-900 mb-2">🚗 Servicio de Entrega</h4>
                            <p className="text-sm text-gray-600 mb-2">
                                Compartimos únicamente:
                            </p>
                            <ul className="text-sm text-gray-600 list-disc list-inside ml-2 space-y-1">
                                <li>Tu dirección de entrega</li>
                                <li>Tu número de teléfono (para coordinar la entrega)</li>
                                <li>Nombre (para confirmar la entrega)</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-gold/50 pl-5 py-2">
                            <h4 className="font-semibold text-gray-900 mb-2">📱 Meta/Facebook (WhatsApp Business)</h4>
                            <p className="text-sm text-gray-600 mb-2">
                                Utilizamos WhatsApp Business Cloud API, por lo que algunos datos se procesan
                                a través de la infraestructura de Meta. Ver sección específica más abajo.
                            </p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-6">
                        <p className="text-sm text-yellow-900">
                            <strong>Importante:</strong> NO vendemos, alquilamos ni compartimos tu información
                            con terceros para fines de marketing o publicidad.
                        </p>
                    </div>
                </div>
            </section>

            <section id="whatsapp" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">5.</span> Uso de WhatsApp Business
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Chef At Home utiliza <strong>WhatsApp Business Cloud API</strong> para proporcionar
                        nuestro servicio de pedidos. Esto significa que:
                    </p>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Procesamiento de Datos por Meta:</h4>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside ml-2">
                            <li>
                                Los mensajes que envías a través de WhatsApp son procesados por la
                                infraestructura de Meta/Facebook
                            </li>
                            <li>
                                Meta puede recopilar metadatos como hora de envío y estado de entrega
                            </li>
                            <li>
                                Meta procesa los mensajes según su propia Política de Privacidad
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3">División de Responsabilidades:</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-medium text-green-700 mb-2">Chef At Home es responsable de:</p>
                                <ul className="space-y-1 text-gray-600 list-disc list-inside ml-2">
                                    <li>Procesamiento de tus pedidos</li>
                                    <li>Almacenamiento de tu historial</li>
                                    <li>Protección de tus datos personales</li>
                                    <li>Cumplimiento con leyes mexicanas</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-blue-700 mb-2">Meta/Facebook es responsable de:</p>
                                <ul className="space-y-1 text-gray-600 list-disc list-inside ml-2">
                                    <li>Infraestructura de WhatsApp</li>
                                    <li>Transmisión de mensajes</li>
                                    <li>Seguridad de la plataforma</li>
                                    <li>Encriptación end-to-end</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                        <p className="text-sm text-blue-900">
                            <strong>Para más información:</strong> Consulta la{' '}
                            <a
                                href="https://www.whatsapp.com/legal/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 underline hover:text-blue-800"
                            >
                                Política de Privacidad de WhatsApp
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section id="seguridad" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">6.</span> Seguridad de los Datos
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Implementamos medidas de seguridad técnicas, físicas y administrativas para proteger
                        tu información personal contra acceso no autorizado, pérdida, mal uso o alteración.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2">🔒 Encriptación</h4>
                            <p className="text-sm text-blue-800">
                                Comunicaciones cifradas end-to-end a través de WhatsApp
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">👥 Acceso Limitado</h4>
                            <p className="text-sm text-green-800">
                                Solo personal autorizado puede acceder a tus datos
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-2">🛡️ Protección</h4>
                            <p className="text-sm text-purple-800">
                                Servidores seguros y sistemas de respaldo
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mt-4">
                        <p className="text-sm text-orange-900">
                            <strong>Nota importante:</strong> Ningún sistema de transmisión por Internet o
                            almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por proteger
                            tu información, no podemos garantizar su seguridad absoluta.
                        </p>
                    </div>
                </div>
            </section>

            <section id="retencion" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">7.</span> Retención de Datos
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Conservamos tu información personal durante el tiempo necesario para cumplir con
                        los propósitos descritos en esta política:
                    </p>

                    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left p-4 font-semibold text-gray-900">Tipo de Dato</th>
                                    <th className="text-left p-4 font-semibold text-gray-900">Período de Retención</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="p-4">Información de cuenta activa</td>
                                    <td className="p-4">Mientras tu cuenta esté activa</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="p-4">Historial de pedidos</td>
                                    <td className="p-4">2 años después del último pedido</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Conversaciones de WhatsApp</td>
                                    <td className="p-4">90 días desde el último mensaje</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="p-4">Datos de facturación (si aplica)</td>
                                    <td className="p-4">5 años (requisito fiscal)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                        <p className="text-sm text-blue-900">
                            <strong>Eliminación de cuenta:</strong> Puedes solicitar la eliminación de tu
                            cuenta y datos en cualquier momento contactando a{' '}
                            <a href="mailto:privacidad@chef-at-home.com.mx" className="text-blue-700 underline">
                                privacidad@chef-at-home.com.mx
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section id="derechos-arco" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">8.</span> Tus Derechos (ARCO)
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        De acuerdo con la <strong>Ley Federal de Protección de Datos Personales en Posesión
                        de los Particulares (LFPDPPP)</strong>, tienes los siguientes derechos respecto a
                        tus datos personales:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200">
                            <h4 className="font-semibold text-teal-900 mb-2 flex items-center gap-2">
                                📖 Acceso
                            </h4>
                            <p className="text-sm text-teal-800">
                                Conocer qué datos personales tenemos sobre ti y para qué los usamos
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                ✏️ Rectificación
                            </h4>
                            <p className="text-sm text-blue-800">
                                Corregir tus datos si son inexactos o están desactualizados
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-5 border border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                                🗑️ Cancelación
                            </h4>
                            <p className="text-sm text-red-800">
                                Solicitar la eliminación de tus datos de nuestros registros
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5 border border-orange-200">
                            <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                                🚫 Oposición
                            </h4>
                            <p className="text-sm text-orange-800">
                                Oponerte al tratamiento de tus datos para fines específicos
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">📦 Derecho de Portabilidad</h4>
                        <p className="text-sm text-gray-700">
                            También tienes derecho a recibir tus datos en un formato estructurado y
                            comúnmente utilizado para transferirlos a otro responsable.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-gold/30 rounded-xl p-6 shadow-md">
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                            Cómo Ejercer tus Derechos ARCO:
                        </h4>
                        <ol className="space-y-3 text-sm text-gray-700">
                            <li className="flex gap-3">
                                <span className="font-semibold text-gold">1.</span>
                                <span>
                                    Envía un correo electrónico a:{' '}
                                    <a
                                        href="mailto:privacidad@chef-at-home.com.mx"
                                        className="text-gold underline hover:text-gold/80"
                                    >
                                        privacidad@chef-at-home.com.mx
                                    </a>
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-semibold text-gold">2.</span>
                                <span>
                                    Incluye en tu solicitud:
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Tu nombre completo</li>
                                        <li>Número de teléfono de WhatsApp registrado</li>
                                        <li>Descripción clara del derecho que deseas ejercer</li>
                                        <li>Documentos que acrediten tu identidad</li>
                                    </ul>
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-semibold text-gold">3.</span>
                                <span>
                                    Recibirás una respuesta en un plazo máximo de <strong>20 días hábiles</strong>
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-semibold text-gold">4.</span>
                                <span>
                                    Si tu solicitud es procedente, se hará efectiva en un plazo máximo de
                                    <strong> 15 días hábiles</strong>
                                </span>
                            </li>
                        </ol>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-gray-400 p-5 rounded-r-lg">
                        <p className="text-sm text-gray-700">
                            <strong>Instituto Nacional de Transparencia (INAI):</strong> Si consideras que
                            tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir
                            ante el INAI. Más información en:{' '}
                            <a
                                href="https://home.inai.org.mx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 underline hover:text-gray-700"
                            >
                                www.inai.org.mx
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section id="cookies" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">9.</span> Cookies y Tecnologías Similares
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Nuestro sitio web <strong>chef-at-home.com.mx</strong> puede utilizar cookies y
                        tecnologías similares para mejorar tu experiencia:
                    </p>

                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Tipos de cookies que usamos:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex gap-2">
                                <span className="text-green-600">✓</span>
                                <span>
                                    <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento
                                    básico del sitio
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-green-600">✓</span>
                                <span>
                                    <strong>Cookies de análisis:</strong> Para entender cómo usas nuestro
                                    sitio web (Google Analytics)
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                        <p className="text-sm text-blue-900">
                            <strong>Nota:</strong> El servicio de WhatsApp Bot no utiliza cookies ya que
                            funciona enteramente dentro de la aplicación WhatsApp.
                        </p>
                    </div>

                    <p className="text-sm text-gray-600">
                        Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar
                        algunas funcionalidades del sitio web.
                    </p>
                </div>
            </section>

            <section id="cambios" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">10.</span> Cambios a esta Política
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios
                        en nuestras prácticas o por otros motivos operativos, legales o regulatorios.
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                        <h4 className="font-semibold text-yellow-900 mb-2">📢 Te notificaremos:</h4>
                        <ul className="space-y-2 text-sm text-yellow-800 list-disc list-inside ml-2">
                            <li>Actualizando la fecha de "Última actualización" al inicio de esta política</li>
                            <li>Enviando un mensaje a través de WhatsApp para cambios significativos</li>
                            <li>Publicando un aviso en nuestro sitio web</li>
                        </ul>
                    </div>

                    <p className="text-sm text-gray-600">
                        Te recomendamos revisar esta política periódicamente. El uso continuado de nuestro
                        servicio después de la publicación de cambios constituye tu aceptación de dichos cambios.
                    </p>
                </div>
            </section>

            <section id="contacto" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">11.</span> Contacto
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Si tienes preguntas, comentarios o inquietudes sobre esta Política de Privacidad
                        o sobre cómo manejamos tu información personal, puedes contactarnos:
                    </p>

                    <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-6">
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-gold font-semibold">📧</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Email para Privacidad:</p>
                                    <a
                                        href="mailto:privacidad@chef-at-home.com.mx"
                                        className="text-gold hover:text-gold/80 underline"
                                    >
                                        privacidad@chef-at-home.com.mx
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-gold font-semibold">🌐</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Sitio Web:</p>
                                    <a
                                        href="https://chef-at-home.com.mx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gold hover:text-gold/80 underline"
                                    >
                                        https://chef-at-home.com.mx
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-gold font-semibold">📍</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Ubicación:</p>
                                    <p className="text-gray-700">Zona Esmeralda, México</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-gold font-semibold">👤</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Responsable:</p>
                                    <p className="text-gray-700">Chef At Home</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="jurisdiccion" className="mb-10 scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">12.</span> Jurisdicción
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Esta Política de Privacidad se rige por las leyes de los Estados Unidos Mexicanos.
                    </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Leyes Aplicables:</h4>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside ml-2">
                            <li>
                                <strong>Ley Federal de Protección de Datos Personales en Posesión de los
                                Particulares (LFPDPPP)</strong>
                            </li>
                            <li>
                                <strong>Reglamento de la LFPDPPP</strong>
                            </li>
                            <li>
                                <strong>Lineamientos del Aviso de Privacidad</strong> emitidos por el INAI
                            </li>
                        </ul>
                    </div>

                    <p className="text-sm text-gray-600">
                        Cualquier controversia derivada de esta política será resuelta por los tribunales
                        competentes de México.
                    </p>
                </div>
            </section>

            {/* Final Note */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/10 border-2 border-gold/40 rounded-2xl p-8 text-center">
                <p className="text-gray-900 font-medium mb-2">
                    Gracias por confiar en Chef At Home
                </p>
                <p className="text-sm text-gray-700">
                    Tu privacidad es importante para nosotros. Estamos comprometidos con la protección
                    y el uso responsable de tu información personal.
                </p>
            </div>
        </article>
    )
}

function TerminosContent() {
    return (
        <article className="prose prose-gray max-w-none">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-12 border border-blue-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Términos y Condiciones de Uso
                </h2>
                <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Última actualización:</strong> Enero 2025</p>
                    <p><strong>Efectiva desde:</strong> Enero 2025</p>
                    <p><strong>Servicio:</strong> Chef At Home - Bot de WhatsApp</p>
                </div>
            </div>

            {/* Introducción */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">1.</span> Aceptación de los Términos
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Bienvenido a <strong>Chef At Home</strong>. Al utilizar nuestro servicio de bot de
                        WhatsApp para pedidos de comida a domicilio, aceptas estos Términos y Condiciones
                        en su totalidad.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                        <p className="text-sm text-amber-900">
                            <strong>Importante:</strong> Si no estás de acuerdo con estos términos,
                            por favor no utilices nuestro servicio.
                        </p>
                    </div>
                </div>
            </section>

            {/* Descripción del Servicio */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">2.</span> Descripción del Servicio
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Chef At Home es una plataforma de intermediación que conecta a clientes con
                        restaurantes locales en la Zona Esmeralda, México, a través de un bot
                        conversacional de WhatsApp.
                    </p>

                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Nuestro servicio incluye:</h4>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside ml-2">
                            <li>Menús de 5 restaurantes participantes</li>
                            <li>Procesamiento de pedidos a través de WhatsApp</li>
                            <li>Coordinación de entrega a domicilio</li>
                            <li>Soporte al cliente</li>
                            <li>Historial de pedidos para clientes frecuentes</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                        <h4 className="font-semibold text-red-900 mb-2">Lo que NO somos:</h4>
                        <ul className="space-y-1 text-sm text-red-800 list-disc list-inside ml-2">
                            <li>NO somos un restaurante</li>
                            <li>NO preparamos los alimentos</li>
                            <li>NO somos responsables de la calidad de la comida (es responsabilidad del restaurante)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Requisitos de Uso */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">3.</span> Requisitos de Uso
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Para utilizar nuestro servicio debes:</p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                            <h4 className="font-semibold text-green-900 mb-2">✓ Requisitos Técnicos:</h4>
                            <ul className="space-y-1 text-sm text-green-800 list-disc list-inside ml-2">
                                <li>Tener WhatsApp instalado</li>
                                <li>Número de teléfono activo</li>
                                <li>Conexión a internet</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                            <h4 className="font-semibold text-blue-900 mb-2">✓ Requisitos Legales:</h4>
                            <ul className="space-y-1 text-sm text-blue-800 list-disc list-inside ml-2">
                                <li>Ser mayor de 18 años</li>
                                <li>Ubicarse en zona de cobertura</li>
                                <li>Proporcionar información veraz</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pedidos y Pagos */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">4.</span> Pedidos y Pagos
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Proceso de Pedido:</h4>
                        <ol className="space-y-2 text-sm text-gray-700">
                            <li className="flex gap-2">
                                <span className="font-semibold text-teal-700">1.</span>
                                <span>Seleccionas restaurante y platillos a través del bot</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-teal-700">2.</span>
                                <span>Proporcionas dirección de entrega</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-teal-700">3.</span>
                                <span>Recibes confirmación del pedido y tiempo estimado</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-teal-700">4.</span>
                                <span>El restaurante prepara tu pedido</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-teal-700">5.</span>
                                <span>Recibes tu pedido en la dirección indicada</span>
                            </li>
                        </ol>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Métodos de Pago:</h4>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside ml-2">
                            <li><strong>Efectivo al momento de la entrega</strong> (método principal)</li>
                            <li>Transferencia bancaria (según disponibilidad del restaurante)</li>
                            <li>Tarjeta de crédito/débito (según disponibilidad del restaurante)</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                        <p className="text-sm text-yellow-900">
                            <strong>Nota:</strong> Los precios incluyen el costo de los alimentos más
                            cargo por envío (si aplica). El monto total se te informará antes de confirmar
                            tu pedido.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cancelaciones y Reembolsos */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">5.</span> Cancelaciones y Reembolsos
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Cancelaciones:</h4>
                        <ul className="space-y-2 text-sm text-blue-800 list-disc list-inside ml-2">
                            <li>
                                Puedes cancelar tu pedido <strong>sin cargo</strong> si aún no ha sido
                                preparado
                            </li>
                            <li>
                                Si el pedido ya está en preparación, puede aplicar un cargo de cancelación
                            </li>
                            <li>
                                Una vez que el pedido salió para entrega, <strong>no se aceptan cancelaciones</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Reembolsos:</h4>
                        <p className="text-sm text-green-800 mb-2">
                            Se otorgarán reembolsos en los siguientes casos:
                        </p>
                        <ul className="space-y-1 text-sm text-green-800 list-disc list-inside ml-2">
                            <li>Pedido incorrecto entregado</li>
                            <li>Alimentos en mal estado</li>
                            <li>Pedido no entregado</li>
                            <li>Error en el cobro</li>
                        </ul>
                        <p className="text-sm text-green-800 mt-3">
                            <strong>Tiempo de procesamiento:</strong> 5-10 días hábiles
                        </p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                        <h4 className="font-semibold text-red-900 mb-2">NO se reembolsa:</h4>
                        <ul className="space-y-1 text-sm text-red-800 list-disc list-inside ml-2">
                            <li>Cambio de opinión después de confirmar el pedido</li>
                            <li>Dirección incorrecta proporcionada por el cliente</li>
                            <li>Cliente no disponible en el domicilio</li>
                            <li>Preferencias personales de sabor</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Responsabilidades */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">6.</span> Responsabilidades y Limitaciones
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Chef At Home es responsable de:</h4>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside ml-2">
                            <li>Procesar correctamente tu pedido</li>
                            <li>Coordinar la entrega en tiempo y forma</li>
                            <li>Proteger tu información personal</li>
                            <li>Proporcionar soporte al cliente</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                        <h4 className="font-semibold text-red-900 mb-3">Chef At Home NO es responsable de:</h4>
                        <ul className="space-y-2 text-sm text-red-800 list-disc list-inside ml-2">
                            <li>
                                <strong>Calidad de los alimentos:</strong> Los restaurantes son responsables
                                de la preparación y calidad
                            </li>
                            <li>
                                <strong>Alergias alimentarias:</strong> Debes informar directamente al
                                restaurante a través del bot
                            </li>
                            <li>
                                <strong>Disponibilidad de WhatsApp:</strong> Dependemos de la plataforma de Meta
                            </li>
                            <li>
                                <strong>Fallas de internet:</strong> Del cliente o del servicio
                            </li>
                            <li>
                                <strong>Casos de fuerza mayor:</strong> Desastres naturales, emergencias, etc.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-300 rounded-lg p-5">
                        <p className="text-sm text-amber-900">
                            <strong>Limitación de responsabilidad:</strong> En ningún caso Chef At Home
                            será responsable por daños indirectos, incidentales, especiales o consecuentes
                            que resulten del uso o la imposibilidad de usar el servicio.
                        </p>
                    </div>
                </div>
            </section>

            {/* Uso Aceptable */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">7.</span> Uso Aceptable
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Al utilizar Chef At Home, te comprometes a:</p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                            <h4 className="font-semibold text-green-900 mb-2">✓ Sí puedes:</h4>
                            <ul className="space-y-1 text-sm text-green-800 list-disc list-inside ml-2">
                                <li>Usar el servicio para pedidos legítimos</li>
                                <li>Proporcionar información veraz</li>
                                <li>Comunicarte respetuosamente</li>
                                <li>Reportar problemas o errores</li>
                            </ul>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                            <h4 className="font-semibold text-red-900 mb-2">✗ NO puedes:</h4>
                            <ul className="space-y-1 text-sm text-red-800 list-disc list-inside ml-2">
                                <li>Hacer pedidos fraudulentos</li>
                                <li>Acosar al personal o repartidores</li>
                                <li>Usar el servicio para actividades ilegales</li>
                                <li>Intentar hackear o dañar el sistema</li>
                                <li>Revender el servicio</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-lg">
                        <p className="text-sm text-orange-900">
                            <strong>Consecuencias:</strong> Nos reservamos el derecho de suspender o
                            cancelar tu acceso al servicio si violas estos términos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Propiedad Intelectual */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">8.</span> Propiedad Intelectual
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Todos los contenidos del servicio Chef At Home, incluyendo pero no limitado a
                        textos, gráficos, logos, imágenes, y software, son propiedad de Chef At Home o
                        sus licenciantes y están protegidos por las leyes de propiedad intelectual de México.
                    </p>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                        <p className="text-sm text-purple-900">
                            <strong>Marca registrada:</strong> "Chef At Home" y su logo son marcas
                            registradas. No puedes usar estas marcas sin autorización previa por escrito.
                        </p>
                    </div>
                </div>
            </section>

            {/* Modificaciones */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">9.</span> Modificaciones al Servicio
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto
                        del servicio en cualquier momento, incluyendo:
                    </p>

                    <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside ml-2">
                        <li>Restaurantes participantes</li>
                        <li>Menús disponibles</li>
                        <li>Zonas de cobertura</li>
                        <li>Horarios de servicio</li>
                        <li>Precios y tarifas de envío</li>
                    </ul>

                    <p className="text-sm text-gray-600 mt-4">
                        Haremos nuestro mejor esfuerzo para notificarte de cambios significativos con
                        anticipación razonable.
                    </p>
                </div>
            </section>

            {/* Ley Aplicable */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">10.</span> Ley Aplicable y Jurisdicción
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos.
                    </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <p className="text-sm text-gray-700">
                            Cualquier disputa relacionada con estos términos o el uso del servicio será
                            sometida a la jurisdicción exclusiva de los tribunales competentes de México.
                        </p>
                    </div>

                    <p className="text-sm text-gray-600">
                        Si alguna disposición de estos términos se considera inválida o inaplicable,
                        las demás disposiciones permanecerán en pleno vigor y efecto.
                    </p>
                </div>
            </section>

            {/* Contacto */}
            <section className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gold">11.</span> Contacto y Soporte
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Para preguntas sobre estos Términos y Condiciones o sobre el servicio en general:
                    </p>

                    <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-6">
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-gold font-semibold">📧</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Email de Soporte:</p>
                                    <a
                                        href="mailto:soporte@chef-at-home.com.mx"
                                        className="text-gold hover:text-gold/80 underline"
                                    >
                                        soporte@chef-at-home.com.mx
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-gold font-semibold">💬</span>
                                <div>
                                    <p className="font-semibold text-gray-900">WhatsApp:</p>
                                    <p className="text-gray-700">A través de nuestro bot de pedidos</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-gold font-semibold">🌐</span>
                                <div>
                                    <p className="font-semibold text-gray-900">Sitio Web:</p>
                                    <a
                                        href="https://chef-at-home.com.mx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gold hover:text-gold/80 underline"
                                    >
                                        https://chef-at-home.com.mx
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                        <p className="text-sm text-blue-900">
                            <strong>Horario de atención:</strong> Lunes a Domingo, según horarios de
                            operación de los restaurantes. Tiempo de respuesta: 1-24 horas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final Note */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/10 border-2 border-gold/40 rounded-2xl p-8 text-center">
                <p className="text-gray-900 font-medium mb-3">
                    Al utilizar Chef At Home, confirmas que has leído, entendido y aceptado
                    estos Términos y Condiciones
                </p>
                <p className="text-sm text-gray-700 italic">
                    ¡Gracias por elegir Chef At Home para tus pedidos de comida! 🍽️
                </p>
            </div>
        </article>
    )
}

export default PrivacidadTerminos
