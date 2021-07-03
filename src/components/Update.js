import React, { useState, useEffect } from "react";
import "./Update.css";


function Update() {
  return (
    <div className="UpdateVehicle">
      <h1>Updating Vehicles</h1>
      <div className="containNumber">
        <label>Plate Number</label>
        <input
          placeholder="Enter Plate Number"
        />
        <button className="search" type="submit" >
          Search
        </button>
      </div>

      {

      }

      <div className="containNumber">
        <label>Name</label>
        <input
          placeholder="Enter Owner Name"
        />
      </div>
      <div className="containNumber">
        <label>Brand</label>
        <input
          placeholder="Enter Car Brand"
        />
      </div>
      <button className="update" type="submit" >
        Update
      </button>
    </div>
  );
}

export default Update;