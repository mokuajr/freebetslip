import React from "react";
import "./Newslayout.css";

function Newslayout({ timestamp, idx, desc, tittle, imageUrl }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-body">
          <span className="tag tag-pink">sports</span>
          <h4> {tittle} </h4>
          <p> {desc} </p>
          <div className="user">
            <img src={imageUrl} alt="" />
            <div className="user-info">
              <h5>Admin</h5>
              <small>{new Date(timestamp?.toDate()).toUTCString()}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newslayout;
