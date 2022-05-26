import React from "react";
import { CaseCard, CaseContainer } from "../src/components/Cases";

const harian: React.FC = () => {
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

export default harian;
