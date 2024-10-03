import React from "react";

import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";

const Cards = ({home, setcloseBtn}) => {
  const cardData = [
    {
      title: "card1",
      ddescription: "test",
      status: 'In complete'
    },
    {
      title: "card2",
      ddescription: "test",
      status: 'Complete'
    },
    {
      title: "card3",
      ddescription: "test",
      status: 'In complete'
    },
    {
      title: "card4",
      ddescription: "test",
      status: 'Complete'
    },
    {
      title: "card5",
      ddescription: "test",
      status: 'Incomplete'
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {cardData.map((data, i) => (
        <div className="flex flex-col justify-between bg-gray-800 rounded-xl p-4">
          <div>
            <h3 className="text-xl font-semibold">{data.title}</h3>
            <p className="my-2">{data.ddescription}</p>
          </div>
          <div className="w-full mt-4 flex items-center">
            <button className={`${data.status === 'In complete' ? 'bg-red-500' : 'bg-green-800'} rounded-sm p-2 w-3/6`}>
           {data.status}
            </button>
            <div className="text-white flex w-3/6 text-2xl font-semibold justify-around p-2">
              <button>
                {" "}
                <CiHeart />
              </button>
              <button>
                {" "}
                <FaEdit />
              </button>
              <button>
                {" "}
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
