import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);
  // a useEffect snippet
  useEffect(() => {
    return () => {};
  }, []);

  return (
    // code inside this div as root entry of your app
    <div className="App min-h-screen space-y-4 bg-gray-700 p-8 text-center text-white">
      <div className="flex justify-evenly">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            className="logo h-40 
          hover:drop-shadow-[0_35px_35px_rgba(100,108,255,0.667)] "
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react h-40" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div
        className="card group peer rounded-xl ring-4 ring-gray-800 transition-shadow duration-500
      hover:ring-0
      "
      >
        <button
          className="rounded-2xl p-2 ring-4 ring-transparent transition duration-500 group-hover:bg-yellow-300
          group-hover:text-black
          group-hover:ring-yellow-500
          group-hover:drop-shadow-[0_0_10px_yellow]
          "
          onMouseMove={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs rounded-b-md border-gray-800 transition-all duration-200 peer-hover:border-2">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
