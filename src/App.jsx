import { useState } from "react";
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
function App() {
 const [count,setCount] =useState(0);

 const incrementCount = () => {
 setCount(count+1)

 // TO ADD 4 TO THE COUNT USING PREVIOUS VALUE
// setCount(prev => prev+1)
// setCount(prev => prev+1)
// setCount(prev => prev+1)
// setCount(prev => prev+1)
 }
 return(
<>
  <h1>Count : {count}</h1>
  <button onClick={incrementCount}>Increment</button>
</>

 )
}

export default App;
