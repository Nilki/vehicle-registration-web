import React from "react";
import "./Create.css";

function Create() {
    return (
        <div className="CreateVehicle">
            <h1>Vehicle Registration</h1>
            <div className="contain">
                <label>Full Name</label>
                <input
                    placeholder="Enter Owner Name"
                />
            </div>
            <div className="contain">
                <label>Plate Number</label>
                <input
                    placeholder="Enter Plate Number"
                />
            </div>
            <div className="contain">
                <label>Car Brand</label>
                <input
                    placeholder="Enter Car Brand"
                />
            </div>
            <button className="submitCreate" type="submit" >
                Submit
            </button>
        </div>
    );
}

export default Create;
