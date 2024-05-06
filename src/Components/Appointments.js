import React, { useEffect, useState } from "react";
import "../Styles/Appointments.css";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {static_appointments} from "../Scripts/static_appointments";
import AverageWaitingTime from "./AverageWaitingTime";

function Appointments() {

    const [appointments,setAppointments] = useState(static_appointments);

    const mapIcon = (type) => {
        switch (type.split(' ')[0]) {
            case "Dental": return faTooth;
            case "Emergency":  return faTruckMedical;
            case "Heart": return faHeartPulse;
                break;
            default:
                break;
        }
    }

    return (
      <div className="appointments-section" id="appointments">
        <div className="dt-title-content">
          <h3 className="dt-title">
            <span>Appointments</span>
          </h3>
  
          <p className="dt-description">
            We ensure a wide range of healthcare services available to patients
            whenever they need them. All our patients can rely on timely and efficient
             medical assistance while adhering to the highest quality standards.
          </p>
        </div>
        <div className="appointments-table">
      <table>
        <thead>
          <tr>
            <th>Patient First Name</th>
            <th>Patient Last Name</th>
            <th>Type</th>
            <th>Doctor</th>
            <th>Duration</th>
            <th>Waiting Time (hours)</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.patientFirstName}</td>
              <td>{appointment.patientLastName}</td>
              <td>{appointment.type}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.duration}</td>
              <td>{appointment.waitingTime}</td>
              <td><FontAwesomeIcon className="appointment-fa-icon" icon={mapIcon(appointment.type)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <AverageWaitingTime appointments={appointments}/>
    </div>
      </div>
    );
  }
  
  export default Appointments;