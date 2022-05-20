import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="App">
      <div id="calculator" class="calculator">
        <div class="result">
          <p>
            {result ? "(" + result + ")" : ""} {calc || 0}
          </p>
        </div>

        <button class="grey" onClick={deleteLast}>
          AC
        </button>
        <button class="grey">+/-</button>
        <button class="grey">%</button>
        <button class="operator" onClick={() => updateCalc("/")}>
          /
        </button>

        <button onClick={() => updateCalc("7")} key={7}>
          {7}
        </button>
        <button onClick={() => updateCalc("8")} key={8}>
          {8}
        </button>
        <button onClick={() => updateCalc("9")} key={9}>
          {9}
        </button>
        <button class="operator" onClick={() => updateCalc("*")}>
          x
        </button>

        <button onClick={() => updateCalc("4")} key={4}>
          {5}
        </button>
        <button onClick={() => updateCalc("5")} key={5}>
          {5}
        </button>
        <button onClick={() => updateCalc("6")} key={6}>
          {6}
        </button>
        <button class="operator" onClick={() => updateCalc("-")}>
          -
        </button>
        {/* <span class="operator"> */}

        <button onClick={() => updateCalc("1")} key={1}>
          {1}
        </button>
        <button onClick={() => updateCalc("2")} key={2}>
          {2}
        </button>
        <button onClick={() => updateCalc("3")} key={3}>
          {3}
        </button>
        <button class="operator" onClick={() => updateCalc("+")}>
          +
        </button>

        <button class="double" onClick={() => updateCalc("0")} key={0}>
          {0}
        </button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button class="operator" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
