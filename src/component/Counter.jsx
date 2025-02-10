import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // è un hook che permette di gestire lo stato all'interno di un componente ----- hook che permette di eseguire effetti collaterali in un componente
  function incremento() {
    setCount(count + 1);
  }

  function decremento() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="flex justify-center flex-col items-center gap-5 p-5">
      <p className="font-bold text-5xl text-slate-500">Counter</p>
      <div className="flex gap-3">
        <button
          onClick={incremento}
          className="p-2 rounded-lg bg-emerald-800 text-amber-50"
        >
          Incremento
        </button>
        <button
          onClick={decremento}
          className="p-2 rounded-lg bg-red-800 text-amber-50"
        >
          Decremento
        </button>
        <button
          onClick={reset}
          className="p-2 rounded-lg bg-blue-600 text-amber-50"
        >
          Reset
        </button>
      </div>
      <div className="bg-gray-900 p-2 rounded-full text-amber-50 font-bold text-1xl">
        <p>{count}</p>
      </div>
    </div>
  );
}

export default Counter;
