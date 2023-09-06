import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ChevronUp, ChevronsUp, RotateCcw, Hash, ChevronDown, ChevronsDown } from 'react-feather';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <div className="card">
        <p>
          Current value:
        </p>
        <button className='counter' onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
        
      </div>
        <button className="count-btn" onClick={() => setCount((count) => count + 1)}>
          <ChevronUp />
        </button>  
        
        <button className="count-btn" onClick={() => setCount((count) => count + 10)}>
          <ChevronsUp/>
        </button>  
        
        <button className="count-btn" onClick={() => setCount((count) => count =0)}>
          <RotateCcw/>
        </button>  
        
        <button className="count-btn" onClick={() => setCount((count) => count = Math.floor((Math.random() * 100)+1))}>
          <Hash/>
        </button>  
        
        
        <button className="count-btn" onClick={() => setCount((count) => count - 10)}>
          <ChevronsDown/>
        </button>  
        
        <button className="count-btn" onClick={() => setCount((count) => count - 1)}>
          <ChevronDown/>
        </button>
      </div>
    </>
  )
}

export default App
