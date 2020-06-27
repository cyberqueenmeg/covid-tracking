import React from "react";
import "./App.css";

function App() {
   const handleClick = () => {
      alert("you clicked me!");
   };

   return (
      <div className="App">
         <h3>Input Your ZIP Code</h3>
         <input type="text" id="zip-code" placeholder="Input your ZIP Code" />
         <input
            type="button"
            id="submit"
            value="Submit"
            onClick={handleClick}
         />
      </div>
   );
}

export default App;
