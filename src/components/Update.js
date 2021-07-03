import React, { useState, useEffect } from "react";
import "./Update.css";


function Update() {
  //   const [ownerName, setOwnerName] = useState("");
  //   const [plateNumber, setPlateNumber] = useState("");
  //   const [carBrand, setCarBrand] = useState("");
  //   const [details, setDetails] = useState([]);
  //   const [success, setSuccess] = useState(false);

  //   const search = async (e) => {
  //     e.preventDefault();

  //     console.log(plateNumber);

  //     await axios
  //       .post("/task/three/get/details/one", {
  //         plateNumber: plateNumber,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         const response = res.data;
  //         setDetails(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   const submit = async () => {
  //     await axios
  //       .post("/task/three/get/details/update", {
  //         plateNumber: plateNumber,
  //         ownerName: ownerName,
  //         carBrand: carBrand,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         setSuccess(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setSuccess(false);
  //       });

  //     setCarBrand("");
  //     setOwnerName("");
  //     setPlateNumber("");
  //   };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setSuccess(false);
  //     }, 1000);
  //   }, [success]);

  return (
    <div className="UpdateVehicle">
      <h1>Updating Vehicles</h1>
      <div className="containNumber">
        <label>Plate Number</label>
        <input
          //   value={plateNumber}
          //   onChange={(e) => setPlateNumber(e.target.value)}
          placeholder="Enter Plate Number"
        />
        <button className="search" type="submit" >
          Search
        </button>
      </div>

      {
        // <p>
        //   Current owner Name : {details.ownerName} <br /> Current Car Brand :
        //   {details.carBrand}
        // </p>
      }

      <div className="containNumber">
        <label>Name</label>
        <input
          //   value={ownerName}
          //   onChange={(e) => setOwnerName(e.target.value)}
          placeholder="Enter Owner Name"
        />
      </div>
      <div className="containNumber">
        <label>Brand</label>
        <input
          //   value={carBrand}
          //   onChange={(e) => setCarBrand(e.target.value)}
          placeholder="Enter Car Brand"
        />
      </div>
      <button className="update" type="submit" >
        Update
      </button>

      {/* {success && <p style={{ color: "red" }}>Successfully Updated Vehicle</p>} */}
    </div>
  );
}

export default Update;