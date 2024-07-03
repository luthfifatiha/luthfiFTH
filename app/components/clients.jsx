const Clients = () => {
    return (
        <section id="clients" className="pt-36 pb-32 bg-slate-900">
            <div className="container">
                <div className="w-full mx-4">
                    <div className="mx-auto text-center mb-16 lg:mb-10">
                        <h4 className="font-semibold text-lg text-primary mb-2 lg:text-3xl">Clients</h4>
                        <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Pernah Bekerja Sama Dengan</h2>
                    </div>
                </div>

                <div className="w-full mx-4">
                    <div className="flex flex-wrap items-center justify-center">
                        <a href="https://www.instagram.com/smkn1sumedang.official/" target="_blank" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:max-w-[250px] lg:mx-6 xl:mx-8">
                            <img src={'/client/NSS.png'} alt="" />
                        </a>
                        <a href="https://www.instagram.com/nasa/" target="_blank" className="max-w-[90px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:max-w-[180px] lg:mx-6 xl:mx-8">
                            <img src={'/client/nasa.png'} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;