// converter.js

function hexToRgb(hex) {
  // Remove the hash (#) symbol if it exists
  hex = hex.replace(/^#/, '');

  // Parse the hexadecimal string to an integer
  const hexValue = parseInt(hex, 16);

  // Extract the red, green, and blue components
  const red = (hexValue >> 16) & 255;
  const green = (hexValue >> 8) & 255;
  const blue = hexValue & 255;

  return {
    r: red,
    g: green,
    b: blue,
  };
}

module.exports = hexToRgb;
