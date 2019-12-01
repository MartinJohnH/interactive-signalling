
let data = [];
let parsedData = Array(72).fill(0);

let cols = 72;
let rows = 36;

WebSessionCounter.update();


function hex2bin(hex){
    let bin1 = (parseInt(hex.substring(0, 6), 16).toString(2)).padStart(8, '0');
    let bin2 = (parseInt(hex.substring(6, 12), 16).toString(2)).padStart(8, '0');
    let bin3 = (parseInt(hex.substring(12, 18), 16).toString(2)).padStart(8, '0');

    let addistionZeros = "";
    if(bin1.length !== 24){
        let missingZeros = 24 - bin1.length;
        for(let i = 0; i < missingZeros; ++i){
            addistionZeros += "0";
        }
        bin1 = addistionZeros + bin1;
    }
    if(bin2.length !== 24){
        let missingZeros = 24 - bin2.length;
        for(let i = 0; i < missingZeros; ++i){
            addistionZeros += "0";
        }
        bin2 = addistionZeros + bin2;
    }
    if(bin3.length !== 24){
        let missingZeros = 24 - bin3.length;
        for(let i = 0; i < missingZeros; ++i){
            addistionZeros += "0";
        }
        bin3 = addistionZeros + bin3;
    }
    return (bin1 + bin2 + bin3);
}

// function preload() {
//     data = loadJSON('../output.json');
// }

function setup() {
    noLoop();
    createCanvas(windowWidth, windowHeight);
    background(255);
    getNewData();
    console.log(WebSessionCounter.count);
    //parsedData = Object.keys(data).map(function(_) { return data[_]; });
}

// (async () => {
//     const response = await fetch('https://interactive-signalling.netlify.com/?', {
//         mode: 'no-cors',
//         credentials: 'same-origin',
//         redirect: 'follow',
//         headers: {
//             'Content-Type': 'text/plain'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         }
//     });
//     const text = await response.text();
//     //console.log(text.match(/(?<=\<h1>).*(?=\<\/h1>)/));
//     console.log(text);
// })();
// let xhr = new XMLHttpRequest;
// //Call the open function, GET-type of request, url, true-asynchronous
// xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://5.45.79.15/input/?', true)
// //call the onload
// xhr.onload = function()
// {
//     //check if the status is 200(means everything is okay)
//     if (this.status === 200)
//     {
//         //return server response as an object with JSON.parse
//         console.log(this.responseText);
//     }
// };
// //call send
// xhr.send();


let index = 0;

function getNewData() {
    loadJSON('output.json', function (response) {
        data = Array.from(response.results);
        //console.log(data);
        index = 0;
        setTimeout(updateMatrix, 500);
    });
    //setTimeout(getNewData, 72000);
}

let signal = 0;
function updateMatrix() {
    parsedData.unshift(data[index%72]);
    parsedData.pop();
    index++;
    //console.log(data[2]);
    for (let i = 0; i < parsedData.length; ++i){
        for (let j = 0; j< parsedData.length; ++j){
            let x = j * (width/parsedData.length);
            let y = i * (height/36);

            //console.log(i +  ", " + j);
            noStroke();
            if(parsedData[j] !== 0 && i > Math.floor((36 - parsedData[j])/2) && i-(Math.floor((36 - parsedData[j])/2)) < parsedData[j]){
                fill(20);
                signal--;
            }else{
                Math.floor(Math.random()*4) === 0 ? fill(20) : fill(240);
            }
            rect(x,y, (width/parsedData.length), (height/36));
        }
    }
    setTimeout(updateMatrix, 500);
}

function draw(){
    // for (let i = 0; i < parsedData.length; ++i){
    //     let binaryNum =  hex2bin(parsedData[i]);
    //     for (let j = 0; j< binaryNum.length; ++j){
    //         let x = j * (width/binaryNum.length);
    //         let y = i * (height/36);
    //         noStroke();
    //         binaryNum.charAt(j) === '0' ? fill(20) : fill(240);
    //         rect(x,y, (width/binaryNum.length), (height/36));
    //     }
    // }
}
