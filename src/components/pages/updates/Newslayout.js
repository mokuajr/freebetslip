import React from "react";
import "./Newslayout.css";

function Newslayout({timestamp, idx, desc, tittle, imageUrl, }) {
  return (
    <div class="container">
      <div class="card">
        <div class="card-header">
          <img
            src={imageUrl}
            alt=""
          />
        </div>
        <div class="card-body">
          <span class="tag tag-pink">sports</span>
          <h4> {tittle} </h4>
          <p> {desc} </p>
          <div class="user">
            <img
              src={imageUrl}
              alt=""
            />
            <div class="user-info">
              <h5>Admin</h5>
              <small>{ new Date(timestamp?.toDate()).toUTCString()}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newslayout;
