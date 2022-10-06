import exampledata from "./models/example-data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BasketPage from "./pages/Basket";
import AboutPage from "./pages/About";
import "./App.css";

// need to add code that will copy details from the product to the basket page without removing it once we click the add to basket link.
    
//Step 3: Pass that to the basket     

function App() {
  function addToBasket(itemId) {
    const findProductID = exampledata.filter( item => item.trackId === itemId);
    return findProductID
  }
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage data={exampledata} addItemToBasket={addToBasket}/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="basket" element={<BasketPage basketItems={}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;