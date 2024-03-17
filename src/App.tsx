import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Appetizers from "./pages/Appetizers/Appetizers";
import Login from "./pages/Login/Login";
import Desserts from "./pages/Desserts/Desserts";
import Combos from "./pages/Combos/Combos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appetizers" element={<Appetizers />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/desserts" element={<Desserts/>} />
        <Route path="/combos" element={<Combos/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
