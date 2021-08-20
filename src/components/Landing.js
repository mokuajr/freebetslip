import React from "react";
import Freetips from "./pages/freetips/Freetips";
import Adverts from "./pages/updates/Adverts";
import HomeSlider from "./payments/HomeSlider";
import "./styles.css"; 
import GambleAware from "./pages/footer/GambleAware"; 
import FABbtn from "./pages/footer/FABbtn";

function Landing() {
  return (
    <div>
      <div className="free">
        <div className="freetip">
          <HomeSlider />
          <h2> free tips</h2>
          <Freetips />
        </div>
        <div className="adverts">
          <h2>Updates</h2>
          <Adverts />
        </div>
      </div>
       
      <GambleAware />
      <FABbtn   />
    </div>
  );
}

export default Landing;
