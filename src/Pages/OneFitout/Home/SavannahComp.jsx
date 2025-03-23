import React, { useEffect, useState } from 'react'
import './css/SavannahComp.css'


export default function SavannahComp({id}) {

    const [mobiletoggle, setmobiletoggle] = useState(false)

    useEffect(()=>{
        
        if(document.documentElement.clientWidth <= 440){
            setmobiletoggle(true)
            const section = document.getElementById('section')
            Array.from(section.children).forEach((child)=>{
                child.style.display='none'
            })
        }
    },[])

    useEffect(()=>{
        console.log(mobiletoggle)
        console.log(window.innerWidth)
    },[mobiletoggle])
    

    const featured = 'kitchen'
    const category = 'renovation'
    const type = 'kitchens'
    const place = 'Savannah' 
    const address = 'Emirates Hills, Dubai'
    const imgSrc = '/assets/savannah.jpeg'

  return (
    <>
        <div className={id}>
        <div id='savannah-overlay-flex'>
        <div id='savannah-overlay'>
            <div id='heading'>
                <p id='heading-title'>
                    We deliver <span id='title-bold-part'>highest quality finishes</span> on all our products
                </p>
            </div>
            <div id='section'>
                {
                    mobiletoggle && (
                        <div id='mobile-column'>
                            <p id='featured'>Featured {featured} Design</p>
                            <img id='savannah-img' src={imgSrc}/>
                            <p id='detail'>
                                <p id='feature-detail'>
                                    <span id='feature-category'>{category}</span>
                                    <span id='feature-type'>{type}</span>
                                </p>
                                <p id='feature-title'>{place},<br/>{address}</p>
                                <button id='detail-button'>Explore</button>
                            </p>

                        </div>
                    )
                }

                <div id='column-left'>
                    <p id='featured'>Featured {featured} Design</p>
                    <p id='detail'>
                        <p id='feature-detail'>
                            <span id='feature-category'>{category}</span>
                            <span id='feature-type'>{type}</span>
                        </p>
                        <p id='feature-title'>{place},<br/>{address}</p>
                        <button id='detail-button'>Explore</button>
                    </p>
                    
                    

                </div>
                <img id='savannah-img' src={imgSrc}/>
            </div>

        </div>
        </div>
        </div>
    </>
  )
}
