import Product from "../Components/Product";

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
      {names.map((individualItem) => {
        return (
          <Product
            name={individualItem.title}
            artist={individualItem.author}
            price={individualItem.price}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
