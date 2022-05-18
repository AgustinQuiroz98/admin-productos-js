import ProductManager from "./components/ProductManager";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductShow from "./components/ProductShow";
import Editproduct from "./components/EditProduct";
import Deleteproduct from "./components/DeleteProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductManager />} />
          <Route path="/:_id" element={<ProductShow />} />
          <Route path="/edit/:_id" element={<Editproduct />} />
          <Route path="/delete/:_id" element={<Deleteproduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
