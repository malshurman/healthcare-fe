import React, { useState } from 'react';
import "../Styles/Appointments.css";

const AverageWaitingTime = ({ appointments }) => {
  const [selectedType, setSelectedType] = useState('');
  
  // Calculate average waiting time for the selected type of service
  const calculateAverageWaitingTime = (type) => {
    const filteredAppointments = appointments.filter(appointment => appointment.type === type);
    const totalWaitingTime = filteredAppointments.reduce((acc, appointment) => acc + parseFloat(appointment.waitingTime), 0);
    const averageWaitingTime = totalWaitingTime / filteredAppointments.length;
    return averageWaitingTime.toFixed(2); // Return the average waiting time rounded to 2 decimal places
  }

  return (
    <div className="average-waiting-time">
        <span>Average Waiting Time for  </span>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                <option value="">Select Service Type</option>
                <option value="Dental Care">Dental Care</option>
                <option value="Emergency Care">Emergency Care</option>
                <option value="Heart Disease">Heart Disease</option>
        </select>
        {(selectedType && <span className="calculated-waiting-time">  : {calculateAverageWaitingTime(selectedType)} hours</span>)}
    </div>
  );
};

export default AverageWaitingTime;
