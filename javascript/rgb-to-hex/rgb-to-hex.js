export const rgb = function (r, g, b) {
  // complete this function
  r > 255 ? (r = 255) : r < 0 ? (r = 0) : "";
  g > 255 ? (g = 255) : g < 0 ? (g = 0) : "";
  b > 255 ? (b = 255) : b < 0 ? (b = 0) : "";

  r = convertLength(r);
  g = convertLength(g);
  b = convertLength(b);

  let hex = `${r + g + b}`.toUpperCase();

  return hex;
};

function convertLength(num) {
  if (num <= 15) {
    return `0${num.toString(16)}`;
  } else if (num.toString(16).length == 1) {
    return num.toString(16) + num.toString(16);
  } else {
    return num.toString(16);
  }
}
