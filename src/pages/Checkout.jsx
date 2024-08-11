import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [billing, setBilling] = useState(true);
  const [shipping, setShipping] = useState(false);
  const [payment, setPayment] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState('cod');

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

          { /* PAYMENT METHOD  */}
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
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
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
                  checked={paymentMethod === 'dc'}
                  onChange={() => setPaymentMethod('dc')}
                  className="mr-2"
                />
                <label
                  htmlFor="dc"
                  className="block text-sm ml-2 font-medium text-gray-700"
                >
                  Debit Card
                </label>
              </div>
              <p className="text-sm text-gray-700">Selected Payment Method: {paymentMethod}</p>

            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          {/* Additional content for checkout summary or order details */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
