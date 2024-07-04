import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";
import Hero from "./components/hero";
import Portofolio from "./components/portofolio";
import Clients from "./components/clients";
import Blog from "./components/blog";
import Contact from "./components/contact";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portofolio />
      <Clients />
      <Blog />
      <Contact />

      <a href="#home" className="hidden h-14 w-14 justify-center items-center bg-primary rounded-full fixed z-[9999] bottom-4 right-4 p-4 hover:animate-pulse" id="to-top">
            <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
      </a>
    </div>
  );
}
