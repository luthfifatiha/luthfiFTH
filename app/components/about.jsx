import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="pt-32 pb-32 dark:bg-wir">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-lg mb-3 lg:text-2xl">About Me</h4>
            <h2 className="font-bold text-wir text-3xl mb-4 max-w-md lg:text-4xl dark:text-white">Yuk, Kenalan Sama Saya</h2>
            <p className="font-medium text-base text-sir max-w-xl lg:text-lg">Hallo Guys, perkenalkan nama saya Luthfi biasa dipanggil Upi/Ufi, Saya mempunyai pacar, nama pacar saya adalah <a href="https://www.instagram.com/re_ni21/" target="_blank" class="hover:text-wir underline dark:hover:text-white">Reni Zayusman</a>. Saya mempunyai hobi, hobi saya adalah olah raga dan bermain game, game yang saya mainkan yaitu Valorant.</p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-bold text-wir text-3xl mb-4 lg:text-4xl lg:pt-11 dark:text-white">Follow Me</h3>
            <p className="font-medium text-base text-sir mb-6 lg:text-lg">Ikuti saya di twitter, instagram, threads, facebook & tiktok.<br /> Dengan mengikuti semua media sosial saya, kita bisa berteman secara online.</p>
            <div className="flex items-center">
                
                {/* twitter */}
                <a href="https://twitter.com/bujetibro?t=rN-Kil3Lu6YQp6ag45wcRg&s=08" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-sir border-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300">
                    <svg width="20" class="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>
                </a>

                {/* instagram */}
                <a href="https://www.instagram.com/luthfi.fth/" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-sir border-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300">
                    <svg width="20" class="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>

                {/* threads */}
                <a href="https://www.threads.net/@luthfi.fth" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-sir border-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300">
                    <svg width="20" class="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Threads</title><path d="M17.743 11.123a8.547 8.547 0 0 0-.315-.142c-.185-3.414-2.05-5.368-5.182-5.388h-.042c-1.874 0-3.431.8-4.39 2.255l1.722 1.181c.716-1.087 1.84-1.319 2.669-1.319h.028c1.031.007 1.81.307 2.313.892.367.425.612 1.014.733 1.756a13.176 13.176 0 0 0-2.96-.143c-2.977.172-4.892 1.908-4.763 4.321.065 1.224.675 2.277 1.717 2.965.88.582 2.015.866 3.195.802 1.557-.086 2.778-.68 3.63-1.766.648-.825 1.057-1.894 1.238-3.241.742.448 1.292 1.037 1.596 1.745.517 1.205.547 3.184-1.068 4.797-1.415 1.414-3.116 2.025-5.686 2.044-2.851-.02-5.008-.935-6.41-2.717-1.313-1.67-1.991-4.08-2.016-7.165.025-3.085.703-5.496 2.016-7.165 1.402-1.782 3.558-2.696 6.41-2.717 2.871.02 5.065.94 6.521 2.73.714.879 1.252 1.983 1.607 3.27l2.018-.538c-.43-1.585-1.107-2.95-2.027-4.083C18.43 1.2 15.7.024 12.185 0h-.014C8.66.024 5.963 1.205 4.15 3.51c-1.614 2.05-2.446 4.905-2.474 8.482v.016c.028 3.578.86 6.431 2.473 8.482 1.813 2.305 4.512 3.486 8.022 3.51h.014c3.12-.022 5.319-.839 7.13-2.649 2.371-2.368 2.3-5.336 1.518-7.158-.56-1.307-1.629-2.368-3.09-3.07zm-5.387 5.065c-1.305.074-2.66-.512-2.728-1.766-.05-.93.662-1.969 2.808-2.092.246-.015.487-.021.724-.021.78 0 1.508.075 2.171.22-.247 3.088-1.697 3.59-2.975 3.66z"/></svg>
                </a>

                {/* facebook */}
                <a href="https://www.facebook.com/luthfi.fatiha?mibextid=ZbWKwL" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-sir border-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300">
                    <svg width="20" class="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                {/* tiktok */}
                <a href="https://www.tiktok.com/@wanzayyyy?_t=8dxLfwYfnST&_r=1" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-sir border-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300">
                    <svg width="20" class="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
