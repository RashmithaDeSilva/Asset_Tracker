import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Asset {
  id: number;
  name: string;
  category: string;
}

const initialState: { allocatedItems: Asset[] } = {
  allocatedItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    allocateAsset: (state, action: PayloadAction<Asset>) => {
      // Prevent duplicates
      if (!state.allocatedItems.find(item => item.id === action.payload.id)) {
        state.allocatedItems.push(action.payload);
      }
    },
    removeAsset: (state, action: PayloadAction<number>) => {
      state.allocatedItems = state.allocatedItems.filter(item => item.id !== action.payload);
    }
  }
});

export const { allocateAsset, removeAsset } = cartSlice.actions;
export default cartSlice.reducer;