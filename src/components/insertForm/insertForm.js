import React, { useState, useEffect } from "react";
import { getDamages, getGeolocation, submitDamage } from "../../helpers";

export function InsertForm() {
  const [damage, setDamage] = useState("");
  const [geolocation, setGeolocation] = useState({});
  const [storedDamages, setStoredDamages] = useState([]);
  const [province, setProvince] = useState("");

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
    <div style={{ background: "red" }}>
      <h1>Insert a damage</h1>
      <select
        id="damage"
        name="damage"
        onChange={(e) => setDamage(e.target.value)}
      >
        {damageOptions.map((damageOption) => (
          <option value={damageOption.value}>{damageOption.text}</option>
        ))}
      </select>
      <span>Write your province</span>
      <input
        onChange={(e) => {
          setProvince(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          submitDamage(damage, geolocation, province);
        }}
      >
        Submit
      </button>
    </div>
  );
}
