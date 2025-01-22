// import { useState } from "react";
import React, { useEffect, useState, useRef } from "react";
import "./App.css";

//USESTATE

// function App() {
//   const [food, setfood] = useState("Chicken Biriyani");

//   const changeFood = () => {
//     setfood("Mutton Biriyani");
//   };
//   return (
//     <>
//       <h1>My Favourite Food is {food}</h1>
//       <button onClick={changeFood}>Mutton Biriyani</button>
//     </>
//   );
// }


// function App() {
//  const [count,setCount] =useState(0);

//  const incrementCount = () => {
//  setCount(count+1)

//  TO ADD 4 TO THE COUNT USING PREVIOUS VALUE
// setCount(prev => prev+1)
// setCount(prev => prev+1)
// setCount(prev => prev+1)
// setCount(prev => prev+1)
//  }
//  return(
// <>
//   <h1>Count : {count}</h1>
//   <button onClick={incrementCount}>Increment</button>
// </>

//  )
// }

// function App(){
//   const[count,setCount] = useState(0);

//   useEffect(()=>{
//     setTimeout(()=>{
//     setCount(count=>count+1)
//   },2000)
//   },[])
//   return(
//     <>
//  <h1>I've rendered {count} times</h1>
//     </>
//   )

// }

//useRef

function App() {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>

      <h1>Render Count : {count.current}</h1>
    </>
  );
}

export default App;
