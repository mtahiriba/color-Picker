import './App.css';
import React, {useState} from 'react';
import ButtonToggle from './Components/ButtonToggle';
import Text from './Components/text'

function App() {
  const [text, setText] = useState(null)

  function handlerCallback(textData){
    setText(textData)
  }

  return (
    <div className='App'>
        <ButtonToggle parentCallback = {handlerCallback}/>
        <Text text={text}/>
    </div>
  );
}

export default App;
