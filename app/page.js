import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";
import Hero from "./components/hero";
import Portofolio from "./components/portofolio";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portofolio />
    </div>
  );
}
