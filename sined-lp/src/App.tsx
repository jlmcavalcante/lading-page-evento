import { useRef } from 'react'
import './App.scss'
import Form from './app/pages/Form'
import { Button } from "flowbite-react";
import './index.scss'

function App() {
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
        <div className='center'>
          <div className='menu'>
            <div className="logo">
              <img src="/open-book-w.png" alt="" width={40}/>
              <h3>SINED</h3>
            </div>
            <div className='item-menu'>
              <a href="#">Login</a>
            </div>
          </div>
        </div>

        <div className="uppercase mt-16 flex flex-col gap-4 text-center text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
          <span>
            Simpósio Nacional
          </span>
          <span>
            de Educação
          </span>
        </div>
        <div className='w-full my-8 flex flex-row items-center justify-center'>
          <Button size="lg" gradientDuoTone="greenToBlue" className='shadow-md' onClick={scrollToSection}>
            <span className='text-xl'>
              Realizar Inscrição   
            </span>
          </Button>
        </div>
      </div>

      <section>
        <div className="center">
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

export default App
