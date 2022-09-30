import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BasketPage from "./pages/Basket";
import AboutPage from "./pages/About";
import "./App.css";

// need to add code that will copy details from the product to the basket page without removing it once we click the add to basket link.
function App() {
  function addToBasket() {
    console.log("added to Basket");
  }
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage addItemToBasket={addToBasket}/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="basket" element={<BasketPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;