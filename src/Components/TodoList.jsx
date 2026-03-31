import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    if (input === "") {
      return;
    }
    const obj = {
      id: Date.now(),
      value: input,
      completed: false
    };
    setData((prev) => [...prev, obj]);
    setInput("");
  };
  
  const handleCheck=(id)=>{
       const update = data.map((item)=>
        item.id === id? {...item, completed: !item.completed }:item
    )
    setData(update)
  }

  return (
    <div className="">
      <div className=" flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border bg-gray-200 px-4 rounded-full py-1"
          placeholder="write your text here..."
        />
        <button
          onClick={handleAdd}
          className="rounded-full bg-gray-200 text-black font-bold px-4 py-1"
        >
          Add
        </button>
      </div>
      <div className="mt-5">
        {data.map((value) => (
          <div key={value} className="flex items-center gap-2">
            <input checked={value.completed} onChange={()=>handleCheck(value.id)} className="cursor-pointer h-4 w-4" type="checkbox" />
            <p className={`font-bold text-xl ${value.completed? "line-through text-gray-700" : "text-gray-800"}`}>{value.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
