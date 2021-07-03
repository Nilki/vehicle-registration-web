import React, { useState, useEffect } from "react";
import "./Delete.css";


function Delete() {

//    const [plateNumber, setPlateNumber] = useState("");
//    const [success, setSuccess] = useState(false);

//    const submit = () => {
//     axios.post("/task/three/get/details/delete", {
//       plateNumber: plateNumber,
//     }).then((res) => {
//       console.log(res.data)
//       setSuccess(true);
//     }).catch((err) => {
//       console.log(err)
//       setSuccess(false);
//     })
//    }

//    useEffect(() => {
//      setTimeout(() => {
//        setSuccess(false);
//      }, 1000);
//    }, [success]);

  return (
    <div className="DeleteVehicle">
      <h1>Deleting Vehicles</h1>
      <div className="containDelete">
        <label>Plate Number</label>
        <input
        //   value={plateNumber}
        //   onChange={(e) => setPlateNumber(e.target.value)}
          placeholder="Enter Plate Number"
        />
      </div>
      <button className="delete" type="submit" >
        Delete
      </button>
      {/* {success && (
        <p style={{ color: "red" }}>Successfully Deleted Vehicle</p>
      )} */}
    </div>
  );
}

export default Delete;