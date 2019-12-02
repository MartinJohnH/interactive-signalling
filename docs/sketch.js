
let numOfUsers = 0;

let data = [];
let parsedData = new Array(144);

let cols = 0;
let rows = 0;
let index = 0;
let signal = 0;

let selectedColour = "#F2F2F2";

function setup() {
    noLoop();
    createCanvas(windowWidth, windowHeight);
    background(255);
    getNewData();
}

function writeUserData(data) {
    ref.update({'results': data });
}

// let timer = setInterval(function(){
//     console.log("new data");
//     loadJSON('./inputData/output.json', function (response) {
//         data = Array.from(response.results);
//         //console.log(data);
//         writeUserData(data);
//     });
//
// }, 72000);

function getNewData() {
    ref.on('value', function(dataCallback){
        console.log(dataCallback.val());
        data = dataCallback.val().results;
        index = 0;
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    updateMatrix();
}


function inputColour(event){
    selectedColour = event.value;
    parsedData[0] = rows+1;
    ref.update({'colour': event.value });
    ref.on('value', function(dataCallback){
        // console.log(dataCallback.val().colour);
        selectedColour = dataCallback.val().colour;
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
}


function newUser(event){
    numOfUsers++;
    if(cols < 144){
        cols = 4 * numOfUsers;
        rows = 4 * numOfUsers;
    }
}


function updateMatrix() {
    parsedData.unshift(data[index%cols]);
    //parsedData.pop();
    index++;
    for (let i = 0; i < cols; ++i){
        for (let j = 0; j< cols; ++j){
            let x = j * (width/cols);
            let y = i * (height/rows);
            //console.log(i +  ", " + j);
            //noStroke();
            //noFill();
            fill(240,240,240, 150);
            if((parsedData[j]) !== 0 && i > Math.floor((rows - (parsedData[j]))/2) && i-(Math.floor((rows - (parsedData[j]))/2)) < (parsedData[j])){
                //console.log(parsedData[j]);
                if(parsedData[j] === rows+1){
                    // stroke(0,0,0, 245);
                    // fill(240,240,240, 100);
                }else{
                    //stroke(0,0,0, 245);
                    // fill(240,240,240, 100);
                    stroke(255);
                    fill(selectedColour + 50);
                }
                signal--;
            }else{
                Math.floor(Math.random()*4) === 0 ? stroke(230) : stroke(240);
                Math.floor(Math.random()*4) === 0 ? noFill() : fill(240,240,240, 150);
            }
            //stroke(153);
            noStroke();
            //noFill();
            rect(x,y, (width/cols), (height/rows));
            //ellipse(x, y, (width/cols), (height/rows));
            // for (let i = 0; i < 10; i ++) {
            //     ellipse(x, y, (width/cols), (height/rows));
            //     //rotate(PI/5);
            // }

        }
    }
    setTimeout(updateMatrix, 1000);
}
