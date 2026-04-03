import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
const [color, setColor] = useState("green");
  const buttonRef = useRef(null);

  const changeColor = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
    }
  };

  useEffect(() => {
    if (count > 5) {

       setColor("red");
    }
    setData("Hello, World!");
   
  }, [count ]);

  return (
    <div className="flex justify-center gap-12">
      
      <div>
        <p>{count}</p>

        <button
          onClick={() => setCount(prev => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button ref={buttonRef} className={`bg-${color}-500 text-white px-4 py-2 rounded mt-2`}>
          Color Button
        </button>

        <p>You entered: {name}</p>
        <p>{data}</p>
      </div>

    </div>
  );
}

export default Counter;