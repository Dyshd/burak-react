// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import HomePage from "./screens/homePage";
// import HomePageReducer from "./screens/homePage/slice";
// // import reduxLogger from "redux-logger"; 

// export const store = configureStore({
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
//   reducer: {
//     homePage: HomePageReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;



import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import { logger } from "redux-logger"; 
import type { Middleware } from "@reduxjs/toolkit"; // ✅ qo‘shimcha
import ProductsPageReducer from "./screens/productsPage/slice";

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger as Middleware), // ✅ cast qildik
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
