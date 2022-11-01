import React, { useState } from "react";

import "./Eden1.css";
import "./Eden2.css";
import "./Eden3.css";
import "./Eden4.css";
import edenlogo from "../Images/kirikalan.PNG";
import { useContext } from "react";
import { NameContext } from "./Eden1.jsx";
import { Eden1 } from "./Eden1.jsx";

export function Eden4() {
  const name1 = useContext(NameContext);
  const [pageone, setPageOne] = useState(false);
  const eden5fn = () => {
    setPageOne(true);
  };
  return pageone ? (
    <Eden1 />
  ) : (
    <div class="pagewrapper">
      <div class="grid_class pagewrapper ">
        <div>
          <img src={edenlogo} alt="Eden logo" class="kirikalan3" />
        </div>
        <div class="line-dot pagewrapper">
          <div class="dot">1</div>
          <div class="line"></div>
          <div class="dot">2</div>
          <div class="line"></div>
          <div class="dot">3</div>
          <div class="line"></div>
          <div class="dot">4</div>
        </div>
        <h1>Hellowwww -- {name1}</h1>
        <h4 id="light-font" class="pagewrapper">
          vatta seyalalar {name1} pesuren
        </h4>
        <div>
          <button id="button_styling" onClick={eden5fn}>
            Pothum Ithoda Mudichukuvom
          </button>
        </div>
      </div>
    </div>
  );
}
