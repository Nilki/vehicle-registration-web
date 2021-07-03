import React, { useEffect, useState } from "react";
import "./Read.css";


function Read() {
  return (
    <div className="ViewVehicle">
      <table>
        <tr>
          <th>Owner's Name</th>
          <th>Plate Number</th>
          <th>Car Brand</th>
        </tr>
      </table>
    </div>
  );
}

export default Read;