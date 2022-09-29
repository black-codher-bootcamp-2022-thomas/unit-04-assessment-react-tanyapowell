import data from "../models/example-data.json";
import Product from "../Components/Product";
import { useState } from "react";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("Type Here");

  return (
    <div>
      <input onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
      <p>{`The person typed: ${searchTerm}`}</p>
      {data.map((individualItem) => {
        return (
          <Product
            key={individualItem.trackId}
            name={individualItem.trackName}
            artist={individualItem.artistName}
            price={individualItem.trackPrice}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
