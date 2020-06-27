import React, { useState } from "react";

function InputForm({ setZipCode }) {
   const [input, setInput] = useState("");

   const handleSubmit = () => {
      setZipCode(input);
   };

   const handleChange = (event) => {
      setInput(event.target.value);
   };

   return (
      <>
         <h3>Input Your ZIP Code</h3>
         <input
            type="text"
            id="zip-code"
            placeholder="Input your ZIP Code"
            onChange={handleChange}
            value={input}
         />
         <input
            type="button"
            id="submit"
            value="Submit"
            onClick={handleSubmit}
         />
      </>
   );
}

export default InputForm;
