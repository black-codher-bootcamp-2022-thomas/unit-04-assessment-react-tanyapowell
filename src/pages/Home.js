import data from "../models/example-data.json";
import Product from "../Components/Product";

function HomePage() {
  return (
    <div>
      {data.map((individualItem) => {
        return (
          <Product
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
