// server.js
const express = require("express");
const { hexToRGB } = require("../src/converter");
const tinycolor = require('tinycolor2');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/hex-to-rgb/:hex', (req, res) => {
  const hex = req.params.hex;

  try {
      const color = tinycolor(hex);
      if (color.isValid()) {
          const rgb = color.toRgb();
          res.json({ hex, rgb });
      } else {
          res.status(400).json({ error: 'Invalid HEX color code' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
