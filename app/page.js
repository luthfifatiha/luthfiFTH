import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";
import Hero from "./components/hero";
import Portofolio from "./components/portofolio";
import Clients from "./components/clients";
import Blog from "./components/blog";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portofolio />
      <Clients />
      <Blog />
    </div>
  );
}
