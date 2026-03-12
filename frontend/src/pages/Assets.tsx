import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { type Asset, allocateAsset } from '../store/cartSlice';

export default function Assets() {
  const [hardware, setHardware] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true); // Local state for UI
  const dispatch = useDispatch(); // Redux dispatcher

  useEffect(() => {
    // Fetching from Drizzle backend
    axios.get('http://localhost:3001/v1/api/assets').then((res) => {
      setHardware(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-xl font-bold">Loading assets...</div>;

  return (
    <div className="py-8 mx-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Hardware Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hardware.map((item) => (
          <div key={item.id} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-500 mb-4">{item.category} | Stock: {item.stock}</p>
            <button 
              onClick={() => dispatch(allocateAsset(item))}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Allocate to Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}