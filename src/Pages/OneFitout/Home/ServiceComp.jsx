import React from 'react'
import { useState, useEffect } from 'react'
import './css/ServiceComp.css'

async function getResource(resource){
    let returned = []
    try {

        const res = await fetch(`${resource}`)
        if(!res.ok){
            throw new Error(`response error: ${res.status}`)
        }
        returned = await res.json()
        return returned
        
    } catch (error) {
        console.error(`Error in fetching: ${error}`)
        return []
    }
    
}

export default function ServiceComp({id,title, resource}) {

    const [content, setContent] = useState([])
    const [mobiletoggle, setmobiletoggle] = useState(false)

    useEffect(()=>{
        if(document.documentElement.clientWidth<=440){
            setmobiletoggle(true)
            const servInner = document.getElementById('service-inner')
            Array.from(servInner.children).forEach((item)=>{
                item.style.display='none'
            })
        }
    },[])

    useEffect(()=>{
        async function refreshContent(){
            const content = await getResource(resource)
            setContent(content)
        }

        refreshContent()
        
    },[resource])


  return (
    <>
        <div className={id}>
        <div id='service-overlay-flex'>
        <div id='service-overlay'>
            <div id='service-inner'>
                {
                    mobiletoggle &&(
                        <div id='mobile-column'>
                            <div id='service-title-row'>
                                <h1 id='service-title-row-title'>{title}</h1>
                            </div>
                            <div id='service-content'>
                                {
                                    content.map((item, index)=>{
                                        return <div key={index} id='service-content-card'>
                                            <img id='service-image' src={item.image} alt="Service" width="480" height="320" />
                                            <p id='service-title'>{item.title}</p>
                                            <p id='service-description'>{item.description}</p>
                                        </div>
                                    })
                                }
                            </div>
                            <button id='service-title-button'>Explore All</button>
                            
                        </div>
                    )
                }
                <div id='service-title-row'>
                    <h1 id='service-title-row-title'>{title}</h1>
                    <button id='service-title-button'>Explore All</button>
                </div>
                <div id='service-content'>
                    {
                        content.map((item, index)=>{
                            return <div key={index} id='service-content-card'>
                                <img id='service-image' src={item.image} alt="Service" width="480" height="320" />
                                <p id='service-title'>{item.title}</p>
                                <p id='service-description'>{item.description}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        </div>
        </div>
    
    </>
  )
}
