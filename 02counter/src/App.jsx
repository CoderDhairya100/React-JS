import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {          // EVERYTHING INCLUDING HOOKS IS CODED INSIDE A FUNCTION
  
  let [counter,setCounter] = useState(0) /* Details: Always use Let for Variable and Const for constant...
                                            counter : it's a variable name that will change
                                            setCounter : it's another variable name that makes changes for the first variable
                                                         instead of setCounter we can use any variable name (eg. Changes,
                                                         potato, setValue, dhairyaValue, we use set because it's a better and
                                                         quiet formal way to write a code.
                                            (BOTH THE VARIABLES counter & setCounter ARE CONNECTED BUT ANY RANDOM
                                             NAMES CAN BE GIVEN TO BOTH OF THEM ACCORDING TO OUR CONVINIENCE.)*/

  const addValue =() =>{   //Adding 1 on every click
    console.log("clicked", counter);
    //counter = counter + 1 
    setCounter(counter + 1)           /* In this constant addValue, This is how we write the useState hook using the 
                                         variable names we had given above */
  }

  const removeValue =() =>{  //Subtracting 1 on every click
    console.log("clicked", counter);
    //counter = counter - 1 
    setCounter(counter - 1)
  }

  return (
    <>
    
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>


      <button onClick={addValue}>Add Value</button>

      <br />

      <button onClick={removeValue}>Decrease Value</button>

    </>
  )
}

export default App
