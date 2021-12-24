import logo from "./logo.svg";

import { useState } from "react";

function App() {
  const [rebarState, SetRebar] = useState([]);
  const [errorState, setErrorState] = useState(false);
  const [formdata, setFormData] = useState({
    length1: "",
    quantity1: "",
    length2: "",
    quantity2: "",
  });
  function calculateRebar(formdata) {
    const result1 = formdata.length1 * formdata.quantity1;
    const result2 = formdata.length2 * formdata.quantity2;
    const totalResult = result1 + result2;
    const neededRebar = totalResult / 12;
    const checked = Math.ceil(neededRebar);

    return checked;
  }

  function handleRebar(e) {
    e.preventDefault();
    if (typeof e.target[0].value == "number") {
      console.log("not a number");
      setErrorState(true);
      return;
    }
    formdata.length1 = e.target[0].value;
    formdata.quantity1 = e.target[1].value;
    formdata.length2 = e.target[2].value;
    formdata.quantity2 = e.target[3].value;
    SetRebar(calculateRebar(formdata));
  }

  return (
    <div>
      <div className="App-header" onSubmit={handleRebar}>
        <h2 style={{ fontFamily: "cursive", fontWeight: "lighter" }}>
          Rebar Estimator
        </h2>
        <form
          style={{
            backgroundColor: "grey",
            fontFamily: "serif",
            padding: "60px",
          }}
        >
          <label
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Length 1
          </label>
          <input
            style={{
              marginLeft: "45px",
              height: "40px",
              borderRadius: "10px",
              paddingLeft: "10px",
            }}
            type="number"
          />
          <br />
          <br />
          <label
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Quantity 1
          </label>
          <input
            style={{
              marginLeft: "20px",
              height: "40px",
              borderRadius: "10px",
              paddingLeft: "10px",
            }}
            type="number"
          />
          <br />
          <br />
          <label
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Length 2
          </label>
          <input
            style={{
              marginLeft: "45px",
              height: "40px",
              borderRadius: "10px",
              paddingLeft: "10px",
            }}
            type="number"
          />
          <br />
          <br />
          <label
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Quantity 2
          </label>
          <input
            style={{
              marginLeft: "20px",
              height: "40px",
              borderRadius: "10px",
              paddingLeft: "10px",
            }}
            type="number"
          />
          <br />
          {errorState ? <label>Please input only number</label> : ""}
          <br />
          <button
            type="submit"
            style={{
              borderRadius: "10px",
              height: "40px",
              backgroundColor: "green",
            }}
          >
            Calculate
          </button>
        </form>
      </div>
      <div id="result">
        <h3 style={{ fontFamily: "monospace", fontWeight: "revert" }}>
          Minimum needed Bars: {rebarState}
        </h3>
      </div>
    </div>
  );
}

export default App;
