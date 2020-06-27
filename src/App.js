import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import DataDisplay from "./components/DataDisplay";
import AREA_DATA from "./data/zip-codes";
import "./App.css";

function App() {
   const [zipCode, setZipCode] = useState("06903");
   const [data, setData] = useState();

   useEffect(() => {
      setData(AREA_DATA[zipCode]);
      console.log(`setting data to: ${AREA_DATA[zipCode]}`);
   }, [zipCode]);

   return (
      <div className="App">
         <InputForm setZipCode={setZipCode} />
         {data && <DataDisplay zipCode={zipCode} data={data} />}
      </div>
   );
}

export default App;
