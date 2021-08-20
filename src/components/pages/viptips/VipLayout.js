import React from "react";
import "./VIP.css";

function VipLayout({ Away, Home, Vtips, VOdds, Vcountry, Vtime }) {
  return (
    <div className=" VipPost">
            <div className="postvip" >
                <div className="viphead">
                    <h5> {Vcountry }</h5>
                    <h5> {Vtime} </h5><h4>{VOdds} </h4>
                </div>
                <div className="vipbody ">
                    <h4>{Home}</h4>
                    <h5>VS</h5>
                    <h4>{Away} </h4>
                    <h4>{Vtips}</h4>
                </div>
                  
            </div> 
      </div>
  );
}

export default VipLayout;
