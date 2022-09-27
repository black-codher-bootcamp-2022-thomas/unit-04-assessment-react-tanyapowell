import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/About";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  )
}