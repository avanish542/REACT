import Product from "./Product.jsx";


function ProductTab() {
    return ( 
        <div className="product-tab " style={{display:"flex" , flexWrap:"wrap", justifyContent:"center ", alignItems:"center", }}>           
            <Product Title="Logitech MX Master 35" idx={0} />
            <Product Title="Apple Pencil(2 Gen)" idx={1} />
            <Product Title="Samsung Galaxy Tab S7" idx={2} />
            <Product Title="Microsoft Surface Pro 7" idx={3} />

     
        </div>
    );
}

export default ProductTab;