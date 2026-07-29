import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [foodData, setFoodData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentData = foodData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(foodData.length / itemsPerPage);
  const pages = [...Array(totalPages)].map((_, i) => i + 1);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/recipes?limit=50");
      console.log(response);
      const data = await response.json();
      setFoodData(data.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center flex-col min-h-screen w-full bg-gray-900">
      <div className="flex items-center p-4 gap-5 bg-slate-900 justify-between">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="border px-4 rounded-md py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400  flex items-center justify-between text-white border-white"
        >
          ⬅
        </button>
        {pages.map((t) => (
          <div
            key={t}
            onClick={() => setCurrentPage(t)}
            className="border px-4 rounded-md py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400  flex items-center justify-between text-white border-white"
          >
            <p>{t}</p>
          </div>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="border px-4 rounded-md py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400  flex items-center justify-between text-white border-white"
        >
          ➡
        </button>
      </div>
      <div className="bg-slate-300 grid grid-cols-4 h-[500px] overflow-y-scroll">
        {currentData.map((t) => (
          <div key={t.id} className="border p-4 rounded-md flex flex-col gap-3">
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="font-bold text-red-500">{t.name}</p>
            <p className="font-bold text-yellow-500">⭐ {t.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
