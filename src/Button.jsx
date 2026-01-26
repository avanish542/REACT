function printHello() {
    console.log("Hello!");
}

function printBye() {
    console.log("Bye!");
}

function Button() {
    return ( 
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <button onClick={printHello}>click me</button>
            <p onClick={printBye}>This para is for the event done</p>
        </div>
     );
}

export default Button;