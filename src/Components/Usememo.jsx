import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [counter,setCounter]=useState(0);
    const [search,setSearch]=useState("");
    const handleCLick=()=>{
        setCounter((prev)=>prev+1)
    }

    function heavyCalculation(num){
        for(let i=0;i<100000;i++){

        }
        return num * 2
    }

    const res=useMemo(()=>{
       return heavyCalculation(search)
    },[search])

  return (
    <div className='mt-20 flex flex-col gap-6' >
            <h1 className='text-2xl font-bold mb-4'>count value :{counter}</h1>
           <button onClick={handleCLick} className='px-6 py-2 bg-green-600 text-white rounded-md'>Counter</button> 
           <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
           <p className='font-bold text-2xl'>Your Heavy Resukt : {res}</p>
    </div>
  )
}

export default Usememo
