import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Services } from "../../components/Services";
import { Doctors } from "../../components/Doctors";
import { Promo } from "../../components/Promo";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="pt-16">
        <About />
        <Services />
        <Doctors />
        <Promo />
      </div>
    </div>
  );
}
