import React, { useState, useEffect, useRef } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
      document.title = count;
    }, [count]);

    const addHandler = () => {
        const amount = parseInt(inputRef.current!.value) + count         
        setCount(amount)
        inputRef.current.value = "" 
    }

  return (
    <div className="bg-slate-200 text-center p-20 shadow rounded-lg h-250 w-450 -mt-40">
      <h2 className="text-slate-800 text-4xl font-bold">Count: {count} </h2>
      <div className="flex flex-row gap-20 mt-10">
        <button
          className="p-5 bg-slate-800 text-slate-200 text-xl rounded-2xl"
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          Increment
        </button>
        <button
          className="p-3 bg-slate-800 text-slate-200 text-xl rounded-2xl"
          onClick={() => {
            setCount((prevCount) => prevCount - 1);
          }}
        >
          Decrement
        </button>
      </div>
      <div className="flex flex-row mt-5">
        <input
          type="number"
          ref={inputRef}
          placeholder="Enter amount you want to add..."
          className="border-cyan-100 rounded-lg p-3 w-11/12"
          required
        />
        <button className="p-3 bg-slate-800 text-slate-200 text-xl rounded-xl" onClick={addHandler} >
          Add
        </button>
      </div>
    </div>
  );
}

export default Counter
