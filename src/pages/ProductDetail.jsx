import { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice"; 

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  const dispatch = useDispatch(); 

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  if (!product)
    return <div className="text-center text-xl py-10">Loading...</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* PRODUCT IMAGE */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-50 p-4 rounded-lg shadow-lg">
          <img
            className="h-full max-h-96 object-contain"
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="md:w-1/2 flex flex-col justify-center gap-y-4 p-4">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            {product.name}
          </h2>
          <p className="text-2xl font-bold text-red-600 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center mb-6 gap-x-4">
          
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <div className="flex flex-col gap-y-4 mt-8 text-gray-600">
            <p className="flex items-center">
              <FaCarSide className="mr-2" />
              Fast Delivery (1-3 days)
            </p>

            <p className="flex items-center">
              <FaQuestion className="mr-2 text-xl text-red-600" />
              Have a Question?
              <Link
                to="/contact"
                className="text-red-600 hover:underline ml-2"
              >
                Ask Us
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Product Description
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {product.description
            ? product.description
            : "Detailed product description goes here."}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
