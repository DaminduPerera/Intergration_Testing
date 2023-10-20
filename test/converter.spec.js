// converter.spec.js
const hexToRgb = require('../src/converter');

describe('hexToRgb', () => {
  it('should convert hex to RGB', () => {
    const hexColor = '#FF5733';
    const rgbColor = hexToRgb(hexColor);
    
    // Check if the returned object has the correct RGB values
    expect(rgbColor).toEqual({ r: 255, g: 87, b: 51 });
  });

  it('should handle lowercase hex values', () => {
    const hexColor = '#aabbcc';
    const rgbColor = hexToRgb(hexColor);
    
    // Check if the returned object has the correct RGB values for lowercase hex
    expect(rgbColor).toEqual({ r: 170, g: 187, b: 204 });
  });

  it('should handle hex without the # symbol', () => {
    const hexColor = '00FF00';
    const rgbColor = hexToRgb(hexColor);
    
    // Check if the returned object has the correct RGB values for hex without #
    expect(rgbColor).toEqual({ r: 0, g: 255, b: 0 });
  });

  it('should return null for an invalid hex color', () => {
    const hexColor = 'invalidHex';
    const rgbColor = hexToRgb(hexColor);
    
    // Check if the function returns null for an invalid hex color
    expect(rgbColor).toBeNull();
  });
});

