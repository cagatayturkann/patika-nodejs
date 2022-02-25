const PI = Math.PI;
let radius = process.argv.slice(2)
function calculateArea(radius) {
  let area = PI * (radius**2)
  console.log(`Yarıçapı ${radius} olan dairenin alanı ${area}`);
}
calculateArea(radius[0])