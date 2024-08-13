import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-4 px-2 md:px-8 lg:px-12 min-h-64 bg-gradient-to-br mb-12">
      <h2 className="text-3xl font-semibold text-green-600 mb-4">
        Thank you for your order!
      </h2>
      <p className="text-lg text-green-500 mb-4">
        Your order has been placed successfully. You will receive an email
        confirmation shortly.
      </p>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Order Summary
        </h3>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Order Number:</strong> {order.orderNumber}
        </p>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">
            Shipping Information
          </h4>
          <p className="text-sm text-gray-700">
            {order.shippingInformation.address}
          </p>
          <p className="text-sm text-gray-700">
            {order.shippingInformation.city}
          </p>
          <p className="text-sm text-gray-700">
            {order.shippingInformation.zip}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Items Ordered
          </h4>
          {order.products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-orange-50 p-2 rounded-lg shadow-md mb-1"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {product.name} x {product.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  ${product.price.toFixed(2)} x {product.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 pt-2 flex justify-between ">
          <span className="text-lg font-semibold text-gray-800">
            Total Price:
          </span>
          <span className="text-xl font-bold text-gray-900 ml-2">
            ${order.totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between mt-8">
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-1.5 px-4 rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 transition duration-300">
            Order Tracking
          </button>
          <button
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-1.5 px-4 rounded-lg shadow-md hover:from-red-600 hover:to-orange-600 transition duration-300"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
