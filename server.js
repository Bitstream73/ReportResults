const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DEPLOYED_AT = new Date().toISOString();
const START_TIME = Date.now();

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Health / status endpoint — public, no auth required
app.get('/status', (req, res) => {
  res.json({
    service: 'ReportResults',
    status: 'ok',
    deployedAt: DEPLOYED_AT,
    uptime: Math.floor((Date.now() - START_TIME) / 1000),
  });
});

// Root redirect to index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ReportResults server running on port ${PORT}`);
});
