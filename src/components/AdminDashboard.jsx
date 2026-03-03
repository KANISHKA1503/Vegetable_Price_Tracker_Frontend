import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [vegetable, setVegetable] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [date, setDate] = useState("");
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    const token = sessionStorage.getItem("token");

    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/shipments`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    setShipments(data);
  };

  const handlePriceSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");

    await axios.post(
      `${import.meta.env.VITE_API_URL}/prices`,
      { vegetable, minPrice, maxPrice, date },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    toast.success("Price updated");
    setVegetable("");
    setMinPrice("");
    setMaxPrice("");
    setDate("");
  };

  return (
    <div className="p-6 min-h-screen bg-green-50">
      <h2 className="text-2xl font-bold mb-6 text-green-700">
        Admin Dashboard
      </h2>

    
      <form
        onSubmit={handlePriceSubmit}
        className="bg-white p-4 rounded shadow mb-8 flex gap-4 flex-wrap"
      >
        <input placeholder="Vegetable" value={vegetable}
          onChange={(e) => setVegetable(e.target.value)} />
        <input placeholder="Min Price" value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)} />
        <input placeholder="Max Price" value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)} />
        <input type="date" value={date}
          onChange={(e) => setDate(e.target.value)} />
        <button className="bg-green-600 text-white px-4 rounded">
          Set Price
        </button>
      </form>

    
      <h3 className="text-xl font-bold mb-4">Farmer Notifications</h3>

      {shipments.map((item) => (
        <div
          key={item._id}
          className="bg-white p-4 mb-3 rounded shadow"
        >
          <p><strong>Farmer:</strong> {item.farmerId.name}</p>
          <p><strong>Vegetable:</strong> {item.vegetable}</p>
          <p><strong>Quantity:</strong> {item.quantity} {item.unit}</p>
          <p><strong>Date:</strong> {new Date(item.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
