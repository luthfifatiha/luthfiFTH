const Portofolio = () => {
    return (
        <section id="portofolio" className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2 lg:text-2xl">Portofolio</h4>
                        <h2 className="font-bold text-wir text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">My Project</h2>
                        <p className="font-medium text-md text-sir md:text-lg">Berikut adalah beberapa project yang telah saya kerjakan</p>
                    </div>
                </div>

                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    {/* kebaya */}
                    <div className="mb-12 md:w-1/2 p-4 rounded-lg shadow-lg bg-white md:bg-transparent md:rounded-none md:shadow-none dark:bg-wir md:dark:bg-transparent">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={'/kebaya - app.png'} alt="" className="w-full object-cover" />
                        </div>
                        <h3 className="font-semibold text-wir text-xl mt-5 mb-3 dark:text-white">Ketemu Baru Bayar</h3>
                        <p className="font-medium text-base text-sir">Aplikasi ini adalah aplikasi marketplace dengan basis mobile. Aplikasi ini sudah menggunakan API. Aplikasi ini saya buat untuk uji kompetensi.</p>
                    </div>

                    {/* e-report */}
                    <div className="mb-12 md:w-1/2 p-4 rounded-lg shadow-lg bg-white md:bg-transparent md:rounded-none md:shadow-none dark:bg-wir md:dark:bg-transparent">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={'/e-report.png'} alt="" className="w-full object-cover" />
                        </div>
                        <h3 className="font-semibold text-wir text-xl mt-5 mb-3 dark:text-white">E-REPORT</h3>
                        <p className="font-medium text-base text-sir">Aplikasi ini adalah aplikasi untuk mengelola data rapot siswa, aplikasi ini berbasis dekstop. Aplikasi ini saya buat untuk ujian akhir semester.</p>
                    </div>

                    {/* portofolio saat sekolah */}
                    <div className="mb-12 md:w-1/2 p-4 rounded-lg shadow-lg bg-white md:bg-transparent md:rounded-none md:shadow-none dark:bg-wir md:dark:bg-transparent">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={'/porto - dinamis.png'} alt="" className="w-full object-cover" />
                        </div>
                        <h3 className="font-semibold text-wir text-xl mt-5 mb-3 dark:text-white">Web Portofolio Dinamis</h3>
                        <p className="font-medium text-base text-sir">Web portofolio ini adalah portofolio yang saya buat dengan dinamis, web ini adalah tugas saat saya sekolah.</p>
                    </div>

                    {/* portofolio belajar */}
                    <div className="mb-12 md:w-1/2 p-4 rounded-lg shadow-lg bg-white md:bg-transparent md:rounded-none md:shadow-none dark:bg-wir md:dark:bg-transparent">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={'/porto - app.png'} alt="" className="w-full object-cover" />
                        </div>
                        <h3 className="font-semibold text-wir text-xl mt-5 mb-3 dark:text-white">Portofolio NextJS</h3>
                        <p className="font-medium text-base text-sir">Web portofolio ini adalah portofolio yang saya buat untuk belajar framework NextJS.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portofolio;
