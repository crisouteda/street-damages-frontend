import axios from "axios";

export const submitDamage = async (damage, geolocation) => {
  await axios.post("http://localhost:4000/insert", {
    damage,
    geolocation,
  });
};

export const getDamages = async () => {
  const response = await axios.get("http://localhost:4000/read");
  return response.data.Items;
};
