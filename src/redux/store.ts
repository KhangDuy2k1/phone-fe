import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./phone"
import userReducer from "./user";
import orderItemReducer from "./orderItem";
export const store = configureStore({
  reducer: {
    phone: phoneReducer,
    user: userReducer,
    orderItem: orderItemReducer
  },
});
