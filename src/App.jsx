import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicePage from "./pages/InvoicePage";
import CustomerPage from "./pages/CustomerPage";
import StatiscticPage from "./pages/StatiscticPage"
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/invoice" element={<InvoicePage/>}/>
        <Route path="/customers" element={<CustomerPage/>}/>
        <Route path="/statistics" element={<StatiscticPage/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
