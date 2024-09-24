import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            We are an online store providing a wide range of products for all
            your needs. Shop with us and enjoy high-quality products and great
            customer service.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook className="text-2xl md:text-xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaTwitter className="text-2xl md:text-xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="text-2xl md:text-xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-200 text-sm">Email: eshopsupport@gmail.com</p>
          <p className="text-gray-200 text-sm">Phone: +38 (066) 830-88-25</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-xs md:text-sm">
        © 2024 E-SHOP by Olya Pla. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
