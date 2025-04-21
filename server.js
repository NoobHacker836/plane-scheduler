const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json([
    { flight: "AB123", time: "10:00", destination: "New York" },
    { flight: "CD456", time: "12:30", destination: "London" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
