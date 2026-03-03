import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-green-900 w-full px-6 py-4 mt-0 mb-0 shadow-md flex-wrap">

      
        <div className="text-white text-2xl font-extrabold tracking-wide">
          VegMarket
        </div>

        
        <div className="flex gap-8 text-white text-md font-medium">
          <Link
            to="/"
            className="hover:text-green-300 transition duration-200"
          >
            Dashboard
          </Link>

          <Link
            to="/prices"
            className="hover:text-green-300 transition duration-200"
          >
            Vegetable Prices
          </Link>

          <Link
            to="/notify"
            className="hover:text-green-300 transition duration-200"
          >
            Notify Shop
          </Link>
        </div>

        
        <div className="flex gap-5 text-white text-md font-medium">
          <Link
            to="/login"
            className="hover:text-green-300 transition duration-200"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-600 px-4 py-1.5 rounded-md hover:bg-green-700 transition duration-200"
          >
            Register
          </Link>
        </div>

      </header>
    </>
  );
};

export default Header;
