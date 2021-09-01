import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./JoinVip.css";
import PricingTable from "../payments/PricingTable";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Gpay from "../payments/Gpay";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function JoinVip() {
  const classes = useStyles();
  return (
    <div>
      {/* <Gpay /> */}
      <PricingTable />
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>MPESA KENYA</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1. Go to MPESA <br />
              2. Send Money <br />
              3. Enter phone Number (0790301470)
              <br />
              4. enter amount ksh (1 week @ 1000 or 1 month @2000)
              <br />
              5. then Mpesa Pin <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              HOW TO PAY WITH MPESA FROM TANZANIA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1.Dial *150*00# on your Vodacom line <br />
              2.Select “Send money to MPESA Kenya”
              <br />
              3.Enter NUMBER (+254 790 301 470)
              <br />
              4.Enter AMOUNT (TSh25,500) for one week subscription
              <br />
              or (TSh51,000) for one month subscription
              <br />
              5.Enter PIN <br />
              6.Press 1 to confirm.
              <br />
              send us confirmation message to get login details
              whatsApp/Telegram/Text on 0790 301 470
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              HOW TO PAY WITH MPESA RWANDA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1.Dial *830# to send money to Kenya from your MTN line.
              <br />
              2.Follow the prompts to completes the transaction.
              <br />
              3.Subscription plan is 10,500 Rwandan Franc
              <br />
              for one week or 21,000 Rwandan Franc for one month.
              <br />
              Payments to be sent to this number(+254 790 301 470)
              <br />
              send us confirmation message to get login details
              whatsApp/Telegram/Text on 0790 301 470
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              HOW TO PAY WITH MPESA UGANDA{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1.Dial *165# to send money to Kenya from your MTN line.
              <br />
              2.Follow the prompts to completes the transaction.
              <br />
              3.Subscription plan is 40,000 Ugandan Shillings for one week
              <br />
              or 80,000 Ugandan Shillings for one month.
              <br />
              Payments to be sent to this number(+254 790 301 470)
              <br />
              send us confirmation message to get login details
              whatsApp/Telegram/Text on 0790 301 470
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default JoinVip;
