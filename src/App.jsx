import { useState } from "react";
import {questions} from "./Components/config.jsx"


function App() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen relative w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 p-10">
      {/* header */}
      <div className="text-3xl max-w-6xl w-full absolute top-20 mb-10 mx-auto text-white flex items-center justify-between">
        <button onClick={prev}>⬅</button>
        <p className="font-bold underline text-slate-50">
          {questions[index].title}
        </p>
        <button onClick={next}>➡</button>
      </div>
      {/*Components */}
      <div className="fixed top-40">{questions[index].component}</div>
    </div>
  );
}

export default App;
