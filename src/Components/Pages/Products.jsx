import React, { use, useState } from "react";
import ProductCard from "./ProductCard";
import Cards from "./Cards";

const Products = ({ ProductsPromis, SelectCard, setSelectCard }) => {
  const ProductsCards = use(ProductsPromis);
  const [activeBtn, setactiveBtn] = useState("Products");

  return (
    <>
      <section className="bg-white py-10">
        <div className="container mx-auto px-2 text-black ">
          <header className="text-center space-y-5">
            <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
            <p className="text-gray-500">
              Choose from our curated collection of premium digital products
              designed <br /> to boost your productivity and creativity.
            </p>
          </header>
          {/* btn Togoling */}
          <div className="py-10 flex items-center justify-center  gap-1  ">
            <button
              onClick={() => setactiveBtn("Products")}
              className={`btn  rounded-full font-semibold border-none ${activeBtn === "Products" ? "rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "border-none"}`}
            >
              Products
            </button>
            <button
              onClick={() => setactiveBtn("Card")}
              className={`btn rounded-full font-semibold border-none ${activeBtn === "Card" ? "rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "border-none"}`}
            >
              Cart ({SelectCard.length})
            </button>
          </div>

          {/* crds */}
          {activeBtn == "Products" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 pb-20 ">
              {ProductsCards.map((Product) => (
                <ProductCard
                  key={Product.id}
                  Product={Product}
                  SelectCard={SelectCard}
                  setSelectCard={setSelectCard}
                />
              ))}
            </div>
          ) : (
            <Cards SelectCard={SelectCard} setSelectCard={setSelectCard} />
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
