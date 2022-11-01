import React from 'react'
import logo from '../../images/logo.png'
export default function Footer() {
  return (
   <div className="w-full flex md:justify-center items-center flex-col p-4 gradient-bg-footer ">
     <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
       <div className="">
         <img src={logo}   alt="logo" className={'w-32'}/>
       </div>
     </div>
   </div>
  )
}
