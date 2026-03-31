import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";

const SearchInput = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const cacheRef = useRef({});

  const fetchData = useCallback(async (query) => {
    try {
      if (cacheRef.current[query]) {
        console.log("api getting called from cache");
        setData(cacheRef.current[query]);
        return;
      }

      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      setData(data.products);

      cacheRef.current[query] = data.products; // ✅ no re-render
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  function doSomeMagic(fn, delay) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  const betterFunction = useMemo(() => {
    return doSomeMagic(fetchData, 300);
  }, [fetchData]);

  useEffect(() => {
    if (query.trim() !== "") {
      betterFunction(query);
    } else {
      setData([]);
    }
  }, [query, betterFunction]);

  return (
    <div className="p-10 w-full items-center justify-center">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="rounded-md p-4 w-full"
      />

      {data.length === 0 ? (
        <div>No Data Present</div>
      ) : (
        <div>
          {data.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;