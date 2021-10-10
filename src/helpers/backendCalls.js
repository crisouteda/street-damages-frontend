import axios from "axios";

export const submitDamage = async (damage, geolocation) => {
    await axios.post("http://localhost:4000/api/insert", {
      damage,
      geolocation,
      //   user_id: user[0].id,
    });
    // await dispatch({ type: "increment" });
  };
