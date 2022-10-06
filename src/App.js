import exampledata from "./models/example-data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BasketPage from "./pages/Basket";
import AboutPage from "./pages/About";
import "./App.css";
import { useState } from "react";

// need to add code that will copy details from the product to the basket page without removing it once we click the add to basket link.

//Step 3: Pass that to the basket

function App() {
  const [basketItems, setBasketItems] = useState([]);

  function addToBasket(itemId) {
    const findProductID = exampledata.filter((item) => item.trackId === itemId);
    const updatedBasketItems = [findProductID[0], ...basketItems];
    setBasketItems(updatedBasketItems);
  }

  console.log(basketItems);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage data={exampledata} addItemToBasket={addToBasket} />
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="basket"
            element={<BasketPage basketItemsData={basketItems} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
