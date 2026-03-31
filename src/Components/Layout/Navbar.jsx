import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineClear } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
const Navbar = ({ SelectCard }) => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="border-b border-gray-300 bg-white">
        <div className="flex items-center justify-between container mx-auto px-2 py-5">
          {/* navlogo */}
          <div className="flex items-center gap-2  text-black">
            <div className="lg:hidden" onClick={() => setActive(!active)}>
              {active ? (
                <RiMenu2Fill className="text-2xl" />
              ) : (
                <MdOutlineClear className="text-2xl" />
              )}
              <ul
                className={` absolute font-semibold card card-body shadow-sm  ${active ? "-top-50" : "top-20"}  `}
              >
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <h2 className=" text-2xl md:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </h2>
          </div>
          <ul className="hidden lg:flex items-center gap-5 font-semibold">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-black "
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item font-bold text-[#9514FA] bg-white border-none">
                  {SelectCard.length}
                </span>
              </div>
            </div>
            <span className="font-semibold text-black">Login</span>
            <button className="btn font-bold text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
