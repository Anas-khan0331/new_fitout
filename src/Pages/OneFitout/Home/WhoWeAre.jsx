import { useState, useEffect } from 'react'
import React from 'react'
import './css/WhoWeAre.css'

export default function WhoWeAre({id}) {

    const [mobiletoggle, setmobiletoggle] = useState(false)

    useEffect(()=>{
        if (document.documentElement.clientWidth<=440){
            setmobiletoggle(true)
            const wwrInner = document.getElementById('whoweare-inner')
            Array.from(wwrInner.children).forEach((child)=>{
                child.style.display='none'
            })
        }
    },[])
    
  return (
    <>
        <div className={id}>
        <div id='whoweare-overlay-flex'>
        <div id='whoweare-overlay'>
            <div id='whoweare-inner'>
                {
                    mobiletoggle &&(
                        <div id='mobile-column'>
                            <p id='wwr-title'>who we are</p>
                            <p id='wwr-tagline'>
                                We are a Dubai based family run, British company dedicated to delivering <span id='wwr-bold-text'>high quality</span> finishes on all our fit out projects.
                            </p>
                            <p id='wwr-detail'>Our expert team are on hand to answer any questions about our fit out services in Dubai</p>
                            <button id='wwr-tagline-button'>Get to know us</button>

                        </div>
                    )
                }
                <div id='wwr-inner-left'>
                    <p id='wwr-title'>who we are</p>
                    <p id='wwr-detail'>Our expert team are on hand to answer any questions<br/> about our fit out services in Dubai</p>
                </div>
                <div id='wwr-inner-right'>
                    <p id='wwr-tagline'>
                    We are a Dubai based family run, British company dedicated to delivering <span id='wwr-bold-text'>high quality</span> finishes on all our fit out projects.
                    </p>
                    <p>
                    <button id='wwr-tagline-button'>Get to know us</button>
                    </p>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}
