const convertToCelsius = function(fahrenheit) {
  conversion =  (fahrenheit-32)/(9/5)
  reminder = conversion % 1;
  diff = conversion - reminder;

  return (diff + Math.ceil(reminder*10)/10)




  return conversion
};

const convertToFahrenheit = function(celsius) {
  let conversion =  celsius*9/5 + 32;
  reminder = conversion % 1;
  diff = conversion - reminder;

  return (diff + Math.ceil(reminder*10)/10)
  
};
console.log(convertToCelsius(100)); //37.8
console.log(convertToCelsius(-100)); //-73.3




// reminder = 37.7999 % 1 -> 0.799
// convert = reminder * 10 // 7.999
// math.floor


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
