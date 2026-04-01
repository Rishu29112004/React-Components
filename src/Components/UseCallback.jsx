import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [counter, setCounter] = useState(0);
  
  const handleCLick = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <div className="mt-20 flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">count value :{counter}</h1>
      <button
        onClick={handleCLick}
        className="px-6 py-2 bg-green-600 text-white rounded-md"
      >
        Counter
      </button>
      <ChildComponent btnName={"click Me"} handIncrement={handleCLick} />
    </div>
  );
};

export default UseCallback;

const ChildComponent = React.memo(({ btnName, handIncrement }) => {
  console.log("child getting rerendered");
  return (
    <div>
      <button
        onClick={handIncrement}
        className="px-6 py-2 bg-yellow-600 text-white rounded-md"
      >
        {btnName}
      </button>
    </div>
  );
});
