import React, { useState } from "react";
import { db, timestamp } from "../Firebase/firebase";
import "./JoinVip.css";
import { Button  } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
 
// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1)
//   },
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 200
//     }
//   }
// }));

function Contacts() {
  // const classes = useStyles();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const sendmessage = () => {
    db.collection("contacts").add({
      name: name,
      country: country,
      phone: phone,
      email: email,
      message: message,
      timestamp: timestamp
    });
    setEmail("");
    setCountry("");
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <div>
        <div>
          <h5>
            <h2>Contact Us </h2>
            <br />
            Call or text on WhatsApp or Telegram <br />
            phone: +254790301470 <br />
            Email: kevin001.mokua@yahoo.com <br />
          </h5>

          <hr />
        </div>
        <form>
          <div>
            <div>
              <TextField
                id="outlined-textarea"
                label="full name"
                placeholder="kevin klein"
                variant="outlined"
                type="text"
                value={name}
                required="true"
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="outlined-textarea"
                label="country"
                placeholder="Poland"
                variant="outlined"
                type="text"
                value={country}
                required="true"
                onChange={(event) => setCountry(event.target.value)}
              />
            </div>

            <div className="names">
              <TextField
                id="outlined-textarea"
                label="email"
                placeholder="@yahoo.com"
                variant="outlined"
                input="email"
                required="true"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                id="outlined-textarea"
                label="phone"
                placeholder="+254790301470"
                variant="outlined"
                input="number" 
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div  >
              <TextField
              
                id="outlined-multiline-static"
                label="message"
                placeholder="i want to join vip"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                input="text" 
                // border="1px solid lightgrey"
                fullWidth
                value={message}
                required="true"
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>
        </form>
        <Button
        input="submit"
          className="color"
          onClick={sendmessage}
          variant="outlined"
          color="secondary"
        >
          send
        </Button>
      </div>
    </div>
  );
}

export default Contacts;
