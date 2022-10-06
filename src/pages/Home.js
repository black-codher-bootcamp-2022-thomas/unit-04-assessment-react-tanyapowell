import products from "../models/example-data.json";
import { useState } from "react";
import ProductList from "../Components/ProductList";
import Header from "../Components/Header";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (<>
    <Header title={'Home Page'}/>
    <div>
      <input onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
      <p>{`The person typed: ${searchTerm}`}</p>
     <ProductList 
     products={products}/>
    </div>
    </>
  );
}

export default HomePage;
