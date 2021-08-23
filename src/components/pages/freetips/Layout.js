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
    <div className="scoreboard">
      <div className="scoreboard__container">
        <div className="scoreboard__result">
          <span className="scoreboard__result mb-05">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
          <span className="scoreboard__result mb-05">{country}</span>
          <span className="scoreboard__result-separator">{results}</span>
        </div>

        <div className="scoreboard__teams">
          <div className="scoreboard__team scoreboard__team--align-right mr-2">
            <div className="scoreboard__badge ml-1">
              <img src={homelogo} alt="" />
            </div>
            <span className="scoreboard__name"> {hometeam} </span>
          </div>
          <div className="scoreboard__result">
            <span className="scoreboard__result">{time}</span>
            {/* <span className="scoreboard__result-home">3</span>
            <span className="scoreboard__result-separator">:</span>
            <span className="scoreboard__result-home">2</span> */}
          </div>
          <div className="scoreboard__team scoreboard__team--align-left ml-2">
            <div className="scoreboard__badge mr-1">
              <img src={awaylogo} alt=" " />
            </div>
            <span className="scoreboard__name"> {awayteam} </span>
          </div>
        </div>
        <div className="scoreboard__basics mb-05">
          <span className="text-dangertip">{tips} </span>
          <span className="scoreboard__result-separator">@</span>
          <span className="text-danger"> {odds} </span>
        </div>
      </div>
    </div>
  );
}

export default Freetips;
