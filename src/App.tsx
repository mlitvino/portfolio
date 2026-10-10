import { useState } from 'react'

import reactLogo from '@/assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <img src={reactLogo} className="logo" alt="React logo" />
      <h1>Portfolio</h1>
      <p>Test component: if you can see this, React, Vite and TypeScript are working.</p>
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </main>
  )
}

export default App
