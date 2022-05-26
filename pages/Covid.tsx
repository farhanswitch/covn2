import { GetServerSideProps } from "next";
import { ICovid } from "../src/Interfaces";
import { fetchCovidData } from "../src/fetchData";
export const getServerSideProps: GetServerSideProps = async () => {
  const dataCovid = await fetchCovidData();
  return {
    props: { dataCovid: dataCovid.data },
  };
};
const Covid = ({ dataCovid }: ICovid) => {
  const { penambahan } = dataCovid.update;
  return (
    <div>
      <p className="text-center">Covid 19 Indonesia</p>
      <div className="border w-max mx-auto px-4 py-2 border-slate-600">
        <h2 className="w-max bg-sky-200">Penambahan Terbaru</h2>
        <p className="w-max">Tanggal : {penambahan.tanggal}</p>
        <p className="w-max">Jumlah Positif : {penambahan.jumlah_positif}</p>
        <p className="w-max">Jumlah Dirawat : {penambahan.jumlah_dirawat}</p>
        <p className="w-max">Jumlah Sembuh : {penambahan.jumlah_sembuh}</p>
        <p className="w-max">
          Jumlah Meninggal : {penambahan.jumlah_meninggal}
        </p>
      </div>
    </div>
  );
};

export default Covid;
