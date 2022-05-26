import axios from "axios";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await fetchData();
  return {
    props: { user },
  };
};
const fetchData = async () => {
  const res = axios.get("https://jsonplaceholder.typicode.com/users");
  return { users: res };
};

const Covid = (props: any) => {
  fetchData();

  console.log(props.user);
  return <p>{props.users}</p>;
};

export default Covid;
