import products from "../models/example-data.json";
import Product from "../Components/Product";
import { useState } from "react";
import ProductList from "../Components/ProductList";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("Type Here");

  return (
    <div>
      <input onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
      <p>{`The person typed: ${searchTerm}`}</p>
     <ProductList 
     items={products}/>
    </div>
  );
}

export default HomePage;
