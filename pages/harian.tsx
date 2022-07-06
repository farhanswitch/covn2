import type { NextPage } from "next";
import Head from "next/head";
import { useState, useMemo, ChangeEvent } from "react";
import { setCovidData } from "../src/app/features/covid/data-covid";
import { wrapper } from "../src/app/store";
import { fetchCovidData } from "../src/fetchData";
import { CaseCard, CaseContainer } from "../src/components/Cases";
import { IDataCovid } from "../src/Interfaces";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const dataState = store.getState();
    const dataCovid = dataState.covid;
    if (dataCovid.data !== null) {
      console.log(dataCovid.data);
      return {
        props: {
          dataCovid,
          isError: false,
        },
      };
    }
    const dataFromServer = await fetchCovidData();

    console.log(dataFromServer);
    setCovidData(dataFromServer["data"]);
    return {
      props: {
        dataCovid: dataFromServer["data"],
        isError: dataFromServer.isError,
      },
    };
  }
);
interface IPropsHarian {
  dataCovid: IDataCovid | null;
  isError: boolean;
}
const Harian: NextPage<IPropsHarian> = ({ dataCovid, isError }) => {
  console.log(dataCovid);
  console.error(`Error ${isError}`);

  const arrayHarian = useMemo(() => dataCovid?.update?.harian, [dataCovid]);
  const [date, setDate] = useState<string>("");
  const filteredData = useMemo(
    () =>
      arrayHarian &&
      arrayHarian.filter((data) => data.key_as_string.split("T")[0] == date)[0],
    [date]
  );

  const handleOnChangeDate = (event: ChangeEvent<HTMLInputElement>) =>
    setDate(event.target.value);
  return (
    <>
      <Head>
        <title>SwitchCov | Kasus Harian</title>
        <meta name="description" content="Indonesian covid 19 data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-2 mb-6">
        <div className="w-full rounded-md my-6 border-blue-700">
          <div className="flex px-4 py-2 items-center justify-between shadow-md shadow-slate-400/60">
            <h2 className="font-semibold text-blue-600">Data Harian</h2>
            <div className="flex">
              <form action="submit">
                <input
                  type="date"
                  min={
                    arrayHarian
                      ? arrayHarian[0].key_as_string.split("T")[0]
                      : "2020-03-02"
                  }
                  max={
                    arrayHarian &&
                    arrayHarian[arrayHarian.length - 1].key_as_string.split(
                      "T"
                    )[0]
                  }
                  onChange={handleOnChangeDate}
                />
              </form>
            </div>
          </div>
          <div className="my-8 px-4 py-2">
            <CaseContainer>
              <CaseCard
                status="positif"
                jumlah={
                  filteredData ? filteredData["jumlah_positif"]["value"] : 0
                }
              />
              <CaseCard
                status="positif"
                jumlah={
                  filteredData ? filteredData["jumlah_positif_kum"]["value"] : 0
                }
                isKum={true}
              />
              <CaseCard
                status="dirawat"
                jumlah={
                  filteredData ? filteredData["jumlah_dirawat"]["value"] : 0
                }
              />
              <CaseCard
                status="dirawat"
                jumlah={
                  filteredData ? filteredData["jumlah_dirawat_kum"]["value"] : 0
                }
                isKum={true}
              />

              <CaseCard
                status="sembuh"
                jumlah={
                  filteredData ? filteredData["jumlah_sembuh"]["value"] : 0
                }
              />
              <CaseCard
                status="sembuh"
                jumlah={
                  filteredData ? filteredData["jumlah_sembuh_kum"]["value"] : 0
                }
                isKum={true}
              />

              <CaseCard
                status="meninggal"
                jumlah={
                  filteredData ? filteredData["jumlah_meninggal"]["value"] : 0
                }
              />
              <CaseCard
                status="meninggal"
                jumlah={
                  filteredData
                    ? filteredData["jumlah_meninggal_kum"]["value"]
                    : 0
                }
                isKum={true}
              />
            </CaseContainer>
          </div>
        </div>
      </main>
    </>
  );
};

export default Harian;
