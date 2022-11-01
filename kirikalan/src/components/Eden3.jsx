import React, { useState } from "react";
import "./Eden3.css";
import singleimg from "../Images/single.PNG";
import teamlogo from "../Images/team.PNG";
import edenlogo from "../Images/kirikalan.PNG";
import { Eden4 } from "./Eden4";
export function Eden3() {
  const [nextNav1, setnextNav1] = useState(false);
  const eden4fn = () => {
    setnextNav1(true);
  };
  return nextNav1 ? (
    <Eden4 />
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
          <div class="dot">3</div>
          <div class="line"></div>
          <div class="dot1">4</div>
        </div>
        <div class="fonts">
          <h1 id="move-left">How are you planning to come !!!</h1>
          <h4 id="light-font" class="pagewrapper">
            Nambi vaanga santhosama ponga
          </h4>
        </div>
        <div class="plug_cards">
          <div class="single">
            <img src={singleimg} alt="singlelogo" id="icon1" />
            <h2 class="reduce_margin">Its Me</h2>
            <div id="single_para">Sigam single a than varum</div>
          </div>
          <div class="team">
            <img src={teamlogo} alt="teamlogo" id="icon1" />
            <h2 class="reduce_margin">Nanga rendu peru</h2>
            <div id="team_para">ona polam ona polam onnaaa polam </div>
          </div>
        </div>
        <div>
          <button id="button_styling" onClick={eden4fn} style={{ margin: 20 }}>
            Kasu Kudu
          </button>
        </div>
      </div>
    </div>
  );
}
