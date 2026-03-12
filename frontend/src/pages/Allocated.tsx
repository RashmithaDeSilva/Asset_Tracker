import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../store/store';
import { removeAsset } from '../store/cartSlice';

export default function Allocated() {
  // Reading global state
  const allocatedItems = useSelector((state: RootState) => state.cart.allocatedItems);
  const dispatch = useDispatch();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Project Workspace</h1>
      {allocatedItems.length === 0 ? (
        <p className="text-gray-500">No hardware allocated yet.</p>
      ) : (
        <ul className="space-y-4">
          {allocatedItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border">
              <span className="font-medium">{item.name}</span>
              <button 
                onClick={() => dispatch(removeAsset(item.id))}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}