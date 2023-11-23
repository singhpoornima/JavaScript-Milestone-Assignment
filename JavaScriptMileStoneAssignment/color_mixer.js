// Project-3- Color Mixer:

let color1 = "red";
let color2 = "red";

if(color1 == "red" && color2 == "blue" || color1 == "blue" && color2 == "red"){
    console.log("purple");

}else if(color1 == "red" && color2 == "yellow" || color1 == "yellow" && color2 == "red"){
    console.log("orange");

}else if(color1 == "blue" && color2 == "yellow" || color1 == "yellow" && color2 == "blue"){
    console.log("green");

}else{
    console.log("Invalid color combination");
}