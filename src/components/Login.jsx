const Login = ({ openSignUp }) => {
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-orange-800 mb-6 text-center">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label
              htmlFor="remember"
              className="flex items-center text-sm text-gray-700"
            >
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="ml-2">Remember Me</span>
            </label>
            <a
              href="#"
              className="text-sm text-orange-600 hover:text-orange-800"
            >
              Forgot Password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-md shadow-md hover:from-orange-600 hover:to-red-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-700">Dont Have an Account?</span>
          <button
            onClick={openSignUp}
            className="ml-2 text-sm text-orange-600 hover:text-orange-800 font-medium"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
