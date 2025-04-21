import React, { useEffect, useState } from 'react';
import { fetchFlightData } from '../api';

function PlaneSchedule() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetchFlightData().then(data => setFlights(data));
  }, []);

  return (
    <div>
      <h2>Flight Schedule</h2>
      <ul>
        {flights.map((flight, idx) => (
          <li key={idx}>
            {flight.flight} - {flight.destination} at {flight.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaneSchedule;
