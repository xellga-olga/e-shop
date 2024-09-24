import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FcSearch } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi2";
import { BiUser,  BiMenu } from "react-icons/bi";
import { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  const [modelOpen, setModelOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const openSignUp = () => {
    setLogin(false);
    setModelOpen(true);
  };

  const openLogin = () => {
    setLogin(true);
    setModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-SHOP</Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4"
              placeholder="Search Product"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <FcSearch className="absolute top-2 right-2 md:top-3 md:right-3 text-lg md:text-xl" />
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
          <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <BiMenu className="text-xl" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center justify-center bg-white shadow-md py-4 text-sm font-bold space-y-4 md:hidden">
          <Link className="hover:underline" to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link className="hover:underline" to="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link className="hover:underline" to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link className="hover:underline" to="about/" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>
      )}

      <div className="hidden md:flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/shop">
          Shop
        </Link>
        <Link className="hover:underline" to="/contact">
          Contact
        </Link>
        <Link className="hover:underline" to="about/">
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
