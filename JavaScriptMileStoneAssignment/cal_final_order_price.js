let unitPrice;
let quantity;
let customerCart = [{
    unitPrice: unitPrice,
    quantity: quantity
}]

let totalCost = (unitPrice, quantity) => {
    console.log("The total cost of items:",unitPrice * quantity);
} 
totalCost(1500,2);

