let rows = 6;
let pattern = "";

for(r = 1; r <= rows; r++){

    for(let num = 1; num <= r; num++){
         
        pattern += num;
    }
    pattern += "\n";
}

console.log(pattern);
