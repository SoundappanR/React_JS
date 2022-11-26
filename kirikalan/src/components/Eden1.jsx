import React, { useState } from "react";
import "./Eden1.css";
import { Eden2 } from "./Eden2";
import edenlogo from "../Images/kirikalan.PNG";
export const NameContext = React.createContext();
export const FullNameContext = React.createContext();

export function Eden1() {
  const eden2fn = () => {
    if (name === "") {
      setNameErr(true);
    } else {
      setNext(true);
    }
  };
  const [next, setNext] = useState(false);
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [fullName, setFullName] = useState("");

  // const value1 = {
  //   name: name,
  //   fullName: fullName,
  // };

  return next ? (
    <NameContext.Provider value={name}>
      <FullNameContext.Provider value={fullName}>
        <Eden2 />
      </FullNameContext.Provider>
    </NameContext.Provider>
  ) : (
    <div class="pagewrapper">
      <div class="grid_class pagewrapper ">
        <div>
          <img src={edenlogo} alt="Eden logo" class="kirikalan" />
        </div>
        <div class="line-dot pagewrapper">
          <div class="dot">1</div>
          <div class="line"></div>
          <div class="dot1">2</div>
          <div class="line"></div>
          <div class="dot1">3</div>
          <div class="line"></div>
          <div class="dot1">4</div>
        </div>
        <div class="fonts">
          <h1>Welcome to great KIRIKALAN magic show !!!</h1>
          <h4 id="light-font" class="pagewrapper">
            Elarum joora oru thadava kai thatunga
          </h4>
          <div id="fullname">Full Name</div>
          <div>
            <input
              type="text"
              name="fullname"
              id="fullname_input"
              placeholder="Vadivelu"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>Display Name</div>
          <div>
            <input
              type="text"
              name="fullname"
              id="fullname_input1"
              placeholder="Vaigai puyal"
              onChange={(e) => setName(e.target.value)}
            />
            {nameErr && <p class="errormessage">PERU ENNA</p>}
          </div>
        </div>
        <div>
          <button id="button_styling" onClick={eden2fn}>
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
