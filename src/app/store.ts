import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { covidReducer } from "./features/covid/data-covid";
import { axiosErrorReducer } from "./features/error-resp/axios-error";
import { createWrapper } from "next-redux-wrapper";
import { Action } from "redux";
const makeStore = () =>
  configureStore({
    reducer: {
      covid: covidReducer,
      axiosError: axiosErrorReducer,
    },
  });

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export const wrapper = createWrapper<RootStore>(makeStore);
export type AppDispatch = ReturnType<RootStore["dispatch"]>;
