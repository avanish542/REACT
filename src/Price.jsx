
 
function Price( { oldPrice, newPrice}) {
    return ( 
        <div style={{backgroundColor:"#e0c367", height:"30px", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}>
            <span style={{textDecorationLine:"line-through"}}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={{fontWeight:"bold"}}>{newPrice}</span>
        </div>
     );
}

export default Price;