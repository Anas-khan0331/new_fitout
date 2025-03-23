import React, { useMemo, useRef } from 'react'
import { useState, useEffect } from 'react'
import './css/KitchensGrid.css'
import Popup from './Popup'
import useFetch from '../../../Components/useFetch'



const arrayPopups = [
    {
        image:"/assets/popup-default.png",
        heading:"Elington",
        text:"White Marble Counter Top"
    },
    {
        image:"/assets/popup-default.png",
        heading:"Elington",
        text:"White Marble Counter Top"
    },
    {
        image:"/assets/popup-default.png",
        heading:"Elington",
        text:"White Marble Counter Top"
    },
    {
        image:"/assets/popup-default.png",
        heading:"Elington",
        text:"White Marble Counter Top"
    }
]


export default function KitchensGrid({id ,type='all types', area='all areas', community='all communities', setTotal=()=>{}, providedContent=[]}) {

    const itemsPerPage = 9;
    const prevPage = useRef(null); // prev values of current page to track page movement
    const prevDisplayedItems = useRef(null); // total sum for prev button stack


    const [Type, setType] = useState('')
    const [Area, setArea] = useState('')
    const [Community, setCommunity] = useState('')
    const [CurrentPage, setCurrentPage] = useState(1)
    const [TotalItems, setTotalItems] = useState(0)

    const [content, setContent] = useState([])

    useEffect(()=>{
        if(providedContent.length>0 && Array.isArray(providedContent)){
            setContent(providedContent)
        }
    },[providedContent])

    useEffect(()=>{
        setType(type)
        setArea(area)
        setCommunity(community)
    },[type, area, community])


    const pageNext = () => {
        setCurrentPage((prev)=>{
            prevPage.current = prev
            return prev + 1
        })
    }

    const pageBack = () =>{
        if (CurrentPage != 1){
            setCurrentPage((prev)=>{
                prevPage.current = prev
                return prev - 1
            })
        }
    }

    const filtered = content.filter((item)=>{
        return (
            (Type === 'all types' || item.type === Type) &&
            (Area === 'all areas' || item.area === Area) &&
            (Community === 'all communities' || item.community.toLowerCase().includes(Community.toLowerCase()) == true)
        );
    })

    useEffect(()=>{
        setTotalItems(filtered.length)
    },[filtered]);

    const sliced = useMemo(() => {
        const start = (CurrentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filtered.slice(start, end);
    }, [CurrentPage, filtered]); // useMemo so that sliced is recalculated when the things in the array change

    const [DisplayedItems, setDisplayedItems] = useState(0)
    const [Stack, setStack] = useState([])

    useEffect(()=>{
       setDisplayedItems((previous)=>{
        if(prevPage.current < CurrentPage){
            let slice = sliced.length
            prevDisplayedItems.current = previous+slice
            setStack((prev)=>[...prev,slice])
            return prevDisplayedItems.current
        }
        if (prevPage.current > CurrentPage){
            let popped = 0

            let newStack =[...Stack]
            popped = newStack.pop()

            prevDisplayedItems.current-=popped

            setStack((prev)=>{
                const newStack = [...prev]
                newStack.pop()
                return newStack
            })

            return prevDisplayedItems.current
        }
        
       })
    },[CurrentPage])

    useEffect(()=>{
        setDisplayedItems(()=>{
            prevDisplayedItems.current = sliced.length
            prevPage.current = 0
            return sliced.length
        })
    },[filtered.length])


    // useEffect(()=>{
    //     console.log('stack: ',Stack, 'prevD',prevDisplayedItems.current,'Displayed',DisplayedItems)
    // },[Stack, prevDisplayedItems, DisplayedItems])

    const isDisabled = DisplayedItems == TotalItems

    function sliceString(str){
        const comma = str.indexOf(',')
        const slice = str.slice(0,comma+1)
        return slice
    }

    function remainingString(str){
        const comma = str.indexOf(',')
        const slice = str.slice(comma+1)
        return slice
    }

    useEffect(()=>{
        setTotal(TotalItems)
    },[filtered])

  return (
    <>
        <div className={id}>
        <div id='kitchengrid-outer'>
            <div id='kitchengrid-inner'>
                <div id='kitchengrid-content'>
                    
                    {
                        sliced.map((item, index)=>{
                            return <div key={index} id= {'item'+index} className='kitchengrid-card'>
                                <img id={'kitchengrid-image-'+index} src={item.image} alt="kitchen" width='484px' height='320' />
                                { item.serial ==='006' && sliced[5] &&(
                                    arrayPopups.map((item,index)=>{
                                        return <div key={index} id={'popup-6-'+index} className='popups' > <Popup img={item.image} heading={item.heading} text={item.text} id='kitchen-popup' /> </div>
                                    })
                                        
                                )}
                                <p id='kitchengrid-section'>
                                    <span id='kitchengrid-type'>{item.type}</span>
                                    <span id='kitchengrid-area'>{item.area}</span>
                                </p>
                                <p className='kitchengrid-community'>{sliceString(item.community)}</p>
                                <p className='kitchengrid-community'>{remainingString(item.community)}</p>
                            </div>
                        })
                    
                    }


                </div>
            </div>
            <div id='kitchengrid-buttons'>
                <div id='kitchengrid-button-prev'>
                    <button onClick={pageBack} disabled={CurrentPage===1} className={CurrentPage===1?'disabled':''} >Previous</button>
                </div>
                <div id='kitchengrid-button-next'> 
                    <span>Viewing {DisplayedItems} of {TotalItems}</span> 
                    <button onClick={pageNext} disabled={isDisabled} className={isDisabled?'disabled':''} >Next</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
