import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BasketPage from "./pages/Basket";
import AboutPage from "./pages/About";
import "./App.css";


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