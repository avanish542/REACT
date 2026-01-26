import "./Product.css";
import Price from "./Price.jsx";


function Product({ Title, idx }) {
    let oldPrice= ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["10,495", "9,900", "1,299", "499"];
    let Description = [["8,000 DPI","5 Programmable buttons"], ["intuitive surfaces", "designed for ipad pro"], ["designed for ipad pro", "intuitive surfaces"], ["wireless", "compact design"]];
    return ( 
          
        <div className='product' style={{textAlign:"center"}}>
            <h1>{Title}</h1>
            <p>{Description[idx][0]}</p>
             <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />             
        </div>
     );
}

export default Product;