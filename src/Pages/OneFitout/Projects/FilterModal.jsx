import React, { useEffect } from 'react'
import './css/FilterModal.css'

export default function FilterModal({IsModal,setIsModal, children }) {

    useEffect(()=>{
        if(IsModal){
            document.body.style.overflow = 'hidden'
        }

        return(()=>{
            document.body.style.overflow = 'unset'
        })

    },[IsModal])

    const closeModal = ()=>{
        setIsModal(false)
    }

  return (
    <>
        <div id='modal-outer'>
            <div id='modal-inner'>
                <div id='modal-titlebar'>
                    <h2 id='modal-title'>Filters</h2>
                    <img id='modal-close' onClick={closeModal} src='/assets/filter-close.png' width='14px' height='14px' />
                </div>
                <div id='modal-area-selection'>
                    {children}
                </div>
            </div>
        </div>
    </>
  )
}
