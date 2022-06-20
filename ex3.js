// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)
const currentDate = () => {
  const d = new Date()
  const date = d.toLocaleDateString()
  const time = d.toLocaleTimeString()
  console.log(`The current date and time is ${date} ${time}`)
}

currentDate()

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

setTimeout(() => {
  console.log("I’m ready")
}, 5000);

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C

const convertToFa = (c) => {
  let f = (c * 9 / 5) + 32
  return f
}
console.log(convertToFa(15.5))

const convertToCe = (f) => {
  return (f - 32) * 5 / 9
}
console.log(convertToCe(100))




