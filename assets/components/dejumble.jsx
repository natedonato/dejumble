import React from 'react';

class Dejumble extends React.Component {
    constructor(props){
        super(props);
        this.state={
            submit: false,
        }

        // this.sort = this.sort.bind(this);
    }

    sort(string){
        return(string.split("").sort().join("")); 
    }

    dejumbleSort(string){
        let sorted = this.sort(string);
        if (!this.props.sortedDict[sorted]) {
            return false;
        }
        return this.props.sortedDict[sorted];
    }

    render(){
        return(
        <div id="box">
            <h1 style="margin: 10px; font-family: 'Passion One', cursive;"> Dejumble.js</h1>
            <input id="1" placeholder="First word" type="text" />
            <input id="2" placeholder="Second word" type="text" />
            <input id="3" placeholder="Third word" type="text" />
            <input id="4" placeholder="Fourth word" type="text" />
            <button id="button"> DEJUMBLE </button>
        </div>
        )
    }
}



//     let one = document.getElementById('1');
//     let two = document.getElementById('2');
//     let three = document.getElementById('3');
//     let four = document.getElementById('4');
//     let button = document.getElementById("button");

//     button.addEventListener("click", () => {
//         let str1 = one.value.toLowerCase();
//         let str2 = two.value.toLowerCase();
//         let str3 = three.value.toLowerCase();
//         let str4 = four.value.toLowerCase();
        
//         console.log(str1.dejumbleSort());
//         console.log(str2.dejumbleSort());
//         console.log(str3.dejumbleSort());
//         console.log(str4.dejumbleSort());
//     });
// });