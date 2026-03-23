import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Planes } from "../pages/Planes/Planes"

console.log("ESTE ES EL ROUTER CORRECTO");


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };