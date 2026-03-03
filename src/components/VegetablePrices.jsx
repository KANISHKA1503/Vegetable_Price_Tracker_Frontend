import { useEffect, useState } from "react";
import axios from "axios";

const VegetablePrices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
   // const token = sessionStorage.getItem("token");

    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/prices`);
    // , {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });

    const sortedData = data.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
    setPrices(data);
  }; 

  return (
    <div className="p-6 min-h-screen bg-green-50">
      <h2 className="text-2xl font-bold mb-6 text-green-700">
        Today’s Vegetable Prices
      </h2>

      <div className="flex flex-col gap-4">
        {prices.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <span><strong>{item.vegetable}</strong></span>
            <span>₹{item.minPrice} - ₹{item.maxPrice}</span>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetablePrices;
