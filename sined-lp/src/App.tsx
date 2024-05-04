import { useState } from 'react'
import './App.scss'
import Form from './app/pages/Form'

function App() {
  const [count, setCount] = useState(0)

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

        <div className="title">
          <span>
            Simpósio Nacional
          </span>
          <span>
            de Educação
          </span>
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
      <section>
          <Form />
      </section>
    </div>
  )
}

export default App
