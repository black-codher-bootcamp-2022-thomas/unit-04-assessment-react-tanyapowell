// const props = {
//   name: "Biff and Chip",
// };

function Product(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.artist}</p>
      <p>{props.price}</p>
      <img src="" alt="pic details" />
    </>
  );
}

export default Product;
