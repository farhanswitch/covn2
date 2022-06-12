import axios from "axios";
export const fetchCovidData = async () => {
  let res;
  try {
    res = await axios.get("https://data.covid19.go.id/public/api/update.json");
  } catch (error) {
    return {
      data: null,
      error,
      isError: true,
    };
  }
  return {
    data: res.data,
    error: null,
    isError: false,
  };
};
