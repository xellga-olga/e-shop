const Contact = () => {
  return (
    <div className="flex justify-center items-center pt-10 pb-16  bg-gradient-to-br p-2">
      <div className="w-full max-w-lg bg-yellow-100 p-5 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-6 text-center">
          We would love to hear from you! Please fill out the form below to get in touch.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full p-2 border border-gray-500 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full p-2 border border-gray-500 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 w-full p-2 border border-gray-500 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:from-orange-600 hover:to-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
