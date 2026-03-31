import { IoPlayOutline } from "react-icons/io5";
import HeaderIcon from "../../assets/Header-icon.png";
import BannerImg from "../../assets/banner.png";

const Header = () => {
  return (
    <>
      <section className="container mx-auto px-2 grid lg:grid-cols-2 items-center justify-center  gap-10 lg:gap-50 py-20">
        {/* left section */}
        <div className="space-y-5">
          <div className="flex items-center bg-base-300 w-fit p-2 rounded-full px-5">
            <img src={HeaderIcon} alt="" className="mr-2 " />
            <p className="font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h2 className="text-5xl lg:text-7xl font-extrabold ">
            Supercharge Your{" "}
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h2>
          <p>
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. Explore{" "}
            <br />
            Products
          </p>
          <div className="flex items-center gap-5">
            <button className="btn py-6 font-bold text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Explore Products
            </button>
            <button className="btn border border-[#9514FA] py-6 font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              <IoPlayOutline color="#4F39F6" size={20} />
              Watch Demo
            </button>
          </div>
        </div>
        {/* right section */}
        <div className="flex justify-center">
          <img src={BannerImg} alt="Banner Image" />
        </div>
      </section>

      <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 mb-30">
        <div className="container mx-auto px-2 grid md:grid-cols-3 gap-5 items-center justify-center">
          <div className="text-center md:border-r-2 border-white space-y-3">
            <p className="text-6xl font-extrabold text-white">50K+</p>
            <h2 className="text-2xl font-medium text-gray-400">Active Users</h2>
          </div>
          <div className="text-center md:border-r-2 border-white space-y-3">
            <p className="text-6xl font-extrabold text-white">200+</p>
            <h2 className="text-2xl font-medium text-gray-400">
              Premium Tools
            </h2>
          </div>
          <div className="text-center space-y-3">
            <p className="text-6xl font-extrabold text-white">4.9</p>
            <h2 className="text-2xl font-medium text-gray-400">Rating</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
