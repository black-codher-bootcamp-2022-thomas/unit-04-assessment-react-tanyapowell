// const props = {
//   name: "Biff and Chip",
// };

function Book(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.author}</p>
      <p>{props.price}</p>
      <img src="" alt="pic details" />
    </>
  );
}

export default Book;
