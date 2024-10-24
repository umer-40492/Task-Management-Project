import React, { useEffect } from 'react'
import Cards from '../components/Cards.jsx'
import { IoMdAddCircle } from "react-icons/io";
import InputData from '../components/homePage/InputData.jsx';
import { useState } from 'react';
import axios from 'axios';

const AllTask = () => {
  const [data , setData] = useState();
  const [updateData , setUpdatedData] = useState({id: "", title: "", descp: ""});
  const [closeBtn , setcloseBtn]= useState('hidden');
  const headers = {id:localStorage.getItem("id"), authorization :`Bearer ${localStorage.getItem("token")}`};
  useEffect(()=> {
      const fetch = async()=>{
          const response = await axios.get('http://localhost:4000/api/v2/get-all-task',{headers});
          setData(response.data.data)
      };
      if(localStorage.getItem("id") && localStorage.getItem("token"))
    {
        fetch();
    }
    });
 
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
      {data && <Cards home={'true'}  setcloseBtn={setcloseBtn} data = {data.tasks} setUpdatedData={setUpdatedData}/>}
    </div>
    <InputData  closeBtn={closeBtn} setcloseBtn={setcloseBtn} updateData={updateData} setUpdatedData={setUpdatedData} />
    </>
  )
}

export default AllTask