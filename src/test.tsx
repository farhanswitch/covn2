import { useAppSelector } from "./app/hooks/redux-hooks";

export default function Test() {
  const data = useAppSelector((state) => state.covid.data);
  console.log(data);
  return <h1>Covid Test </h1>;
}
