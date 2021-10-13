import axios from "axios";

export const submitDamage = async (damage, geolocation, province) => {
  await axios.post("http://localhost:4000/insertDamage", {
    damage,
    geolocation,
    province,
  });
};

export const submitUser = async (province, email) => {
  await axios.post("http://localhost:4000/insertUser", {
    province,
    email,
  });
};

export const getDamages = async () => {
  const response = await axios.get("http://localhost:4000/read");
  return response.data.Items;
};
