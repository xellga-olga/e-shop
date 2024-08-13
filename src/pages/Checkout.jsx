import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [billing, setBilling] = useState(true);
  const [shipping, setShipping] = useState(false);
  const [payment, setPayment] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cart = useSelector((state) => state.cart);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-96">
      <h3 className="text-2xl font-semibold mb-8 text-cyan-700">CHECKOUT</h3>
      <div className="flex flex-col justify-between mt-8 space-x-0 md:space-x-10 md:flex-row">
        <div className="md:w-2/3 space-y-6">
          {/* BILLING INFORMATION */}
          <div className="border p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setBilling(!billing)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Billing Information
              </h3>
              {billing ? (
                <FaAngleUp className="text-gray-600" />
              ) : (
                <FaAngleDown className="text-gray-600" />
              )}
            </div>

            <div className={`mt-4 space-y-4 ${billing ? "" : "hidden"}`}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your Name"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && <p className="text-rose-500 text-sm mt-1">{error}</p>}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Phone #"
                  pattern="[0-9]*"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* SHIPPING INFORMATION */}
          <div className="border p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShipping(!shipping)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Shipping Information
              </h3>
              {shipping ? (
                <FaAngleUp className="text-gray-600" />
              ) : (
                <FaAngleDown className="text-gray-600" />
              )}
            </div>

            <div className={`mt-4 space-y-4 ${shipping ? "" : "hidden"}`}>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter Your Address"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter Your City"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder="Enter Your Zip Code"
                  pattern="[0-9]*"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* PAYMENT METHOD  */}
          <div className="border p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPayment(!payment)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Payment Method
              </h3>
              {payment ? (
                <FaAngleUp className="text-gray-600" />
              ) : (
                <FaAngleDown className="text-gray-600" />
              )}
            </div>

            <div className={`mt-4 space-y-4 ${payment ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  id="cod"
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="mr-2"
                />
                <label
                  htmlFor="cod"
                  className="block text-sm font-medium ml-2 text-gray-700"
                >
                  Cash on Delivery
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="dc"
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                  className="mr-2"
                />
                <label
                  htmlFor="dc"
                  className="block text-sm ml-2 font-medium text-gray-700"
                >
                  Debit Card
                </label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Debit Card Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Card Number
                      </label>
                      <input
                        id="cardNumber"
                        type="text"
                        placeholder="Enter Card Number"
                        className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cardHolderName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Card Holder Name
                      </label>
                      <input
                        id="cardHolderName"
                        type="text"
                        placeholder="Enter Card Holder Name"
                        className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="expireDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expire Date
                        </label>
                        <input
                          id="expireDate"
                          type="text"
                          placeholder="MM/YY"
                          className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cvv"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CVV
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          placeholder="CVV"
                          className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg border relative">
          <h3 className="text-lg font-semibold text-gray-600 p-2 rounded-lg border-b">
            Order Summary
          </h3>
          <div className="space-y-4 border-t border-gray-200 pt-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center rounded-lg p-2 border bg-gray-50 shadow-sm hover:bg-gray-100 transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-md shadow"
                />
                <div className="flex-1 ml-4">
                  <h4 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    ${product.price.toFixed(2)} x {product.quantity}
                  </p>
                </div>
                <span className="text-sm font-light text-gray-600">
                  ${(product.price * product.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <span className="text-lg font-semibold text-gray-800">
              Total Price:
            </span>
            <span className="text-xl font-bold text-gray-900 ml-2">
              ${cart.totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="mt-6 w-full">
            <button className="w-full text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 p-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
              <FaShoppingCart className="inline mr-2" />
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
