const Blog = () => {
    return (
        <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-wir">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2 lg:text-2xl">Blog</h4>
                        <h2 className="font-bold text-wir text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Tulisan Terkini</h2>
                        <p className="font-medium text-md text-sir md:text-lg">Berikut Adalah Beberapa Blog Terkini</p>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10 dark:bg-slate-800">
                            <img src={'/blog/PG.jpg'} alt="" className="w-full" />
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="https://store.sirclo.com/blog/cara-menjadi-programmer/" target="_blank" className="block mb-3 font-semibold text-xl text-wir hover:text-primary truncate transition duration-200 dark:text-white dark:hover:text-primary">Tips Menjadi Programmer</a>
                                </h3>
                                <p className="font-medium text-sir text-base mb-6">
                                    Di era perkembangan digital yang sangat pesat ini, banyak tempat yang membutuhkan pekerjaan bagi mereka yang dapat membuat dan mengembangkan suatu teknologi.
                                </p>
                                <a href="https://store.sirclo.com/blog/cara-menjadi-programmer/" target="_blank" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 transition duration-200">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10 dark:bg-slate-800">
                            <img src={'/blog/GPX.jpg'} alt="" className="w-full" />
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="https://www.logitechg.com/id-id/products/gaming-mice/pro-x-superlight-wireless-mouse.910-005958.html" target="_blank" className="block mb-3 font-semibold text-xl text-wir hover:text-primary truncate transition duration-200 dark:text-white dark:hover:text-primary">Mouse Logitech G Pro X Superlight Wireless</a>
                                </h3>
                                <p className="font-medium text-sir text-base mb-6">
                                    PRO X SUPERLIGHT adalah terobosan produk dengan berat kurang dari 63 gram, hampir 25% lebih ringan dibandingkan PRO Wireless mouse standar.
                                </p>
                                <a href="https://www.logitechg.com/id-id/products/gaming-mice/pro-x-superlight-wireless-mouse.910-005958.html" target="_blank" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 transition duration-200">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10 dark:bg-slate-800">
                            <img src={'/blog/fish.jpg'} alt="" className="w-full" />
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="https://id.quora.com/Mengapa-ikan-hidup-di-air-Mengapa-ikan-tidak-bisa-hidup-di-daratan-padahal-di-daratan-juga-ada-oksigen" target="_blank" className="block mb-3 font-semibold text-xl text-wir hover:text-primary truncate transition duration-200 dark:text-white dark:hover:text-primary">Ikan Tidak Bisa Hidup Di Darat</a>
                                </h3>
                                <p className="font-medium text-sir text-base mb-6">
                                    Mungkin karena Ikan Bernapas dengan oksigen yang larut di air, sedang didaratan tidak ada air, sehingga oksigen tidak dapat dihirup begitu saja oleh si ikan tanpa perantara air.
                                </p>
                                <a href="https://id.quora.com/Mengapa-ikan-hidup-di-air-Mengapa-ikan-tidak-bisa-hidup-di-daratan-padahal-di-daratan-juga-ada-oksigen" target="_blank" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 transition duration-200">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;