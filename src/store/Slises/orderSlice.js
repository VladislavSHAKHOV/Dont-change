// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {
    user: {},
    orderID: "",
  },
};

const generateRandomID = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomID = "";
  for (let i = 0; i < 7; i++) {
    randomID += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomID;
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.order.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
      console.log(state.order.user);
    },
    setOrderID: (state) => {
      const randomID = generateRandomID();
      state.order.orderID = randomID;
      localStorage.setItem("orderID", randomID);
      console.log(state.order.orderID);
    },
    setUserID: (state) => {
      const userID = localStorage.getItem("orderID");
      state.order.orderID = userID;
    },
  },
});

export const { setUser, setOrderID, setUserID, setTimerActive } = orderSlice.actions;
export default orderSlice.reducer;
