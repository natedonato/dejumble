// const { dict } = require("./words_dictionary.js");
const { sortedDict } = require("./output.js");
// const fs = require('fs');


String.prototype.sort = function() {
    return(this.split("").sort().join(""));
};

// let sortedDict = {};
// Object.keys(dict).forEach(word=>{
//     let sortedword = word.sort();
//     if(!sortedDict[sortedword]){
//         sortedDict[sortedword] = [word];
//     }else{
//         sortedDict[sortedword].push(word);
//     }
// });
// console.log(sortedDict);
// fs.writeFile("output.txt", JSON.stringify(sortedDict), err => {console.log("fuck")})


String.prototype.dejumbleSort = function(){
    let sorted = this.sort();
    if(!sortedDict[sorted]){
        return false;
    }
    return sortedDict[sorted];
};

function getcombinations(arr, k){
    
};




console.log("itnga".dejumbleSort());
console.log("kaoew".dejumbleSort());
console.log("nucpha".dejumbleSort());
console.log("otlbet".dejumbleSort());
