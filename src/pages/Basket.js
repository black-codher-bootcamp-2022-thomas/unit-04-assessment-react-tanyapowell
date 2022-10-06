function BasketPage() {
    return <div>{props.data.map((individualItem) => {
        return (
          <Product
            key={individualItem.trackId}
            name={individualItem.trackName}
            artist={individualItem.artistName}
            price={individualItem.trackPrice}
            addItemToBasket={props.addItemToBasket}
            trackId={individualItem.trackId}
          />
        );
      })}
      </div>
}

export default BasketPage;

