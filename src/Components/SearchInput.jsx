import React, { useEffect, useState } from "react";

const SearchInput = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const getData = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fecth data");
      }

      const result = await res.json();
      setData(result.products);
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    if (!query) {
      setData([])
      return
    }

    const timer=setTimeout(()=>{
         getData()
    },500)

    return ()=>clearTimeout(timer)
  }, [query]);

  return (
    <div className="w-96 flex flex-col items-center justify-center">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-2 px-5 py-2 w- w-full rounded-md border-blue-800"
        type="text"
      />
      <div className="mt-4 h-[300px] overflow-y-auto">
        {data?.map((t) => (
          <div key={t.id}>{t.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
