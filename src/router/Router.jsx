import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Planes } from "../pages/Planes/Planes"




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