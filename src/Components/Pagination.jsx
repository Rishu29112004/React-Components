import React from "react";

const Pagination = () => {
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const foodData = [
    {
      id: 1,
      name: "Burger",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Pasta",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Sandwich",
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      rating: 4.4,
    },
    {
      id: 5,
      name: "Salad",
      image: "https://cdn.dummyjson.com/recipe-images/5.webp",
      rating: 4.2,
    },
    {
      id: 6,
      name: "Tacos",
      image: "https://cdn.dummyjson.com/recipe-images/6.webp",
      rating: 4.6,
    },
    {
      id: 7,
      name: "Chicken Curry",
      image: "https://cdn.dummyjson.com/recipe-images/7.webp",
      rating: 4.9,
    },
    {
      id: 8,
      name: "Chocolate Cake",
      image: "https://cdn.dummyjson.com/recipe-images/8.webp",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Paneer Tikka",
      image: "https://cdn.dummyjson.com/recipe-images/9.webp",
      rating: 4.7,
    },
    {
      id: 10,
      name: "Fried Rice",
      image: "https://cdn.dummyjson.com/recipe-images/10.webp",
      rating: 4.5,
    },
    {
      id: 11,
      name: "Momos",
      image: "https://cdn.dummyjson.com/recipe-images/11.webp",
      rating: 4.6,
    },
    {
      id: 12,
      name: "Ice Cream",
      image: "https://cdn.dummyjson.com/recipe-images/12.webp",
      rating: 4.4,
    },
  ];
  return (
    <div className="flex items-center flex-col min-h-screen w-full bg-gray-900">
      <div className="flex items-center p-4 gap-5 bg-slate-900 justify-between">
        <button className="border px-4 rounded-md py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400  flex items-center justify-between text-white border-white">
          ⬅
        </button>
        {page.map((t) => (
          <div
            key={t}
            className="border px-4 rounded-md py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400  flex items-center justify-between text-white border-white"
          >
            <p>{t}</p>
          </div>
        ))}
        <button className="border px-4 rounded-md py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400  flex items-center justify-between text-white border-white">
          ➡
        </button>
        <div></div>
      </div>
      <div className="bg-slate-300 grid grid-cols-4 w-full items-center justify-between">
        {foodData.map((t) => (
          <div key={t.id} className="border p-4 rounded-md flex flex-col gap-3">
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="font-bold text-red-500">{t.name}</p>
            <p className="font-bold text-yellow-500">{t.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
