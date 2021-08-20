import React, { useState } from "react";
// import Modal from "@material-ui/core/";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import { db, storage, timestamp } from "../Firebase/firebase";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from "@material-ui/core/TextField";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
   
  root: {
    width: '100%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
    input: {
    display: 'none',
  },
  paper: {
    position: "absolute",
    width: "auto",
    backgroundColor: "#059299",
    color: "#fff",
    // backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }

}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  //useEffect runs a piece of code base on specific condition
  const [open, setOpen] = useState(false);
  const [opneSingIn, setOpenSingIn] = useState(false);
  const [openUpdates, setOpenUpdates] = useState(false);

  const [country, setCountry] = useState("");
  const [tips, setTips] = useState("");
  const [time, setTime] = useState("");
  const [results, setResults] = useState("");
  const [hometeam, setHomeTeam] = useState("");
  const [awayteam, setAwayTeam] = useState("");
  const [homelogo, setHomeLogo] = useState("");
  const [awaylogo, setAwayLogo] = useState("");
  const [odds, setOdds] = useState("");
  const [Away, setAway] = useState("");
  ////vipconsts
  const [Vcountry, setVcountry] = useState("");
  const [Home, setHome] = useState("");
  const [Vtips, setVtips] = useState("");
  const [Vtime, setVtime] = useState("");
  const [VOdds, setVOdss] = useState("");
  /////freetips
   const [desc, setDesc] = useState('');
    const [tittle, setTittle] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
   /// adverts
const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        } 
    };
    const handleUpload = () => { 
        const uploadTask = storage.ref(`images/${image.name}`).put(image); 
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log('snapshot')
                //progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                //error function
                console.log(error);
                alert(error.message);
           },
            () => {
                //complete function 
                
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image insinde db 
                        db.collection("adverts").add({
                            timestamp: timestamp,
                            desc:  desc,
                            tittle: tittle,
                            imageUrl: url,
                             
                        })
                        
                        setProgress(0);
                        setDesc('');
                        setTittle('')
                        setImage(null);
                          
                    });
            }
        );    
         
    };
    
 


  const sendPost = () => {
    db.collection("freetips").add({
      timestamp: timestamp,
      country: country,
      odds: odds,
      results: results,
      homelogo: homelogo,
      hometeam: hometeam,
      time: time,
      tips: tips,
      awaylogo: awaylogo,
      awayteam: awayteam
    });
    setOpenSingIn(false);
    setCountry("");
    setOdds("");
    setResults("");
    setHomeLogo("");
    setHomeTeam("");
    setTime("");
    setTips("");
    setAwayLogo("");
    setAwayTeam("");
  };
  ///vip tips

  const handleAdd = () => {
    db.collection("Viptips").add({
      timestamp: timestamp,
      Home: Home,
      Vcountry: Vcountry,
      VOdds: VOdds,
      Away: Away,
      Vtime: Vtime,
      Vtips: Vtips
    });
    setOpen(false);
    setAway("");
    setHome("");
    setVcountry("");
    setVtime("");
    setVtips("");
    setVOdss("");
  };

  return (
    <div className="App">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_siginup">
            <center>
              <Input
                placeholder="counntry"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <Input
                placeholder="time"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <Input
                placeholder="homelogo"
                type="text"
                value={homelogo}
                onChange={(e) => setHomeLogo(e.target.value)}
              />
              <Input
                placeholder="hometeam"
                type="text"
                value={hometeam}
                onChange={(e) => setHomeTeam(e.target.value)}
              />
              <Input
                placeholder="awaylogo"
                type="text"
                value={awaylogo}
                onChange={(e) => setAwayLogo(e.target.value)}
              />
              <Input
                placeholder="awayteam"
                type="text"
                value={awayteam}
                onChange={(e) => setAwayLogo(e.target.value)}
              />
              <Input
                placeholder="tips"
                type="text"
                value={tips}
                onChange={(e) => setTips(e.target.value)}
              />
              <Input
                placeholder="odds"
                type="text"
                value={odds}
                onChange={(e) => setOdds(e.target.value)}
              />
              <div>
                <Button type="submit" onClick={() => setOpen(false)}>
                  cancel
                </Button>
                <Button type="submit" onClick={sendPost}>
                  submit freetips
                </Button>
              </div>
            </center>
          </form>
        </div>
      </Modal>
      <Modal open={opneSingIn} onClose={() => setOpenSingIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_siginup">
            <center>
              <Input
                placeholder="country"
                type="text"
                value={Vcountry}
                onChange={(e) => setVcountry(e.target.value)}
              />

              <Input
                placeholder="time"
                type="text"
                value={Vtime}
                onChange={(e) => setVtime(e.target.value)}
              />

              <Input
                placeholder="odds"
                type="text"
                value={VOdds}
                onChange={(e) => setVOdss(e.target.value)}
              />
              <Input
                placeholder="hometeam"
                type="text"
                value={Home}
                onChange={(e) => setHome(e.target.value)}
              />

              <Input
                placeholder="awayteam"
                type="text"
                value={Away}
                onChange={(e) => setAway(e.target.value)}
              />

              <Input
                placeholder="tips"
                type="text"
                value={Vtips}
                onChange={(e) => setVtips(e.target.value)}
              />
              <br></br>
              <div>
                <Button type="submit" onClick={() => setOpenSingIn(false)}>
                  cancel
                </Button>

                <Button type="submit" onClick={handleAdd}>
                  submit Viptips
                </Button>
              </div>
            </center>
          </form>
        </div>
      </Modal>
      <Modal open={openUpdates} onClose={() => setOpenUpdates(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_siginup">
            <center>
            <div className={classes.root}> 
      <input accept="image/*" 
      className={classes.input} 
      id="icon-button-file" 
      onChange= {handleChange }
      type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" 
        aria-label="upload picture" 
        component="span"> 
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
              <Input
              label="tittle"
                placeholder="tittle"
                input="text"
                value={tittle }
                onChange={(e) => setTittle(e.target.value)}
              /> 
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
                value={desc}
                required="true"
                onChange={(event) => setDesc(event.target.value)}
              />
                <LinearProgress variant="determinate" value={progress} />
              <div>
                <Button type="submit" onClick={() => setOpenUpdates(false)}>
                  cancel
                </Button>

                <Button input="submit" onClick={handleUpload} >
                  submit Updates
                </Button>
              </div>
            </center>
          </form>
        </div>
      </Modal>
      {/* Header */}

      <Button onClick={() => setOpenSingIn(true)}> post VIPtips </Button>
      <Button onClick={() => setOpen(true)}> Post freetips </Button>
      <Button onClick={() => setOpenUpdates(true)}> Post updates </Button>
    </div>
  );
}

export default App;
