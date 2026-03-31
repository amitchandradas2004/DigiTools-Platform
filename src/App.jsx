import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Products from "./Components/Pages/Products";
import GetStarted from "./Components/ui/GetStarted";
import Header from "./Components/ui/Header";
import Pricing from "./Components/ui/Pricing";
import Workflow from "./Components/ui/Workflow";

const ProductsData = async () => {
  const res = await fetch("/ProductsCard.json");
  return res.json();
};
const ProductsPromis = ProductsData();
function App() {
  const [SelectCard, setSelectCard] = useState([]);
  return (
    <>
      <div>
        <Navbar SelectCard={SelectCard} />
        <Header />
        <Products
          ProductsPromis={ProductsPromis}
          SelectCard={SelectCard}
          setSelectCard={setSelectCard}
        />
        <GetStarted />
        <Pricing />
        <Workflow />
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
