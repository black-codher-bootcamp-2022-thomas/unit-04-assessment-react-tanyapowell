import ProductList from "../Components/ProductList";
import products from "../models/dummydata.json"
function BasketPage() {
    return (
        <> <ProductList 
        items={products}/> </>
    )
}

export default BasketPage;
