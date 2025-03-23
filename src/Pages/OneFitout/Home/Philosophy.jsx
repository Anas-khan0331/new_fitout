import React, { useEffect, useState } from 'react'
import './css/Philosophy.css'

export default function Philosophy({id}) {
    const imgSrc = '/assets/philosophy.jpeg'

    const [mobiletoggle, setmobiletoggle] = useState(false)

    useEffect(()=>{

        if(document.documentElement.clientWidth<=440){
            setmobiletoggle(true)
            const philInner = document.getElementById('phil-inner')
            Array.from(philInner.children).forEach((child)=>{
                child.style.display='none'
            })
        }

    },[])


  return (
    <>
        <div className={id}>
        <div id='phil-overlay-flex'>
        <div id='phil-overlay'>
            <div id='phil-inner'>
                {
                    mobiletoggle &&(
                        <div id='mobile-column'>
                            <img id='phil-image' src={imgSrc} />

                            <h1 id='phil-title'>Philosophy</h1>
                            <span id='phil-para'>
                            <p id='phil-para1'>When we are designing a space for our client, we want to create something that they can continue to love and appreciate for many years to come.</p>
                            <br/>
                            <p id='phil-para2'>We don’t follow trends but focus instead on creating elegant and refined homes that can effortlessly transcend the latest design styles. </p>
                            </span>
                            <p><button id='phil-button'>Get in touch</button></p>

                        </div>
                    )
                }

                <div id='phil-left'>
                    <h1 id='phil-title'>Philosophy</h1>
                    <span id='phil-para'>
                    <p id='phil-para1'>When we are designing a space for our client, we want to create something that they can continue to love and <br/> appreciate for many years to come.</p>
                    <p id='phil-para2'>We don’t follow trends but focus instead on creating elegant and refined homes that can effortlessly transcend the latest design styles. </p>
                    </span>
                    <p><button id='phil-button'>Get in touch</button></p>

                </div>
                <img id='phil-image' src={imgSrc} />
            </div>
        </div>
        </div>
        </div>
    </>
  )
}
