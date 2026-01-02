import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-red-500 font-family-instrument ">tushar</div>
      <h1 className="text-4xl font-bold font-helvetica">
        Helvetica Now Display (Tailwind v4)
      </h1>

      <p className="font-medium">
        Companies spend over $100K every year on one senior{" "}
      </p>
    </>
  );
}

export default App;
