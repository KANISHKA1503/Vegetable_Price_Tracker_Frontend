import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Notify = () => {
  const [vegetable, setVegetable] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("bags");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = sessionStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const { data } = await axios.post(
        "http://localhost:3000/shipments/notify",
        {
          vegetable,
          quantity,
          unit
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success(data.message);

      setVegetable("");
      setQuantity("");
      setUnit("bags");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to notify shop"
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-green-50 shadow-lg rounded-xl p-6 w-[350px] flex flex-col gap-4 border"
      >
        <h2 className="text-xl font-bold text-center text-green-700">
          Notify Shop
        </h2>

        <input
          type="text"
          placeholder="Vegetable name"
          value={vegetable}
          onChange={(e) => setVegetable(e.target.value)}
          className="border p-2 rounded hover:bg-white"
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border p-2 rounded hover:bg-white"
          required
        />

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border p-2 rounded hover:bg-white"
        >
          <option value="bags">Bags</option>
          <option value="boxes">Boxes</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Notify Shop
        </button>
      </form>
    </div>
  );
};

export default Notify;
