import React from 'react'
import { useState, useEffect } from 'react'
import './css/SliderCompNew.css'
import { Link } from 'react-router-dom'

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

export default function SliderComp({id,title, resource}) {

    const [content, setContent] = useState([])
    const [mobiletoggle, setmobiletoggle] = useState(false)

    useEffect(()=>{

        if(document.documentElement.clientWidth <=440){
            setmobiletoggle(true)
            const sliderInner = document.getElementById('slider-inner')
            Array.from(sliderInner.children).forEach((child)=>{
                child.style.display='none'
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
        <div id='slider-overlay-flex'>
        <div id='slider-overlay'>
            <div id='slider-inner'>
                {
                    mobiletoggle &&(
                        <div id='mobile-column'>
                            <div id='slider-title-row'>
                                <h1 id='slider-title-row-title'>{title}</h1>
                            </div>

                            <div id='slider-content'>
                                {
                                    content.map((item, index)=>{
                                        return <div key={index} id='slider-content-card'>
                                            <img id='slider-image' src={item.image} alt="Slide" width="480" height="320" />
                                            <p id='slider-section'>
                                                <span id='slider-category'>{item.category}</span>
                                                <span id='slider-date'>{item.date}</span>
                                            </p>
                                            <p id='slider-title'>{item.title}</p>
                                            <p id='slider-label'>{item.label}</p>
                                        </div>
                                    })
                                }
                            </div>
                            <button id='slider-title-button'><Link className='links' to='/blog'>Explore All</Link></button>

                        </div>
                        
                    )
                }
                <div id='slider-title-row'>
                    <h1 id='slider-title-row-title'>{title}</h1>
                    <button id='slider-title-button'><Link className='links' to='/blog'>Explore All</Link></button>
                </div>
                <div id='slider-content'>
                    {
                        content.map((item, index)=>{
                            return <div key={index} id='slider-content-card'>
                                <img id='slider-image' src={item.image} alt="Slide" width="480" height="320" />
                                <p id='slider-section'>
                                    <span id='slider-category'>{item.category}</span>
                                    <span id='slider-date'>{item.date}</span>
                                </p>
                                <p id='slider-title'>{item.title}</p>
                                <p id='slider-label'>{item.label}</p>
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
