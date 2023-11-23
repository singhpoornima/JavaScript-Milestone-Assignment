// function correctBug(cartItems) {
//     let cart = [];
//     for (let i = 1; i <= cartItems.length; i++) {
//         cart.push([i] * 2);

//     }
//     return cart;
    
// }
// let result = correctBug([ 1,2,3,4,5,6]);
// console.log(result);

// let num = [1,2,3,4,5];
// for (let i = 0; i < num.length; i++) {
//     let arr = [];
//     arr.push(num[i] * 2);
//     console.log(arr);
// }
// ----------------------------------------------------------------------------------------------------------------------------

// my self: 

function correctBug([...cart]) {
    let cartItems = [];
    for (let i = 0; i < cart.length; i++) {
        cartItems.push(cart[i] * 2);
        
    }
    return cartItems;
}

let result = correctBug([1,2,3,4,5,7]);
console.log(result);




