import React, { useState } from "react";
import { submitUser } from "../../helpers";

export const GetForm = () => {
  const [province, setProvince] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>
        Write your data to get weekly information about the state of your city
      </span>
      <span>Write your province</span>
      <input
        onChange={(e) => {
          setProvince(e.target.value);
        }}
      ></input>
      <span>Write your email</span>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          submitUser(province, email);
        }}
      >
        Send
      </button>
    </div>
  );
};
