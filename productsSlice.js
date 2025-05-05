import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Snake Plant", price: 25, category: "Low-light", image: "snake-plant.jpg" },
    { id: 2, name: "Monstera", price: 40, category: "Tropical", image: "monstera.jpg" },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;