import { useEffect, useState } from "react";

export const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
        setInput("")
        setResult("")
    } else {
        setInput((prevInput)=> prevInput + value)
    }
  };


  useEffect(()=> {
    const handleKeyPress = (event) => {
        const key = event.key
        if (/[\d+\-*/.=C]/.test(key)) {
            if (key === "=" || key === "Enter") {
                event.preventDefault();
                setResult(input)
            } else if (key === "Escape") {
                handleButtonClick("C")
            } else {
                handleButtonClick(key)
            }
        }
    }
    window.addEventListener("keydown", handleKeyPress)

    return ()=> {
        window.removeEventListener("keydown", handleKeyPress) 
    }
  }, [input])


  return (
    <div className="p-4 border-2 border-slate-900 bg-slate-700">
      <div>
        <input
          type="text"
          className="w-full p-4 bg-slate-950"
          value={input}
          readOnly
        />
        <div className="flex items-center justify-center w-full h-12">
          <p>{result}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (item, index) => (
            <button
              className="h-12 px-6 text-xl bg-slate-500 focus:bg-slate-800"
              key={index}
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
};
