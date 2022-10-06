// import React, { useState, useEffect } from 'react';

function Product(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.artist}</p>
      <p>{props.price}</p>
      <img src="" alt="pic details" />
      {props.page === "homepage" && (
        <button onClick={() => props.addItemToBasket(props.trackId)}>
          Add to basket
        </button>
      )}
      {props.page === "basket" && <button>Remove</button>}
    </>
  );
}

export default Product;
