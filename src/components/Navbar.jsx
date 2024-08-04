import { Link } from 'react-router-dom'

import { FcSearch } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";


const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center'>
         <div className='text-lg font-bold'>
            <Link to='/'>
              E-SHOP
            </Link>
         </div>

         <div className='relative flex-1 mx-4'>
            <form>
               <input className='w-full border py-2 px-4' placeholder='Search Product' type='text' />
               <FcSearch className='absolute top-3 right-3'/>
            </form>
         </div>

         <div className='flex items-center space-x-4'>
            <Link to='/cart'>
               <HiShoppingCart className='text-lg' />
            </Link>
            <button className='hidden md:block'>
               Login | Register
            </button>
            <button className='block md:hidden'>
               <BiUser />
            </button>
         </div>
      </div>

      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
         <Link className='hover:underline' to='/'>
            Home
         </Link>
         <Link className='hover:underline' to='/shop'>
            Shop
         </Link>
         <Link className='hover:underline' to='/'>
            Contact
         </Link>
         <Link className='hover:underline' to='/'>
            About
         </Link>
      </div>
    </nav>
  )
}

export default Navbar
