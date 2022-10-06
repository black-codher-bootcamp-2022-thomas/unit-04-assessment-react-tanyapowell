import Product from "./Product";

function ProductList(props) {
    return ( <>{props.products.slice(0,5).map((individualItem) => {
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