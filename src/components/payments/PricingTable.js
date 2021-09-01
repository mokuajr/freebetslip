import React from "react";
import "./Payments.css";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { db } from "../Firebase/firebase";

function PricingTable() {
  const onSuccess = () => {
    console.log("Your payment was succeeded!");
    var answer = prompt("What is your name?", "Joe Blogg");
  };
  const onCancel = () => {
    // User pressed "cancel" or close Paypal's popup!
    console.log("You have cancelled the payment!");
    var onCancel = prompt("What is your name?", "Joe Blogg");
  };
  const onError = () => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!");
    // Since the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  const client = {
    production:
      "AZMZ2VKsqqD1K5Xdl5nRrkJfXm451NeLhFblbXvokhJTSGZ0Ukgd-RO8aUShyqnPDYgWgMvaQ2NBiLt3",
    sandbox:
      "AfzclcDdiI3iLrcxs7ooZBzQwz3pmQXs0G3S5WvTtYnRTpYOdnlZtudG7fSohWGaiKvQ_q3lKbkjsGDv"
  };

  return (
    <div className="pricecontainer-fluid">
      <div className="pricecontainer">
        <div className="pricerow">
          <div className="pricecol-sm-4">
            <div className="pricecard text-center">
              <div className="pricetitle">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>Basic</h2>
              </div>
              <div className="priceprice">
                <h2>
                  <sup>$</sup>20
                </h2>
              </div>
              <div className="priceoption">
                <li>
                  {" "}
                  <i
                    className="fa fa-check"
                    aria-hidden="true"
                  ></i> Max-bet{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> 3 Odds
                  Maxbet{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> 2 week VIP{" "}
                </li>

                <PaypalExpressBtn
                  client={client}
                  currency={"EUR"}
                  total={18.0}
                  env={"production"}
                  onError={() => {
                    alert("oops error occured");
                  }}
                  onCancel={() => {
                    alert("Subscription Cancled");
                  }}
                  onSuccess={() => {
                    alert("Subscription succesful");
                    // window.prompt("Enter your name: ").then
                  }}
                />
              </div>
            </div>
          </div>

          <div className="pricecol-sm-4">
            <div className="pricecard text-center">
              <div className="pricetitle">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>Standard</h2>
              </div>
              <div className="priceprice">
                <h2>
                  <sup>$</sup>30
                </h2>
              </div>
              <div className="priceoption">
                <li>
                  {" "}
                  <i
                    className="fa fa-check"
                    aria-hidden="true"
                  ></i> Max-bet{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> 3 Odds
                  Maxbet{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> 4 odds
                  bonus tips{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> 1 Month VIP{" "}
                </li>

                <PaypalExpressBtn
                  client={client}
                  currency={"EUR"}
                  total={30.0}
                  env={"production"}
                  onError={() => {
                    alert("oops error occured");
                  }}
                  onCancel={() => {
                    alert("Subscription Cancled");
                  }}
                  onSuccess={() => {
                    alert("Subscription succesful");
                    // window.prompt("Enter your name: ").then
                  }}
                />
              </div>
            </div>
          </div>
          <div className="pricecol-sm-4">
            <div className="pricecard text-center">
              <div className="pricetitle">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>Standard</h2>
              </div>
              <div className="priceprice">
                <h2>
                  <sup>$</sup>100
                </h2>
              </div>
              <div className="priceoption">
                <li>
                  {" "}
                  <i
                    className="fa fa-check"
                    aria-hidden="true"
                  ></i> Max-bet{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> 3 Odds
                  Maxbet{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> 4 odds
                  bonus{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> corect
                  score{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true"></i> 4 Month VIP{" "}
                </li>

                <PaypalExpressBtn
                  client={client}
                  currency={"EUR"}
                  total={100.0}
                  env={"production"}
                  onError={() => {
                    alert("oops error occured");
                  }}
                  onCancel={() => {
                    alert("Subscription Cancled");
                  }}
                  onSuccess={() => {
                    alert("Subscription succesful");
                    // window.prompt("Enter your name: ").then
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PricingTable;
