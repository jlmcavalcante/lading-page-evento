import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header className='header-container'>
        <div className='logo-container'>
          <img src="/open-book.png" alt="logo_livro" width={40}/>
          <span className='logo-text'>SINED</span>
        </div>
      </header>
    </main>
  )
}

export default App
