import { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  if (!product) return <div>Loading .....</div>;
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* PRODUCT IMAGE */}
        <div className="md:w-1/2 py-4 flex justify-center shadow-md md:px-8 h-96">
          <img className="h-full" src={product.image} alt={product.name} />
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="md:w-1/2 py-4 flex items-center flex-col shadow-md md:px-8 h-96 gap-y-2">
          <h2 className="mb-2 text-3xl font-semibold">{product.name}</h2>
          <p className="mb-4 text-gray-800 text-xl font-semibold">
            ${product.price}
          </p>

          <div className="flex items-center mb-4 gap-x-2">
            <input
              id="quantity"
              type="number"
              min="1"
              className="border p-1 w-16"
            />
            <button className="text-white bg-red-600 px-4 py-1.5 hover:bg-red-800">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              DELIVERY & RETURN
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              ASK & QUESTION
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
         <h3 className="text-xl mb-2 font-bold">
            Product Description
         </h3>
         <p>Product description will goes here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
