import React from 'react'
import Cards from '../components/Cards.jsx'
import { IoMdAddCircle } from "react-icons/io";
import InputData from '../components/homePage/InputData.jsx';
import { useState } from 'react';

const AllTask = () => {
  const [closeBtn , setcloseBtn]= useState('hidden')
  return (
    <>
    <div>
      <div className='w-full flex justify-end py-2 px-4'>
           <button onClick={()=>{
            setcloseBtn('fixed')
           }}>
           <IoMdAddCircle className="text-4xl text-gray-300 hover:text-gray-100 transition-all duration-300"/>
           </button>
      </div>
      <Cards home={'true'}  setcloseBtn={setcloseBtn}/>
    </div>
    <InputData  closeBtn={closeBtn} setcloseBtn={setcloseBtn} />
    </>
  )
}

export default AllTask