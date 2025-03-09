import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fields from "./pages/Fields";
import Table from "./pages/Table";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fields" element={<Fields />} />
      <Route path="/table" element={<Table />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
