import React from 'react'
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

function InputData({closeBtn, setcloseBtn}) {
  return (
    <>
   <div className={`${closeBtn} top-0 left-0 bg-gray-700 opacity-50 h-screen w-full` }>
    
    </div>
    <div className={`${closeBtn} top-0 left-0 flex justify-center items-center  h-screen w-full`}>
    <div className='w-2/6 bg-gray-900 p-4 rounded-xl'> 
    <div className='flex justify-end py-3'>
        <button onClick={()=>setcloseBtn('hidden')}>
    <RxCross1 className='text-xl' />
        </button>
    </div>
    <input type="text" placeholder='title' name='title' className='
    py-2 px-3 rounded w-full bg-gray-700' />
    <textarea placeholder='description' name='desc' cols={10} rows={10} className='
    py-2 px-3 rounded w-full my-3 bg-gray-600' id=""></textarea>
    <button type='submit' className='flex m-auto font-semibold px-3 py-2 bg-blue-400 rounded text-xl text-black'>Submit</button>
    </div>
    </div>
   </>
  )
}

export default InputData