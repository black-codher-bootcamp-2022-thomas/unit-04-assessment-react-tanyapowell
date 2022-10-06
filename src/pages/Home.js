import Product from "../Components/Product";
import { useState } from "react";

import Header from "../Components/Header";

function HomePage(props) {
  const [searchTerm, setSearchTerm] = useState("Type Here");

  return (
    <div>
      <Header title="home" />
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <p>{`The person typed: ${searchTerm}`}</p>
      {props.data.map((individualItem) => {
        return (
          <Product
            key={individualItem.trackId}
            name={individualItem.trackName}
            artist={individualItem.artistName}
            price={individualItem.trackPrice}
            addItemToBasket={props.addItemToBasket}
            trackId={individualItem.trackId}
            page="homepage"
          />
        );
      })}
    </div>
  );
}

export default HomePage;
