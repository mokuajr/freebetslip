// import React, { useEffect, useState } from "react";
// import "../TabNavigator.css";
// import { db } from "../../Firebase/firebase";
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 250,
//   },
// });
// function createData(name, phone, message, country, email) {
//       return { name, phone, message, country, email };
// }

// export default function Messages() {
//   const [msg, setMsg] = useState([]);
//   const classes = useStyles();

//   useEffect(() => {
//     db.collection("contacts")
//       .orderBy("timestamp", "desc")
//       .onSnapshot((snapshot) => {
//         //evry time anew post is added, fire  this code
//         setMsg(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             text: doc.data()
//           }))
//         );
//       });
//   }, []);
//   return (
//   //  <TableContainer component={Paper}>
//   //     <Table className={classes.table} aria-label="simple table">  
//   //       <TableHead>
//   //         <TableRow>
//   //           <TableCell>Name</TableCell>
//   //           <TableCell align="right">Phone</TableCell>
//   //           <TableCell align="right">message</TableCell>
//   //           <TableCell align="right">Country</TableCell>
//   //           <TableCell align="right">email&nbsp;($)</TableCell>
//   //         </TableRow>
//   //       </TableHead>
//   //       <TableBody>
//   //         {msg.map((row) => (
//   //           <TableRow key={row.name}>
//   //             <TableCell component="th" scope="row">
//   //              {row.name}
//   //             </TableCell>
             
//   //             <TableCell align="right">{row.phone}</TableCell>
//   //             <TableCell align="right">{row.message}</TableCell>
//   //             <TableCell align="right">{row.country}</TableCell>
//   //             <TableCell align="right">{row.email}</TableCell>
//   //           </TableRow>
//   //         ))}
//   //       </TableBody>
//   //     </Table>
//   //   </TableContainer>

//     <div>
//       {msg.map(({ id, text }) => (
//         <div className="messages">
//           <div className="msgheader">
//             <h5>{text.name} </h5>
//             <h5> {text.country} </h5>
//             <h6>{text.phone} </h6>
//             <h6>{text.email}</h6>
//           </div>
//           <div className="msgbody ">
//             {/* <p>{text.timestamp}</p>   */}
//             <p>{text.message}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
