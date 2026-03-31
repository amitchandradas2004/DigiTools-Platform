import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductCard = ({ Product, SelectCard, setSelectCard }) => {
  const [isCards, setIsCards] = useState(true);

  const handelClickBtn = () => {
    if (isCards) {
      setIsCards(false);
      setSelectCard([...SelectCard, Product]);
      return toast.success("Card added successfully!");
    }
    toast.error("Card Already Selected!");
  };

  return (
    <>
      <div className="relative card card-body rounded-2xl border border-gray-300 shadow-xl space-y-5 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-cyan-100/50 ">
        {/* batch */}
        <div
          className={`absolute top-4 right-4 rounded-full px-4 py-2 w-fit ${Product.tag === "New" ? "bg-green-300" : Product.tag === "Best Seller" ? "bg-[#FEF3C6]" : "bg-gray-300"}`}
        >
          <span className="font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            {Product.tag}
          </span>
        </div>

        <div className="rounded-full p-4 border border-gray-300  w-fit">
          <img src={Product.icon} alt="" className="w-10 object-contain" />
        </div>
        <h3 className="text-2xl font-bold">{Product.name}</h3>
        <p className="opacity-90 text-xl font-semibold">
          {Product.description}
        </p>
        <h2 className="text-2xl font-bold">
          ${Product.price}
          <span className="opacity-90 text-xl font-semibold">
            /{Product.period}
          </span>
        </h2>
        <div>
          {Product.features.map((item, ind) => (
            <div key={ind}>
              <div className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <p className="text-xl font-semibold ">{item}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handelClickBtn}
          className="btn rounded-full py-6 text-xl text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none"
        >
          {isCards ? "Buy Now" : "Card Added"}
        </button>
      </div>
    </>
  );
};

export default ProductCard;
