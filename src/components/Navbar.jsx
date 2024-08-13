import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FcSearch } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  const [modelOpen, setModelOpen] = useState(false);
  const [login, setLogin] = useState(true);

  const openSignUp = () => {
    setLogin(false);
    setModelOpen(true);
  };

  const openLogin = () => {
    setLogin(true);
    setModelOpen(true);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-SHOP</Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form>
            <input
              className="w-full border py-2 px-4"
              placeholder="Search Product"
              type="text"
            />
            <FcSearch className="absolute top-3 right-3" />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <HiShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setModelOpen(true)}
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <BiUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/shop">
          Shop
        </Link>
        <Link className="hover:underline" to="/">
          Contact
        </Link>
        <Link className="hover:underline" to="/">
          About
        </Link>
      </div>

      <Modal modalOpen={modelOpen} setModalOpen={setModelOpen}>
        {login ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
