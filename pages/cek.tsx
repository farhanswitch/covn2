import { ICovid } from "../src/Interfaces";
import { wrapper } from "../src/app/store";
import { selectDataCovid } from "../src/app/features/covid/data-covid";
import { useSelector } from "react-redux";
interface ICek {
  data: ICovid;
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const data = useSelector(selectDataCovid);
    console.log(data);
    return {
      props: { data },
    };
  }
);

export default function cek({ data }: ICek) {
  return <h1>Cek</h1>;
}
