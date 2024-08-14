const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gradient-to-r p-6">
      <div className="lg:w-1/2 w-full max-w-xl bg-yellow-100 p-8 rounded-lg shadow-xl m-4">
        <h2 className="text-3xl font-bold mb-4">About Our Store</h2>
        <p className="text-base text-gray-700 leading-7 mb-4">
          At <span className="text-orange-600 font-semibold">E-SHOP</span>, we believe that everyone deserves access to high-quality products without breaking the bank. That is why we are dedicated to offering a wide range of at prices you can afford.
        </p>
        <p className="text-base text-gray-700 leading-7 mb-4">
          Our journey started with a simple goal: to make shopping for easy, affordable, and enjoyable. Whether you are looking for the latest trends or everyday essentials, we have got something for everyone.
        </p>
        <p className="text-base text-gray-700 leading-7">
          We take pride in our commitment to quality and customer satisfaction. Our team is always here to help, ensuring you have the best shopping experience possible. Thank you for choosing E-SHOP - where quality meets affordability.
        </p>
      </div>

      <div className="lg:w-1/3 w-full max-w-xl bg-orange-100 p-8 rounded-lg shadow-xl m-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Shop With Us?</h3>
        <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
          <li><strong className="text-orange-600">Affordable Prices:</strong> We offer competitive prices on all our products.</li>
          <li><strong className="text-orange-600">Quality Products:</strong> Our products are carefully selected to ensure they meet our quality standards.</li>
          <li><strong className="text-orange-600">Customer Support:</strong> Our team is here to assist you with any questions or concerns.</li>
          <li><strong className="text-orange-600">Wide Selection:</strong> From trendy items to everyday essentials, we have it all.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
