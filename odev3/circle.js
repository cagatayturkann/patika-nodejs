const PI = Math.PI;

let circleArea = (r) => {
  return console.log('Circle Area: ' + PI * r ** 2);
};

let circleCircumference = (r) => {
  return console.log('Circle Circumference: ' +PI * 2 * r);
};

module.exports = {
  circleArea,
  circleCircumference
}
