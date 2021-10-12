import React, { useState, useEffect } from "react";
import { getDamages, getGeolocation, submitDamage } from "../../helpers";

export function Form() {
  const [damage, setDamage] = useState("");
  const [geolocation, setGeolocation] = useState({});
  const [storedDamages, setStoredDamages] = useState([]);

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
    <div>
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
      <button
        onClick={() => {
          submitDamage(damage, geolocation, "from Form");
        }}
      >
        Submit
      </button>
      <div>
        {storedDamages.length > 0 &&
          storedDamages?.map((storedDamage) => (
            <div>
              {Object.keys(storedDamage).map((key) => (
                <span>
                  {key}: {storedDamage[key]}
                </span>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
