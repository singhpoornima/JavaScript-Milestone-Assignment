// Formula to convert from Celsius to Fahrenheit, F = (C * 1.8) + 32

// // let tempDataInCelsius = [48,40,35,30,25];
// function unitConverter(tempData) {
//     let fahrenheit = [];
//     for (let i = 0; i < tempData.length; i++) {
//         fahrenheit.push((tempData[i] * 1.8) + 32);
        
//         // console.log(temp);
//         // console.log("Fahrenheit:", temp);
//     }
//     return fahrenheit;
// }
// let result = unitConverter([48,40,35,30, 25]);
// console.log("Fahrenheit:", result);
// for (let i = 0; i < tempDataInCelsius.length; i++) {
//     const temp = (tempDataInCelsius[i] * 1.8) + 32;
//     console.log("Fahrenheit:", temp);
// }

function unitConverter([...celsius]) {
    let fahrenheit = [];
    for(let i = 0; i < celsius.length; i++){
        //  fahrenheit +=
          fahrenheit.push((celsius[i] * 9/5) + 32);
        // console.log("Fahrenheit:",fahrenheit);
        }
        return fahrenheit;
}
let fahrenheit = unitConverter([25,56,45,80]);
console.log("Fahrenheit:",fahrenheit);
// const celsius = [25,56,45,80];
// for(let i = 0; i < celsius.length; i++){
// let fahrenheit = [];
//  fahrenheit += fahrenheit.push((celsius[i] * 9/5) + 32);
// console.log("Fahrenheit:",fahrenheit);
// }

function unitConverter([...celsius]) {
  let fahrenheit = [];
  for(let i = 0; i <= celsius.length; i++) {
    fahrenheit.push(celsius[i] * (9/5) + 32);
  }
  return fahrenheit;
}

let fahren = unitConverter([23,56]);
console.log(fahren);