import React, { useState, useEffect } from "react";
import { getDamages, getGeolocation, submitDamage } from "../../helpers";
import { StyledForm } from "./insertForm.style";
import "./insertForm.css";

export function InsertForm() {
  const [damage, setDamage] = useState("");
  const [geolocation, setGeolocation] = useState({});
  const [storedDamages, setStoredDamages] = useState([]);
  const [province, setProvince] = useState("");
  console.log(storedDamages);

  useEffect(() => {
    const _geolocation = getGeolocation();
    setGeolocation(_geolocation);
  }, []);

  const damageOptions = [
    { value: "", text: "Choose a damage" },
    { value: "shit", text: "Shit in the street" },
    { value: "follenTree", text: "Follen tree" },
    { value: "brokenTile", text: "Broken tile" },
  ];

  useEffect(() => {
    const response = getDamages();
    setStoredDamages(response);
  }, []);

  return (
    <StyledForm>
      <h1 data-heading="t">Insert a damage</h1>
      <div>
        <select
          id="damage"
          name="damage"
          onChange={(e) => setDamage(e.target.value)}
        >
          {damageOptions.map((damageOption) => (
            <option value={damageOption.value}>{damageOption.text}</option>
          ))}
        </select>
        <div>
          <span>Write your province</span>
          <input
            onChange={(e) => {
              setProvince(e.target.value);
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            submitDamage(damage, geolocation, province);
          }}
        >
          Submit
        </button>
      </div>
    </StyledForm>
  );
}
