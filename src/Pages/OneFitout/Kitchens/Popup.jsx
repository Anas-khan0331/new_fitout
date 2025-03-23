import React, { useState } from 'react'
import './css/Popup.css'

export default function Popup({id, img='/assets/popup-default.png', heading='Elington', text='White Marble Counter Top'}) {
    const [Toggle, setToggle] = useState(false)

  return (
    <>
        <div id={id}>
        <div id='popup-outer'>
            <div id='popup-inner'>
                <div id='popup-button top' onClick={()=>{setToggle((prev)=> !prev)}} className={Toggle ? 'active':''} >
                <button id='popup-button'>
                    <div id='popup-button-inner'></div>
                </button>
                </div>
                {
                    Toggle && (
                        <div id='popup-main'>
                            <img id='popup-img' src={img} />
                            <p id='popup-section'>
                            <span id='popup-heading'>{heading}</span>
                            <span id='popup-text'>{text}</span>
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    </>
  )
}
