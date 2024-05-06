import { Button } from "flowbite-react";
import { useRef } from 'react';
import Form from '../form/Form';
import '../../../index.css';
import './Page.scss'

export default function Page() {
  const sectionRef = useRef<HTMLElement>(null);

  // Função para realizar o scroll até a seção
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='app'>
      <div className='main'>
        <div className='content-container'>
          <div className='menu'>
            <div className="logo">
              <img src="/logo-sined-removebg-white.png" alt="logo_sined" width={120}/>
            </div>
            <div className='item-menu'>
            </div>
          </div>
        </div>

        <div className="uppercase mt-16 flex flex-col gap-4 text-center text-3xl font-bold tracking-tight text-white-900 sm:text-5xl">
          <span>
            VI Simpósio Nacional
          </span>
          <span>
            de Educação
          </span>
        </div>
        <div className='w-full my-8 flex flex-row items-center justify-center'>
          <Button size="lg" gradientDuoTone="greenToBlue" className='shadow-md' onClick={scrollToSection}>
            <span className='text-1xl'>
              Realizar Inscrição   
            </span>
          </Button>
        </div>
      </div>

      <section>
        <div className="content-container">
          <div className='content-card'>
            <h3>Título de chamada</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus tincidunt sollicitudin leo nec bibendum. 
              Vivamus suscipit augue sit amet mauris dignissim, ut mattis 
              lacus consequat.
            </p>
          </div>
          <div className='content-card'>
            <h3>Título de chamada</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus tincidunt sollicitudin leo nec bibendum. 
              Vivamus suscipit augue sit amet mauris dignissim, ut mattis 
              lacus consequat.
            </p>
          </div>
          <div className='content-card'>
            <h3>Título de chamada</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus tincidunt sollicitudin leo nec bibendum. 
              Vivamus suscipit augue sit amet mauris dignissim, ut mattis 
              lacus consequat.
            </p>
          </div>
          <div className='content-card'>
            <h3>Título de chamada</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus tincidunt sollicitudin leo nec bibendum. 
              Vivamus suscipit augue sit amet mauris dignissim, ut mattis 
              lacus consequat.
            </p>
          </div>
        </div>
      </section>
      <section ref={sectionRef}>
          <Form />
      </section>
    </div>
  )
}
