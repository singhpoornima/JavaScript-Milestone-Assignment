function vowelCounter(string){
    const vowels = ["a","e","i","o","u","A","E","I","O","U"]
    let counter = 0
    for (const letter of string) {
        if(vowels.includes(letter)){
            counter++
        }
    }
    return counter
}
let result = vowelCounter("MIHIR")
console.log(result);