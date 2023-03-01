export default function DataBindingComponent(){
    var product = {
        Name : "Samsung Tv",
        price : 4500.45,
        stock : true
    }
    return (
        <div className="container">
             <h2>Product Details</h2>
             <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Stock</dt>
                <dd>{product.stock ? "Available" : "Not Available "}</dd>
             </dl>
        </div>
    )
}