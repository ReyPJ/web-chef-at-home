import chefPhoto from "../assets/images/chefFotoProvisional.webp"

function WhoIsAdjid() {
    return (
        <section className="text-white px-10 pt-20 pb-10 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="chef-image-container">
                        <img
                            src={`${chefPhoto}`}
                            alt="Foto del chef Adjid Vargas con su firma"
                        />
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-gold font-playball text-center text-4xl">
                            ¿Quién es Adjid Vargas?
                        </h2>

                        <p className="font-lora text-base text-justify leading-relaxed">
                            Habiendo cursado estudios como Lic. en Gastronomía en la
                            Cd de México (Cosuga), y cursando un diplomado de alta
                            dirección hotelera (Gestion de tourisme et de l'hôtellerie)
                            en el College de Bois-de-Serres, Boulogne, Francia (2001).
                            Ha tenido la oportunidad de seguirse preparando siendo
                            Certified Executive Chef por la American Culinary
                            Federation (ACF), Miami, Fl (2010), y sommelier por la
                            Universidad Iberoamericana, Santa Fe, México, 2013-2014.
                        </p>
                        <a className="text-white border-2 w-fit py-1 px-2 border-gold font-playball text-base">
                            Conoce a Adjid
                        </a>
                    </div>
                </div>
            </div>
            <div className="divider-line"></div>
        </section>
    )
}


export default WhoIsAdjid;