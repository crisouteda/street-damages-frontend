import React, { useState } from "react";
import { submitUser } from "../../helpers";
import { StyledForm } from "./getForm.style";
import "./getForm.css";

export const GetForm = () => {
  const [province, setProvince] = useState("");
  const [email, setEmail] = useState("");

  return (
    <StyledForm>
      <h1>
        Write your data to get weekly information about the state of your city
      </h1>
      <div>
        <div>
          <div>
            <span>Write your province</span>
            <input
              onChange={(e) => {
                setProvince(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <span>Write your email</span>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button
          onClick={() => {
            submitUser(province, email);
          }}
        >
          Send
        </button>
      </div>
    </StyledForm>
  );
};
