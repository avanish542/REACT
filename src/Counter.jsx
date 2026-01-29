import { useState } from "react";



function Counter() {
   let [count, setCount] = useState(0);
    console.log(count);

    let increment = ()=>{
        setCount(count + 1);
        // console.log(count);
    }

    return ( 
        <div style={{textAlign:"center", marginTop:"110px"}}>
            <h3>Count = {count}</h3>
            <button onClick = {increment}>Increment</button>
        </div>
     );
}

export default Counter;