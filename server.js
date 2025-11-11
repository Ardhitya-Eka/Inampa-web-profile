const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = false; // karena production
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // semua request dilewatkan ke Next.js
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Ready on http://localhost:${port}`);
  });
});
