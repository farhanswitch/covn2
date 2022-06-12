import type {NextPage} from 'next'
import { GetServerSideProps } from 'next';
import {useDispatch} from 'react-redux'

import { setCovidData } from '../src/app/features/covid/data-covid';
import {setIsError} from '../src/app/features/error-resp/axios-error'
import { wrapper } from '../src/app/store';
import { fetchCovidData } from '../src/fetchData';
import { CaseCard, CaseContainer } from "../src/components/Cases";
import { ICovid } from '../src/Interfaces';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dataState = store.getState();
  const dataCovid = dataState.covid
  if(dataCovid.data !== null){
    console.log(dataCovid.data)
    return{
      props:{
        dataCovid,
        isError:false
      }
    }
  }
const dataFromServer = await fetchCovidData();

console.log(dataFromServer)
return{
  props:{
    dataCovid:dataFromServer['data'],
    isError:dataFromServer.isError
  }
}

  
})
interface IPropsHarian {
  dataCovid : ICovid | null,
  isError : boolean
}
const Harian = ({dataCovid,isError}:IPropsHarian) => {
  console.log(dataCovid)
  console.error(`Error ${isError}`)
  return (
    <main className="px-2 mb-6">
      <div className="w-full rounded-md my-6 border-blue-700">
        <div className="flex px-4 py-2 items-center justify-between shadow-md shadow-slate-400/60">
          <h2 className="font-semibold text-blue-600">Data Harian</h2>
          <div className="flex">
            <form action="submit">
              <input type="date" min="2022-02-01" />
            </form>
          </div>
        </div>
        <div className="my-8 px-4 py-2">
          <CaseContainer>
            <CaseCard status="positif" jumlah={10} />
            <CaseCard status="dirawat" jumlah={11} />
            <CaseCard status="sembuh" jumlah={22} />
            <CaseCard status="meninggal" jumlah={2} />
          </CaseContainer>
        </div>
      </div>
    </main>
  );
};

export default Harian;
