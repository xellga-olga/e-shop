import { FaGift, FaHeadset, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBillWave } from 'react-icons/fa6'

const InfoSection = () => {

   const infoItems = [
      {
        icon: <FaShippingFast className='text-3xl text-red-600' />,
        title: 'Free Shipping',
        desc: 'Enjoy free shipping on all orders without any minimum purchase requirement.',
      },
      {
        icon: <FaHeadset className='text-3xl text-red-600' />,
        title: 'Support 24/7',
        desc: 'Our customer support team is available around the clock to assist you with any queries.',
      },
      {
        icon: <FaMoneyBillWave className='text-3xl text-red-600' />,
        title: '100% Money Back',
        desc: 'If you are not satisfied with your purchase, we offer a 100% money-back guarantee.',
      },
      {
         icon: <FaTag className='text-3xl text-red-600' />,
         title: 'Discount',
         desc: 'Enjoy the best prices on your products',
      },
      {
         icon: <FaGift className='text-3xl text-red-600' />,
         title: 'Gift Cards',
         desc: 'Purchase gift cards for your loved ones and let them choose their favorite products.',      
      }
   ];
    
  return (
   <div className='bg-white pb-8 pt-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-5'>
         {infoItems.map((item, index) => (
            <div key={index} className='flex flex-col text-center items-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
               {item.icon}
               <h3 className='mt-4 text-xl font-semibold'>
                  {item.title}
               </h3>
               <p className='mt-2 text-gray-600'>{item.desc}</p>
            </div>
         ))}
      </div>
   </div>
  )
}

export default InfoSection
