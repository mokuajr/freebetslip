import React from "react";
import "./Payments.css";
import PaypalExpressBtn from "react-paypal-express-checkout";

function PricingTable() {
  const client = {
    sandbox:
      "AXMUBOcaszqCzfEOC-r--Rn7rMVoEbH9c6XbmyKb04nURqcLhpFxWwwnaUytaMR9UTaE2vwLfi5tqKbT",
    production: "aa"
  };

  return (
    <div class="pricecontainer-fluid">
      <div class="pricecontainer">
        <div class="pricerow">
          <div class="pricecol-sm-4">
            <div class="pricecard text-center">
              <div class="pricetitle">
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>Basic</h2>
              </div>
              <div class="priceprice">
                <h2>
                  <sup>$</sup>20
                </h2>
              </div>
              <div class="priceoption">
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> Max-bet{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> 3 Odds Maxbet{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> 2 week VIP{" "}
                </li>

                <PaypalExpressBtn
                  client={client}
                  currency={"EUR"}
                  total={15.0}
                />
              </div>
            </div>
          </div>

          <div class="pricecol-sm-4">
            <div class="pricecard text-center">
              <div class="pricetitle">
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>Standard</h2>
              </div>
              <div class="priceprice">
                <h2>
                  <sup>$</sup>30
                </h2>
              </div>
              <div class="priceoption">
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> Max-bet{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> 3 Odds Maxbet{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> 4 odds bonus
                  tips{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> 1 Month VIP{" "}
                </li>

                <PaypalExpressBtn
                  client={client}
                  currency={"EUR"}
                  total={30.0}
                />
              </div>
            </div>
          </div>
          <div class="pricecol-sm-4">
            <div class="pricecard text-center">
              <div class="pricetitle">
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>Standard</h2>
              </div>
              <div class="priceprice">
                <h2>
                  <sup>$</sup>100
                </h2>
              </div>
              <div class="priceoption">
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> Max-bet{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> 3 Odds Maxbet{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> 4 odds bonus{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> corect score{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i> 4 Month VIP{" "}
                </li>

                <PaypalExpressBtn
                  client={client}
                  currency={"EUR"}
                  total={100.0}
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
