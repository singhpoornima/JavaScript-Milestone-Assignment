let arr = ["january", "feb", "march", "april", "january", "april"];
function removeDuplicate(data){
    return arr.filter((duplicateItems,index)=>
        data.indexOf(duplicateItems) === index
    )

}
let result = removeDuplicate(arr);
console.log(result);
