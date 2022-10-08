import React from 'react'

function child(probs) {
  return (
    <div>
      <button onClick={() => probs.greetHandler('My_Child')}>Click</button>
    </div>
  )
}

export default child