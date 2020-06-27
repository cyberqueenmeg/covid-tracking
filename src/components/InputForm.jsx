import React, { useState } from "react";

function InputForm({ setZipCode }) {
   const [input, setInput] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();
      setZipCode(input);
   };

   const handleChange = (event) => {
      setInput(event.target.value);
   };

   return (
      <form className="input-form" onSubmit={handleSubmit}>
         <h3>Input Your ZIP Code</h3>
         <input
            type="text"
            id="zip-code"
            placeholder="Input your ZIP Code"
            onChange={handleChange}
            value={input}
         />
         <button type="submit">Submit</button>
      </form>
   );
}

export default InputForm;
