import React from "react";

import { CiHeart } from "react-icons/ci";
import { FaEdit, FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import axios from "axios";

const Cards = ({home, setcloseBtn, data,setUpdatedData}) => {
  const headers = {id:localStorage.getItem("id"), authorization :`Bearer ${localStorage.getItem("token")}`};
  const handleCompletetask = async (id) =>{
    try {
      const response = await axios.put(`http://localhost:4000/api/v2/complete-task/${id}`,
        {},
        {headers})
        
        alert(response.data.message);
    } catch (error) {
      
    }
  }
  const handleImportanttask = async (id) =>{
    try {
      const response = await axios.put(`http://localhost:4000/api/v2/important-task/${id}`,
        {},
        {headers})
        alert(response.data.message);
    } catch (error) {
      
    }
  }
  const handleUpdate = (id, title, descp) =>{
    setcloseBtn('fixed');
    setUpdatedData({id:id, title : title, descp: descp})
    
  };
  const deletetask = async (id) =>{
    try {
      await axios.delete(`http://localhost:4000/api/v2/delete-task/${id}`,
        {headers})
    } catch (error) {
      
    }
  }
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data && data.map((data, i) => (
        <div className="flex flex-col justify-between bg-gray-800 rounded-xl p-4">
          <div>
            <h3 className="text-xl font-semibold">{data.title}</h3>
            <p className="my-2">{data.descp}</p>
          </div>
          <div className="w-full mt-4 flex items-center">
            <button onClick={()=>handleCompletetask(data._id)} className={`${data.complete === false ? 'bg-red-500' : 'bg-green-800'} rounded-sm p-2 w-3/6`}>
           {data.complete === true ? "Completed" : 'In Completed'}
            </button>
            <div className="text-white flex w-3/6 text-2xl font-semibold justify-around p-2">
              <button onClick={()=>
                handleImportanttask(data._id)}>
                  {data.important === false ? ( <CiHeart /> ):  (<FaHeart className="text-red-500"/>)}
              </button>
              {home !== 'false' && (
              <button onClick={()=>handleUpdate(data._id, data.title, data.descp)}>
                <FaEdit />
              </button>
              )}
              <button onClick={()=>deletetask(data._id)}>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
      {home === 'true' &&  (
      <button onClick={()=>{
        setcloseBtn('fixed')
       }} className="flex text-gray-300 flex-col justify-center items-center bg-gray-500 rounded-xl p-4 hover:scale-105 hover:cursor-pointer
      transition-all duration-300">
      <IoMdAddCircle className="text-5xl"/>
        <h2 className="text-2xl mt-4">Add Tasks</h2>
      </button>)
      }
      {/* Cards */}
    </div>
  );
};

export default Cards;
