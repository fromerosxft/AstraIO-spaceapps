import React from 'react'

import Planet from '../components/Planet.jsx'

function Game() {
  return (
    <main className='w-full bg-slate-400 flex justify-center'>
        <div className="container w-2/3 p-4 m-4 border-4 border-neutral rounded-xl h-96 bg-neutral">
            <Planet/>
        </div>
    </main>
  )
}

export default Game