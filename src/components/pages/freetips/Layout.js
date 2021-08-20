import React from "react";
import "./Freetips.css";

function Freetips({
  country,
  timestamp,
  odds,
  results,
  homelogo,
  hometeam,
  time,
  tips,
  awaylogo,
  awayteam,
  imageUrl
}) {
  return (
    <div class="scoreboard">
      <div class="scoreboard__container">
        <div class="scoreboard__result">
          <span class="scoreboard__result mb-05">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
          <span class="scoreboard__result mb-05">{country}</span>
          <span class="scoreboard__result-separator">{results}</span>
        </div>

        <div class="scoreboard__teams">
          <div class="scoreboard__team scoreboard__team--align-right mr-2">
            <div class="scoreboard__badge ml-1">
              <img src={homelogo} alt="" />
            </div>
            <span class="scoreboard__name"> {hometeam} </span>
          </div>
          <div class="scoreboard__result">
            <span class="scoreboard__result">{time}</span>
            {/* <span class="scoreboard__result-home">3</span>
            <span class="scoreboard__result-separator">:</span>
            <span class="scoreboard__result-home">2</span> */}
          </div>
          <div class="scoreboard__team scoreboard__team--align-left ml-2">
            <div class="scoreboard__badge mr-1">
              <img src={awaylogo} alt=" " />
            </div>
            <span class="scoreboard__name"> {awayteam} </span>
          </div>
        </div>
        <div class="scoreboard__basics mb-05">
          <span class="text-dangertip">{tips} </span>
          <span class="scoreboard__result-separator">@</span>
          <span class="text-danger"> {odds} </span>
        </div>
      </div>
    </div>
  );
}

export default Freetips;
