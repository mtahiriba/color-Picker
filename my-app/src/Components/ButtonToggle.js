import React from 'react'
export default function ButtonToggle(props) {
  
    var about = "About Us"
    var info = "Information"

    function AboutClick(){
        props.parentCallback(about)
    }

    function InformationClick(){
        props.parentCallback(info)
    }

    return (
    <div>
        <button onClick={AboutClick}>{about}</button>
        <br></br><br></br>
        <button onClick={InformationClick}>{info}</button>
        <br></br><br></br>
    </div>
  )
}
