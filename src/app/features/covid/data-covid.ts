import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ICovid } from "../../../Interfaces";
import { HYDRATE } from "next-redux-wrapper";

interface IDataCovid {
  data: ICovid | null;
}
const initialState: IDataCovid = {
  data: null,
};
export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setCovidData: (state:any, action: PayloadAction<ICovid>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.covid.data) {
        return state;
      }
      state.data = action.payload.covid.data;
    },
  },
});

export const { setCovidData } = covidSlice.actions;
export const selectDataCovid = (state: RootState) => state.axiosError;
export const covidReducer = covidSlice.reducer;
