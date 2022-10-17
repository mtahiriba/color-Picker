import React, {useState} from 'react'
import Text from './text'
export default function ButtonToggle() {
  
    const[text, setText] = useState(null)
  
    function AboutClick(){
        setText('About Us')
    }

    function InformationClick(){
        setText('Information')
    }

    return (
    <div>
        <button onClick={AboutClick}>About Us</button>
        <br></br><br></br>
        <button onClick={InformationClick}>Information</button>
        <br></br><br></br>
    </div>
  )
}
