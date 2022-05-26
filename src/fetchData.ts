import axios from "axios";
export const fetchCovidData = async () => {
  const res = await axios.get(
    "https://data.covid19.go.id/public/api/update.json"
  );
  return res.data;
};
