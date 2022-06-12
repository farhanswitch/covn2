import { ICovid } from "../src/Interfaces";
import { GetServerSideProps } from "next";
import { fetchCovidData } from "../src/fetchData";
import { useAppDispatch, useAppSelector } from "../src/app/hooks/redux-hooks";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsError,
  setErrorRes,
  selectIsError,
} from "../src/app/features/error-resp/axios-error";
import { setCovidData } from "../src/app/features/covid/data-covid";
import { selectDataCovid } from "../src/app/features/covid/data-covid";
import { AxiosError } from "axios";
import { wrapper } from "../src/app/store";
interface ITestProps {
  dataCovid: ICovid | null;
  error: null | AxiosError;
  isError: boolean;
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const data = store.getState();
    const dataCovid = data.covid;
    const { error, isError } = data.axiosError;
    return {
      props: {
        dataCovid,
        error,
        isError,
      },
    };
  }
);
const test = ({ dataCovid, error, isError }: ITestProps) => {
  console.log(isError);
  const dispatch = useDispatch();
  dispatch(setIsError(true));
  console.log(useSelector(selectIsError));
  return <h1>Covid</h1>;
};

export default test;
