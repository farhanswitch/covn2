import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BiPlusMedical } from "react-icons/bi";
import { FaHospital, FaSkullCrossbones } from "react-icons/fa";

interface IIcon {
  sembuh: JSX.Element;
  positif: JSX.Element;
  dirawat: JSX.Element;
  meninggal: JSX.Element;
}
interface IColor {
  sembuh: string;
  positif: string;
  dirawat: string;
  meninggal: string;
}
const icon: IIcon = {
  sembuh: <AiOutlineSafety />,
  positif: <BiPlusMedical />,
  dirawat: <FaHospital />,
  meninggal: <FaSkullCrossbones />,
};
const textColors: IColor = {
  sembuh: "text-green-600",
  positif: "text-yellow-400",
  dirawat: "text-red-400",
  meninggal: "text-stone-800",
};
const bgColors: IColor = {
  sembuh: "bg-green-600",
  positif: "bg-yellow-400",
  dirawat: "bg-red-400",
  meninggal: "bg-stone-800",
};
interface IProps {
  status: string;
  jumlah: number;
  isKum?: boolean;
}
export const CaseCard = ({ status, jumlah, isKum }: IProps) => {
  return (
    <div className="shadow-xl rounded-md p-6 relative mx-auto grid place-items-center w-[290px] h-[210px] border">
      <div className={`${textColors[status as keyof IColor]} text-center`}>
        <p className="grid place-items-center text-xl">
          {icon[status as keyof IIcon]}
        </p>
        <p className="font-bold text-3xl">{jumlah}</p>
        <p className="text-slate-800 capitalize">
          {isKum ? `Jumlah ${status}` : status}
        </p>
      </div>
      <div
        className={`absolute w-[250px] h-1 ${
          bgColors[status as keyof IColor]
        } rounded bottom-2 left-[50%] -translate-x-[50%]`}
      ></div>
    </div>
  );
};

interface IContainerProps {
  children: JSX.Element | JSX.Element[];
}
export const CaseContainer = ({ children }: IContainerProps) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
      {children}
    </div>
  );
};
