import exampledata from "./models/example-data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BasketPage from "./pages/Basket";
import AboutPage from "./pages/About";
import "./App.css";

// need to add code that will copy details from the product to the basket page without removing it once we click the add to basket link.
function App() {
  function addToBasket(itemid) {
//Step 1: Get id of product
//Step 2: Search through all of the example data to find the product id of step 1
//Step 3: Pass that to the basket     
    console.log(itemid);
  }
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage data={exampledata} addItemToBasket={addToBasket}/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="basket" element={<BasketPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;