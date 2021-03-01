subjects.forEach(function(subject){ 
    console.log(subject)
}
)
console.log(subjects.length)

let currentSubject = 0;
let answerArray = [];
let checkArray = [];

const startButton = document.getElementById("startBtn")
const nextBtn = document.getElementById("nextBtn")
const previousBtn =document.getElementById("previousBtn")
const titleHeader = document.getElementById("title")
const statementPar = document.getElementById("statement")
const eensBtn = document.getElementById("eensBtn");
const oneensBtn = document.getElementById("oneensBtn");
const gvBeideBtn = document.getElementById("gvBeideBtn");





startButton.onclick = clickStartBtn;
nextBtn.onclick = nextPreviousBtn;
previousBtn.onclick = nextPreviousBtn;
eensBtn.onclick = clickStemBtn;
oneensBtn.onclick = clickStemBtn;
gvBeideBtn.onclick = clickStemBtn;


function clickStartBtn() {
    const container = document.getElementById("container");
    show(container);
    show(nextBtn);
    show(previousBtn);
    show(eensBtn);
    show(oneensBtn);
    show(gvBeideBtn);

    titleHeader.innerHTML = subjects[currentSubject].title;
    statementPar.innerHTML = subjects[currentSubject].statement;
}

//checkt button id
function nextPreviousBtn() {
    console.log(this.id)
    if (this.id == "nextBtn") {
        currentSubject++
        if(currentSubject < subjects.length){
            titleHeader.innerHTML = subjects[currentSubject].title;
            statementPar.innerHTML = subjects[currentSubject].statement;
        } else {
            currentSubject--
        }
        console.log(currentSubject);

    } else if (this.id == "previousBtn") {
        if (currentSubject != "0") {   
        currentSubject--
        if(currentSubject < subjects.length){
            titleHeader.innerHTML = subjects[currentSubject].title;
            statementPar.innerHTML = subjects[currentSubject].statement;
        }
        }
    }
}



function clickStemBtn() {
    var stem;
    if(this.id == "eensBtn") {
        stem = this.id
        console.log(stem);
        color(eensBtn);
        unColor(oneensBtn);
        unColor(gvBeideBtn);
        next();

    } else if (this.id == "oneensBtn") {
        stem = this.id;
        console.log(stem);
        color(oneensBtn);
        unColor(eensBtn);
        unColor(gvBeideBtn);

    } else if (this.id == "gvBeideBtn") {
        stem = this.id
        console.log(stem);
        color(gvBeideBtn);
        unColor(eensBtn);
        unColor(oneensBtn);

    }
    answerArray.push(this.id);
    if (answerArray.length >= subjects.length + 1) {
        answerArray.pop();
    }
    console.log(answerArray);

}

//show element
function show(element) {
    element.classList.remove("hidden")
}

//hide element
function hide(element) {
    element.classList.add("hidden")
}

//color element
function color(element) {
    element.style.backgroundColor = "green"
}


function unColor(element) {
    element.style.backgroundColor = "lightgray"
}

function next() {
    currentSubject++
        if(currentSubject < subjects.length){
            titleHeader.innerHTML = subjects[currentSubject].title;
            statementPar.innerHTML = subjects[currentSubject].statement;
        } else {
            currentSubject--
        }
        console.log(currentSubject);
}


// DOM Manipulation
// functions, parameters
// eventhandlers
// arrays en objects in javascript
// changing styles in javascript 