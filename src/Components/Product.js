// import React, { useState, useEffect } from 'react';

function Product(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.artist}</p>
      <p>{props.price}</p>
      <img src="" alt="pic details" />
      <button onClick={() => props.addItemToBasket(props.trackId)}>
        Add to basket
      </button>
    </>
  );
}

export default Product;
