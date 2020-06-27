import React, { useState, useContext } from "react";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
   const [zipCode, setZipCode] = useState();

   return (
      <div className="App">
         <InputForm setZipCode={setZipCode} />
         <h1>ZIP Code: {zipCode}</h1>
      </div>
   );
}

export default App;
