import React, {useEffect, useState } from "react";
import { db, timestamp } from "../Firebase/firebase";


export default function ClientMessages () {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    db.collection("contacts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //evry time anew post is added, fire  this code
        setMsg(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            text: doc.data()
          }))
        );
      });
  }, []);
  return (
    <div>
     
      <div className="messages">
        <div className="msgheader">
          <h5> name </h5>
          <h5>  country </h5>
          <h6> phone </h6>
          <h6> email</h6>
        </div>
        <div className="msgbody ">
          {/* <p>{text.timestamp}</p>   */}
          <p> message</p>
        </div>
      </div>
     
    </div>
  );
}
