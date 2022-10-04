import React,{useState} from 'react'
import "./App.css"
const App = () => {
   const [count, setCount] = useState(0);

   const incrementCount = () => {
       setCount(count + 1);
   }
   const decrementCount = () => {
      setCount(count - 1);
   }

   let colors = "#000";


   if(count < 1){
       colors ="#f00"
   }
  return (
    <div>
         <p style = {{color: colors}}>You clicked {count} times</p>
         {/* <button onClick={() => setCount(count + 1)}>Click Me</button> */}
         <button onClick={incrementCount}>Increment</button>
         <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default App