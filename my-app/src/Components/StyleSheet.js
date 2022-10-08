import React from 'react'
import './styleSheet.css'

let secondary = {
    color: 'blue',
    fontSize: '100px'
}

function StyleSheet(probs) {
  let primary = probs.primary? 'primary': ''
    return (
    <div>
        <h1 className='error'>Inside Error</h1>
        <h2 className={`${primary} MT`}>Muhammad Tahir</h2>  {/* CSS styleSheets */}     
        <h2 style={secondary}>Ruzbihan Memon</h2>   {/* Inline Css */}
    </div>
  )
}

export default StyleSheet
