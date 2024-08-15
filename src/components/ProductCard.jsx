import { FaStar } from "react-icons/fa"
import { addToCart } from "../redux/cartSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"


const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert('Product Added Succesfully!')
  }

  return (
    <Link to={`/product/${product.id}`}>
    <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full mb-4 object-contain"/>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>

      <div className="flex mt-2 items-center">
         <FaStar className="text-yellow-500"></FaStar>
         <FaStar className="text-yellow-500"></FaStar>
         <FaStar className="text-yellow-500"></FaStar>
         <FaStar className="text-yellow-500"></FaStar>
         <FaStar className="text-yellow-500"></FaStar>
      </div>

      <div onClick={(e) => handleAddToCart(e, product)} className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full overflow-hidden hover:w-24 transition-all duration-300 ease-in-out">
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block ml-1">Add to cart</span>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
