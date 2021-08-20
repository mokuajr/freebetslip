import React from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import PaypalExpressBtn from "react-paypal-express-checkout";

const content = [
  {
    title: "SUBSCRIPTION PLANS",
    description: "3 odds 2 week subscription 20$",
    total: "20",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "SUBSCRIPTION PLANS",
    description: "3 odds,4odds bonus,1 month subscription for 30$.",
    total: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "SUBSCRIPTION PLANS",
    description:
      "3 odds,4odds bonus, CORRECT SCORE 4.months subscription 100$.",
    total: "100",
    image:
      "https://kenyanmagazine.co.ke/wp-content/uploads/2021/02/images-6.jpeg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

const HomeSlider = ({ client }) => (
  <div>
    <h1> sports subscription plans</h1>
    <Slider className="slider-wrapper" autoplay={1000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          // style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            
            <PaypalExpressBtn 
              client={client}
              currency={"EUR"}
              total={item.total} 
            />   
          </div>
          <section>
            <span>
              Posted by <strong>www.freebetslip.com</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </div>
);

export default HomeSlider;
