import React from "react";
import "./App.css";

function App() {
   return (
      <div className="App">
         <h3>Input Your ZIP Code</h3>
         <input type="text" id="zip-code" placeholder="Input your ZIP Code" />
         <input
            type="button"
            id="submit"
            value="Submit"
            onclick="alert('you clicked me!')"
         />
      </div>
   );
}

export default App;
