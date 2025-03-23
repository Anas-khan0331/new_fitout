import React from 'react'
import './css/GetInTouch.css'

export default function GetInTouch({id}) {
  return (
    <>
        <div className={id}>
        <div id='git-overlay-flex'>
        <div id='git-overlay'>
            <div id='git-inner'>
            <p id='git-caption'>Feel Like We Could Be A Good Match For Your <span>Fit Out</span> Project In Dubai?</p>
            <p><button id='git-button'>Get in Touch</button></p>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}
