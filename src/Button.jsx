function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye!");
}

function handleDbClick() {
    console.log("you Double Clicked me")
}

function Button() {
    return ( 
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <button onClick={handleClick}>click me</button>
            <p onMouseOver={handleMouseOver}>This para is for the event done</p>
            <p onMouseOver={handleMouseOver}>This para is for the event done</p>
            <button onDoubleClick={handleDbClick}>Double Click me</button>
        </div>
     );
}

export default Button;