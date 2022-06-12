import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { AxiosError } from "axios";
import { HYDRATE } from "next-redux-wrapper";


interface IAxiosError {
  error: AxiosError | null ;
  isError: boolean;
}
const initialState: IAxiosError = {
  error: null,
  isError: false,
};

export const axiosErrorSlice = createSlice({
  name: "axiosError",
  initialState,
  reducers: {
    setErrorRes: (state, action: PayloadAction<AxiosError>) => {
      state.error = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.axiosError.error) {
        return state;
      }
      state.error = action.payload.axiosError.error;
      state.isError = action.payload.axiosError.isError;
    },
  },
});

export const { setErrorRes, setIsError } = axiosErrorSlice.actions;
export const selectAxiosError = (state: RootState) => state.axiosError.error;
export const selectIsError = (state: RootState) => state.axiosError.isError;

export const axiosErrorReducer = axiosErrorSlice.reducer;
