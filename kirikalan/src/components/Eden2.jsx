import React, { useState } from "react";
import "./Eden1.css";
import "./Eden2.css";
import { Eden3 } from "./Eden3";
import edenlogo from "../Images/kirikalan.PNG";

export function Eden2() {
  const [nextNav, setNextNav] = useState(false);

  const eden3fn = () => {
    setNextNav(true);
  };
  return nextNav ? (
    <Eden3 />
  ) : (
    <div class="pagewrapper">
      <div class="grid_class pagewrapper ">
        <div>
          <img src={edenlogo} alt="Eden logo" class="kirikalan1" />
        </div>
        <div class="line-dot pagewrapper">
          <div class="dot">1</div>
          <div class="line"></div>
          <div class="dot">2</div>
          <div class="line"></div>
          <div class="dot1">3</div>
          <div class="line"></div>
          <div class="dot1">4</div>
        </div>
        <div class="fonts">
          <h1>Lets book a seat for enjoying the show</h1>
          <h4 id="light-font" class="pagewrapper">
            you can always book a seat for your friend too!!
          </h4>
          <div id="fullname">Number of Seats</div>
          <div>
            <input
              type="number"
              name="fullname"
              id="fullname_input"
              placeholder="0"
            />
          </div>
          <div>
            Seat Preference <div id="optional">{"{optional}"}</div>
          </div>
          <div class="makeinline">
            <input
              type="text"
              name="fullname"
              id="fullname_input2"
              placeholder="www.pichumani.com/"
              readOnly
            />
            <input
              type="text"
              name="fullname"
              id="fullname_input3"
              placeholder="Corner Seat A1"
            />
          </div>
        </div>
        <div>
          <button id="button_styling" onClick={eden3fn}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
