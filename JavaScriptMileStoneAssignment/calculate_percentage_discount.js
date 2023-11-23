let originalPrice = 1000;
let sellingPrice = 500;
const discountedPrice = originalPrice - sellingPrice;

let calculatePercentageDiscount = () => {
    return (discountedPrice / originalPrice) * 100;
}

let gettingDiscountPercentage = calculatePercentageDiscount();
console.log("The total discounted percentage of the products is :",gettingDiscountPercentage);
