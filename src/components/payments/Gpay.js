// import React, { useState } from "react";
// import GooglePayButton from "@google-pay/button-react";
// import "./Gpay.css";

// export default function Gpay() {
//   const paymentRequest = {
//     apiVersion: 2,
//     apiVersionMinor: 0,
//     allowedPaymentMethods: [
//       {
//         type: "CARD",
//         parameters: {
//           allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//           allowedCardNetworks: ["MASTERCARD", "VISA"]
//         },
//         tokenizationSpecification: {
//           type: "PAYMENT_GATEWAY",
//           parameters: {
//             gateway: "example"
//           }
//         }
//       }
//     ],
//     merchantInfo: {
//       merchantId: "123456789012345678",
//       merchantName: "Sportsvar Ltd"
//     },
//     transactionInfo: {
//       totalPriceStatus: "FINAL",
//       totalPriceLabel: "Total",
//       totalPrice: "1.00",
//       currencyCode: "USD",
//       countryCode: "US"
//     }
//   };

//   const isTop = window === window.top;

//   return (
//     <div>
//       <div className="demo">
//         <GooglePayButton
//           environment="PRODUCTION"
//           // You can change environment here ENVIRONMENT_TEST,ENVIRONMENT_PRODUCTION
//           paymentRequest={paymentRequest}
//           onLoadPaymentData={(paymentRequest) => {
//             console.log("load payment data", paymentRequest);
//           }}
//         />
//       </div>
//     </div>
//   );
// }
