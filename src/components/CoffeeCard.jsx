
const CoffeeCard = ({ Product, UpdateProduct, DeleteProduct, index }) => {


    return (
        <div className="coffee-card">

            <img src={Product.productImageUrl} alt="CoffePicture" />
            <h3> {Product.name} </h3>
            <p>{Product.roasterId}</p>
            <p> {Product.price} </p>

            {/* Conditionally render based on user logged in, and if product belongs to them; add confirmation before deleting? */}
            <button onClick={() => UpdateProduct(Product, index)}>Edit product</button>
            <button onClick={() => DeleteProduct(Product, index)}>Delete product</button>
        </div>
    )
}
// line 8-11, make input values?
export default CoffeeCard