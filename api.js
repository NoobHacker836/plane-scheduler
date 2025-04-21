export async function fetchFlightData() {
    const res = await fetch('http://localhost:3001/api/data');
    return res.json();
  }
  