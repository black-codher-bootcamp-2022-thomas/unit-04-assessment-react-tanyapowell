import ProductList from "../Components/ProductList";
import products from "../models/dummydata.json"
import Header from "../Components/Header";

function BasketPage() {
    return (
        <> <Header title={' Basket'}/>
        
    <ProductList 
        items={products}/> </>
    )
}

export default BasketPage;
