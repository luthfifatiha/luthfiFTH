import Image from "next/image";

const Hero = () => {
    return(
        <section id="home" className="pt-36 dark:bg-wir">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl">Hi Dude👋, I'm <span className="block font-bold text-wir text-4xl mt-1 lg:text-5xl dark:text-white">Luthfi Fatiha</span></h1>
                        <h2 className="font-medium text-sir text-lg mb-5 lg:text-2xl">Student <span className="text-wir dark:text-white">|</span> Gamers <span className="text-wir dark:text-white">|</span> Programmer</h2>
                        <p className="font-medium text-sir mb-10 leading-relaxed lg:text-xl">Ngoding itu mudah dan menyenangkan PAHAM?!🖐️ <span className="text-wir font-bold dark:text-white">PAHAM KAK GEM🫡</span></p>

                        <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:bg-teal-400 hover:opacity-80 transition duration-200 ease-in-out">Contact Me</a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="mt-10 relative lg:mt-9 lg:right-0">
                            <img src={'/upi.png'} alt="" className="max-w-full mx-auto lg:w-4/5 lg:h-4/5"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;