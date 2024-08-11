import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [billing, setBilling] = useState(true);
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
      <h3 className="text-2xl font-semibold mb-4 text-cyan-700		">CHECKOUT</h3>
      <div className="flex flex-col justify-between mt-8 space-x-0 md:space-x-10 md:flex-row">
        <div className="md:w-2/3">
          <div className="border p-4 mb-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4" onClick={() => setBilling(!billing)}>
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billing ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billing ? "" : "hidden"}`}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && <p className="text-rose-500	text-sm mt-1">{error}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
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
