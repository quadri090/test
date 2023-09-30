import React from 'react'
import ReactDom from 'react-dom'

export default function LoginModal( {open, children} ) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[1000]'></div>
        <div className='sm:w-[600px] lg:w-[809px] fixed top-auto sm:top-[20px] left-[20px] sm:left-[100px] right-[20px] sm:right-[100px] z-[1000] bg-[#fff] rounded-[30px]'>
            {children}
        </div>
    </>,
    document.getElementById('portal')
  )
}