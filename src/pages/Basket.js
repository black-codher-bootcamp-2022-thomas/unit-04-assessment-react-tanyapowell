import Header from "../Components/Header";
import Product from "../Components/Product";

function BasketPage(props) {
  return (
    <div>
      <Header title="basket" />
      {props.basketItemsData.map((individualItem) => {
        return (
          <Product
            key={individualItem.trackId}
            name={individualItem.trackName}
            artist={individualItem.artistName}
            price={individualItem.trackPrice}
            addItemToBasket={props.addItemToBasket}
            trackId={individualItem.trackId}
            page="basket"
          />
        );
      })}
    </div>
  );
}

export default BasketPage;
