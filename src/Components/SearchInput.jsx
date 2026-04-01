import React, { useEffect, useState } from "react";

const SearchInput = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getdata = async (search) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}`,
      );
      const data = await res.json();
      setData(data.recipes);
      console.log(data.recipes);
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  };

 useEffect(() => {
  if (search.trim() === "") {
    setData([]);
    return;
  }

  const ref = setTimeout(() => {
    getdata(search);
  }, 500);

  return () => clearTimeout(ref); // ✅ correct cleanup
}, [search]);


  return (
    <div className="w-[500px] flex flex-col gap-5 border">
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
      </div>
      <ul>
        {data.length > 0 &&
          data.map((t) => (
            <div key={t.id}>
              <p>{t.name}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default SearchInput;
