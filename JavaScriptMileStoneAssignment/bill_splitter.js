function calculateTotalBillForTable( costOfEachDish, numberOfPeopleShare){
    let totalBill = costOfEachDish * numberOfPeopleShare;
    let  billToBePaidByEachPerson = totalBill / numberOfPeopleShare;
    let object = {
        totalBill : numberOfPeopleShare * costOfEachDish,
        billToBePaidByEachPerson : totalBill / numberOfPeopleShare
    }
    
return object;
}

let results = calculateTotalBillForTable(3455, 8);
console.log(results);