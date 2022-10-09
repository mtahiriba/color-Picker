import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'


export default function SketchExample1() {
    
    const[displayColorPicker, setDispalyColorPicker] = useState(false)
    const[color, setColor] = useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      })

    function handleClick() {
        setDispalyColorPicker(!displayColorPicker)
    }

    function handleChange(color){
        setColor({  r: color.rgb.r,
                    g: color.rgb.g,
                    b: color.rgb.b,
                    a: color.rgb.a})
    }
    
    const styles = reactCSS({
        'default': {
          color: {
            width: '200px',
            height: '200px',
            borderRadius: '2px',
            background: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
            float: 'right'
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });

    return (
        <div>
        <div style={ styles.swatch }>
          <div style={ styles.color } />
        </div>
        <button onClick={handleClick}>Choose Color</button>
        { displayColorPicker ? <div style={ styles.popover }>
          <SketchPicker color={ color } onChange={handleChange} />
        </div> : null }
      </div>
  )
}
