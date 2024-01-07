import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {
  const [investments, setInvestments] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    }
  );

  const inputIsValid = investments.duration > 0;

  function handleChange(name, value) {
    setInvestments((prevInvestment) => ({
      ...prevInvestment,
      [name]: +value
    }))
  }

  return (
    <>
      <Header />
      <UserInput values={investments} changeInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid values</p>}
      {inputIsValid && <Results input={investments} />}
    </>
  )
}

export default App
