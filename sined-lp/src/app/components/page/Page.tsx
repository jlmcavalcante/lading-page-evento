import About from "../About";
import Hero from "../Hero";
import Gamefication from "../Gamefication";
import Schedule from "../Schedule";
import '../../../index.css';
import { customCarouselTheme } from '../../flowbite-themes/CarouselTheme';
import Form from '../form/Form';
import './Page.scss';


export default function Page() {
  return (
    <div className="app">
      
      <section>
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section className="bg-[#3c06a4]">
        <Schedule />
      </section>

      <section>
        <Form />
      </section>

    </div>
  );
}
