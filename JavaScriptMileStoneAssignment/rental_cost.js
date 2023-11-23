function calculateRentalCost(numberOfDays,carType) {
    let rentalCost;
    if(carType === "economy"){
        rentalCost = 4000;
    }else if(carType == "midSize"){
        rentalCost = 10000;
    }else if(carType == "luxury"){
        rentalCost = 20000;
    }else{
        console.log("Invalid car name.");
    }
    return  rentalCost * numberOfDays;
}

let totalCost = calculateRentalCost(12,"economy");
console.log("The total rented cost with perday:", totalCost);
