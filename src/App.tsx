import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Appetizers from "./pages/Appetizers/Appetizers";
import Login from "./pages/Login/Login";
import Desserts from "./pages/Desserts/Desserts";
import Combos from "./pages/Combos/Combos";
import Beverages from "./pages/Bevereges/Bevereges";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Entradas" element={<Appetizers />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/sobremesas" element={<Desserts/>} />
        <Route path="/combos" element={<Combos/>} />
        <Route path="/bebidas" element={<Beverages/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
