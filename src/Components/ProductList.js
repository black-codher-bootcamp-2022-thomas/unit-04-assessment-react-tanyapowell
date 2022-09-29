import Product from "./Product";

function ProductList(props) {
    return ( <>{props.items.map((individualItem) => {
        return (
          <Product
            key={individualItem.trackId}
            name={individualItem.trackName}
            artist={individualItem.artistName}
            price={individualItem.trackPrice}
            album={individualItem.collectionName}
          />
        );
      })}</>
    )
}
export default ProductList;