import React, { useState, useEffect, useRef } from "react";
import InputForm from "./components/InputForm";
import DataDisplay from "./components/DataDisplay";
import AREA_DATA from "./data/zip-codes";
import "./App.css";

function App() {
   const [zipCode, setZipCode] = useState("");
   const [data, setData] = useState();
   const [error, setError] = useState(false);
   const didMount = useRef(false);

   useEffect(() => {
      const newData = AREA_DATA[zipCode];
      setData(newData);
      console.log(`setting data to: ${newData}`);
      console.log(`didMount: ${didMount.current}`);
      if (didMount.current) {
         console.log(`setting error to: ${newData == undefined}`);
         setError(newData == undefined);
      } else {
         didMount.current = true;
      }
      console.log(`didMount: ${didMount.current}`);
   }, [zipCode]);

   return (
      <div className="App">
         <h1>COVID-19 Dashboard</h1>
         <InputForm setZipCode={setZipCode} />
         {error && (
            <h1>
               ERROR: Incorrect ZIP Code. Please re-enter your ZIP Code here:
            </h1>
         )}
         {data && <DataDisplay zipCode={zipCode} data={data} />}
      </div>
   );
}

export default App;
