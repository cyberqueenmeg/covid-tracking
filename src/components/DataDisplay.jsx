import React from "react";

function DataDisplay({ zipCode, data: { cases, extraInfo } }) {
   const foodLink = `https://www.yelp.com/search?find_desc=&find_loc=${zipCode}`;

   return (
      <div className="data-display">
         <h1> Information for Residents in 06903 </h1>
         <a className="cases" href={cases.link}>
            COVID-19 Cases for {cases.title}
         </a>
         {extraInfo.map((item, idx) => {
            return (
               <a key={idx} href={item.link}>
                  {item.title}
               </a>
            );
         })}
         <a href={foodLink}>Restaurant Information for {zipCode}</a>
      </div>
   );
}

export default DataDisplay;
