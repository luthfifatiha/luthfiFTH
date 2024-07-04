const Contact = () => {
    return (
        <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2 lg:text-2xl">Contact</h4>
                        <h2 className="font-bold text-wir text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Hubungi Saya</h2>
                        <p className="font-medium text-md text-sir md:text-lg">Jika ingin ada yang ingin disampaikan, silahkan mengisi forum berikut</p>
                    </div>
                </div>

                <form>
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full mb-8 px-4">
                            <label htmlFor="name" className="text-base text-primary font-bold">Nama</label>
                            <input type="text" id="name" className="w-full bg-slate-200 text-wir p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                        </div>
                        <div className="w-full mb-8 px-4">
                            <label htmlFor="email" className="text-base text-primary font-bold">Email</label>
                            <input type="email" id="email" className="w-full bg-slate-200 text-wir p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                        </div>
                        <div className="w-full mb-8 px-4">
                            <label htmlFor="message" className="text-base text-primary font-bold">Pesan</label>
                            <input type="text" id="message" className="w-full bg-slate-200 text-wir p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                        </div>
                        <div className="w-full mb-8 px-4">
                            <button className="text-base font-semibold text-white bg-primary py-2 px-4 rounded-md hover:opacity-80 hover:shadow-lg transition duration-300 lg:py-3 lg:px-8 lg:w-full lg:rounded-full">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;