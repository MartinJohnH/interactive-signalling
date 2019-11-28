let data = [];
let parsedData;

let cols = 72;
let rows = 36;

let mockData = ["e60000ffffe2e25010", "8740de6940d31c01bb", "6715dcaf12d3ac1e57", "06ae1a400040280000", "450000ed0800435083", "80784ff3529e00000a", "7429eb9ec6a2c6c895", "30486d0dff60c13742", "4fe314f4890ef24821", "8f65696334063a924d"];


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
    setTimeout(getNewData, 1000);
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
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://5.45.79.15/input/?', true)
//call the onload
xhr.onload = function()
{
    //check if the status is 200(means everything is okay)
    if (this.status === 200)
    {
        //return server response as an object with JSON.parse
        console.log(this.responseText);
    }
};
//call send
xhr.send();


function getNewData() {
    loadJSON('output.json', function (response) {
        data = Array.from(response.results);
        //console.log("yaaasasssss");
        setTimeout(updateMatrix, 1000);
    });
    setTimeout(getNewData, 10000);
}

let k = 2;
let signal = 0;
function updateMatrix() {
    //console.log(data[2]);
    signal = data[2];
    let pastCol = 0;
    for (let i = 0; i < data.length; ++i){
        for (let j = 0; j< data.length; ++j){
            let x = j * (width/data.length);
            let y = i * (height/36);

            //console.log(i +  ", " + j);
            noStroke();
            //stroke(0,0,0);

            if(i !== pastCol && signal >= 0){
                fill(20);
                signal--;
            }else{
                fill(240);
            }
            if(pastCol !== i){
                pastCol = i;
            }
            //data.charAt(j) === '0' ? fill(20) : fill(240);
            //fill(255);
            rect(x,y, (width/data.length), (height/36));
        }
    }
    //setTimeout(updateMatrix, 1000);
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
