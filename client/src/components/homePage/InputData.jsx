import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

function InputData({ closeBtn, setcloseBtn,updateData,setUpdatedData }) {
  const [data, setData] = useState({ title: "", descp: "" });
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submitTask = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/v2/create-task", data, {
      headers,
    });
    setData({ title: "", descp: "" });
    setcloseBtn('hidden')
  };
  const updateTask = async()=>{
    await axios.put(`http://localhost:4000/api/v2//update-task/${updateData.id}`, data, {
      headers,
    });
    setUpdatedData({id: "", title: "", descp: ""});
    setData({ title: "", descp: "" });
    setcloseBtn('hidden')
  }
  useEffect(()=>{
    setData({title: updateData.title, descp: updateData.descp})
  }, [updateData])

  return (
    <>
      <div
        className={`${closeBtn} top-0 left-0 bg-gray-700 opacity-50 h-screen w-full`}
      ></div>
      <div
        className={`${closeBtn} top-0 left-0 flex justify-center items-center  h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4 rounded-xl">
          <div className="flex justify-end py-3">
            <button onClick={() =>{ setcloseBtn("hidden");
            setData({title: "", descp: ""});
              setUpdatedData({id: "", title: "", descp: ""});
            }}>
              <RxCross1 className="text-xl" />
            </button>
          </div>
          <form onSubmit={()=>{
            if(updateData.id === ''){
              submitTask();
            }else {
              updateTask();
            }
          }}>
            <input
              type="text"
              placeholder="title"
              required
              name="title"
              className="
    py-2 px-3 rounded w-full bg-gray-700"
              value={data.title}
              onChange={change}
            />
            <textarea
              placeholder="description"
              required
              onChange={change}
              value={data.descp}
              name="descp"
              cols={10}
              rows={10}
              className="
    py-2 px-3 rounded w-full my-3 bg-gray-600"
              id=""
            ></textarea>
            <button
              type="submit"
              className="flex m-auto font-semibold px-3 py-2 bg-blue-400 rounded text-xl text-black"
            >
              {updateData.id === '' ? 'Submit': "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default InputData;
