import type { NextPage } from "next";
import Head from "next/head";
import { useMemo } from "react";

import CarouselComponent from "../src/components/CarouselComponent";
import { CaseContainer, CaseCard } from "../src/components/Cases";
import Hero from "../src/components/Hero";
import { wrapper } from "../src/app/store";
import { fetchCovidData } from "../src/fetchData";
import { setCovidData } from "../src/app/features/covid/data-covid";
import { IDataCovid } from "../src/Interfaces";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const dataState = store.getState();
    const dataCovid = dataState.covid;
    if (dataCovid.data !== null && dataCovid.data !== undefined) {
      return {
        props: {
          dataCovid,
          isError: false,
        },
      };
    }
    const dataFromServer = await fetchCovidData();
    setCovidData(dataFromServer["data"]);
    return {
      props: {
        dataCovid: dataFromServer["data"],
        isError: dataFromServer.isError,
      },
    };
  }
);

interface IPropsIndex {
  dataCovid: IDataCovid | null;
  isError: boolean;
}
const Home: NextPage<IPropsIndex> = ({ dataCovid, isError }) => {
  const dataCovidUpdate = useMemo(() => dataCovid?.update, [dataCovid]);
  isError && console.error("Something went wrong");
  return (
    <div className="w-full ">
      <Head>
        <title>SwitchCov | Home</title>
        <meta name="description" content="Indonesian covid 19 data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto">
        <Hero />
        <section className="pt-8 pb-14 px-4 relative">
          <h2 className="text-center text-xl font-semibold mb-6">
            Data Kasus Covid-19
          </h2>
          <h3 className="text-center text-md font-semibold mb-6">Hari ini</h3>
          <CaseContainer>
            <CaseCard
              status="positif"
              jumlah={dataCovidUpdate?.penambahan?.jumlah_positif || 0}
            />
            <CaseCard
              status="dirawat"
              jumlah={dataCovidUpdate?.penambahan?.jumlah_dirawat || 0}
            />
            <CaseCard
              status="sembuh"
              jumlah={dataCovidUpdate?.penambahan?.jumlah_sembuh || 0}
            />
            <CaseCard
              status="meninggal"
              jumlah={dataCovidUpdate?.penambahan?.jumlah_meninggal || 0}
            />
          </CaseContainer>
          <h3 className="mt-12 mb-8 text-center text-md font-semibold">
            Total
          </h3>
          <CaseContainer>
            <CaseCard
              status="positif"
              jumlah={dataCovidUpdate?.total?.jumlah_positif || 0}
            />
            <CaseCard
              status="dirawat"
              jumlah={dataCovidUpdate?.total?.jumlah_dirawat || 0}
            />
            <CaseCard
              status="sembuh"
              jumlah={dataCovidUpdate?.total?.jumlah_sembuh || 0}
            />
            <CaseCard
              status="meninggal"
              jumlah={dataCovidUpdate?.total?.jumlah_meninggal || 0}
            />
          </CaseContainer>
          <span className="text-xs text-blue-700 absolute bottom-2 right-2">
            Terakhir kali data di-update: {dataCovidUpdate?.penambahan?.created}
          </span>
        </section>
        <CarouselComponent />
      </main>
    </div>
  );
};

export default Home;
