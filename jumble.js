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

document.addEventListener("DOMContentLoaded", () => {
    let one = document.getElementById('1');
    let two = document.getElementById('2');
    let three = document.getElementById('3');
    let four = document.getElementById('4');
    let button = document.getElementById("button");

    button.addEventListener("click", () => {
        let str1 = one.value.toLowerCase();
        let str2 = two.value.toLowerCase();
        let str3 = three.value.toLowerCase();
        let str4 = four.value.toLowerCase();
        
        // console.log(str1.dejumbleSort());
        // console.log(str2.dejumbleSort());
        // console.log(str3.dejumbleSort());
        // console.log(str4.dejumbleSort());

        [str1, str2, str3, str4].forEach((string, index) => {
            var select = document.getElementById("menu".concat(index + 1));
            select.innerHTML = "";
            var outputs = string.dejumbleSort();
            if(outputs === false){
                var el = document.createElement("option");
                el.textContent = "No answers found :(";
                el.value = "No answers found :(";
                select.appendChild(el);
            }else{
                for (var i = 0; i < outputs.length; i++) {
                    var opt = outputs[i];
                    var el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    select.appendChild(el);
                }
            }
        });

        
     



    });
});