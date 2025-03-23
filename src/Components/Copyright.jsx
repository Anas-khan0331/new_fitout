import React from 'react'
import './css/Copyright.css'

export default function Copyright({id}) {
  return (
    <>
        <div className={id}>
        <div id='copyright-overlay-flex'>
        <div id='copyright-overlay'>
            <div id='copyright-inner'>
                <div id='copyright-main'>
                    <p id='made-by'>Made by Maison Celadora</p>
                    <p id='copyright'>Copyright ©2006-2024 One Fitout. All Rights Reserved.</p>
                    <p id='license'>License No.26364456</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}
