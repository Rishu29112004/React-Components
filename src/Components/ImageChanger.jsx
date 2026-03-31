import React, { useEffect, useState } from "react";

export const Data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60",
    name: "Sports Car",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=60",
    name: "Luxury Car",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=60",
    name: "SUV",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=60",
    name: "Modern Car",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=60",
    name: "Electric Car",
  },
];

const ImageChanger = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let result = setInterval(() => {
      setCurrentIndex((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => {
      clearInterval(result);
    };
  }, []);

  const handleLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
  };

  const handleRight = () => {
    setCurrentIndex((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
  };

  const handleCircle = (index) =>{
    setCurrentIndex(index)
  }

  return (
    <div className=" w-full ">
      <img
        src={Data[currentIndex].image}
        className="w-[620px] rounded-md h-[420px]"
        alt=""
      />
      <div className="flex items-center justify-center mt-5 gap-5">
        <button
          onClick={handleLeft}
          className="px-4 py-1 font-bold rounded-full text-white bg-slate-600"
        >
          Left
        </button>
        <p className="text-blue-50 w-[150px] flex justify-center font-bold text-2xl">
          {Data[currentIndex].name}
        </p>
        <button
          onClick={handleRight}
          className="px-4 py-1 font-bold rounded-full text-white bg-slate-600"
        >
          Right
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        { Array.from({length: Data.length}).map((_, index) => (
          <div onClick={()=>handleCircle(index)} key={index} className={`w-5 h-5 rounded-full ${currentIndex === index ? "bg-green-100" : "bg-gray-500"}`}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageChanger;
