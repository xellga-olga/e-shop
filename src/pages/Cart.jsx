import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images/emptycart.png";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 0001");
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch()

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-96 ">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col justify-between mt-8 space-x-10 md:flex-row">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b text-xs items-center font-bold mb-4">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between border-b p-3"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>${product.price}</p>
                      <div className="flex border items-center justify-center">
                        <button className="border-r text-xl font-bold px-1.5"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="px-2 text-l">{product.quantity}</p>
                        <button className="border-r text-xl font-bold px-1.5"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button 
                        className="text-red-600 hover:text-red-800"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex mb-5 justify-between border-b pb-1">
                <span className="text-sm">TOTAL ITEMS:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Total Price: </span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  shipping to{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button 
                  onClick={() => setModalOpen(true)}
                  className="text-orange-500 hover:underline mt-1 ml-2">
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full text-white bg-red-600 py-2 hover:bg-red-800">
                Proced to Checkout
              </button>
            </div>
          </div>
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <ChangeAddress setAddress={setAddress} setModalOpen={setModalOpen}/>
          </Modal>
        </div>
      ) : null}
      {cart.products.length === 0 && (
        <div className="flex justify-center w-full">
          <img src={EmptyCart} alt="emptycart" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
