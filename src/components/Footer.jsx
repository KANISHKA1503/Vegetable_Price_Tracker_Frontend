const Footer = () => {
  return (
    <>
      <footer className="bg-green-950 text-green-100 mt-10">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">

          <div className="flex flex-col gap-3 md:w-1/3">
            <h2 className="text-2xl font-extrabold tracking-wide text-white">
              VegMarket
            </h2>
            <p className="text-sm leading-relaxed text-green-200">
              A simple digital platform connecting farmers and market shops
              to share daily vegetable prices and shipment updates.
            </p>
          </div>

    
          <div className="flex flex-col gap-3 md:w-1/3">
            <h3 className="text-lg font-semibold text-white">
              Explore
            </h3>

            <span className="text-sm hover:text-green-300 cursor-pointer">
              Dashboard
            </span>

            <span className="text-sm hover:text-green-300 cursor-pointer">
              Vegetable Prices
            </span>

            <span className="text-sm hover:text-green-300 cursor-pointer">
              Notify Shop
            </span>

            <span className="text-sm hover:text-green-300 cursor-pointer">
              Login / Register
            </span>
          </div>

        
          <div className="flex flex-col gap-3 md:w-1/3">
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <span className="text-sm text-green-200">
              📍 Gandhi Market , Oddanchatram
            </span>

            <span className="text-sm text-green-200">
              📧 support@vegmarket.com
            </span>

            <span className="text-sm text-green-200">
              📞 +91 98765 43210
            </span>
          </div>
        </div>

        
        <div className="border-t border-green-800 text-center py-4 text-sm text-green-300">
          © {new Date().getFullYear()} VegMarket. All rights reserved.
        </div>

      </footer>
    </>
  );
};

export default Footer;
