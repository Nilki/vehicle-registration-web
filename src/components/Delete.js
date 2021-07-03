import React, { useState, useEffect } from "react";
import "./Delete.css";


function Delete() {
  return (
    <div className="DeleteVehicle">
      <h1>Deleting Vehicles</h1>
      <div className="containDelete">
        <label>Plate Number</label>
        <input
          placeholder="Enter Plate Number"
        />
      </div>
      <button className="delete" type="submit" >
        Delete
      </button>
    </div>
  );
}

export default Delete;