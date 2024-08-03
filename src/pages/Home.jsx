import { Categories } from '../assets/mockData';
import HeroImage from '../assets/Images/hero-image.jpg';
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';

const Home = () => {
  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row md:space-x-4'>
        <div className='w-full md:w-3/12 mb-8 md:mb-0'>
          <div className='bg-red-600 text-white text-xs px-3 py-2'>SHOP BY CATEGORIES</div>
          <ul className='space-y-3 bg-gray-100 p-5 border border-gray-200 rounded-md'>
            {Categories.map((category, index) => (
              <li key={index} className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 bg-red-500 mr-2 rounded-full'></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className='w-full md:w-9/12 md:mt-0 h-96 mt-8 relative'>
          <img src={HeroImage} alt='HeroImage' className='h-full w-full' />
          <div className='absolute top-16 left-8'>
            <p className='mb-4 text-gray-600'>Code With OlyaPla</p>
            <h2 className='text-3xl font-bold'>WELCOME TO E-SHOP</h2>
            <p className='text-gray-800 text-xl mt-2.5 font-bold'>MILLIONS + PRODUCTS</p>
            <button className='text-white bg-red-600 px-8 py-1.5 mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
    </div>
  );
};

export default Home;
