import Book from "../Components/Book";

function HomePage() {
  const names = [
    { title: "Postman Pat", author: "John Arthur Cunliffe", price: "25p" },
    { title: "Girl Woman Other", author: "Bernardine Evaristo", price: "55p" },
    { title: "Fireman Sam", author: "David Jones", price: "27p" },
    { title: "The Colour Purple", author: "Alice Walker", price: "88p" },
    {
      title: "Murder on the Orient Express",
      author: "Agathie Christie",
      price: "99p",
    },
    { title: "Annabels Book", author: "ANNABEL", price: "150p" },
  ];

  return (
    <div>
      {names.map((singleBook) => {
          return <Book name={singleBook.title} author={singleBook.author} price={singleBook.price} />;
      })}
    </div>
  );
}

export default HomePage;
