subjects.forEach(function(subject){ 
    console.log(subject.parties[1].name)
}
)
console.log(subjects.length)

var stemmen = [];
let currentSubject = 0;
let answerArray = [];
let checkArray = [];
const startButton = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const previousBtn =document.getElementById("previousBtn");
const titleHeader = document.getElementById("title");
const statementPar = document.getElementById("statement");
const partiePar = document.getElementById("parties");
const eensBtn = document.getElementById("eensBtn");
const oneensBtn = document.getElementById("oneensBtn");
const gvBeideBtn = document.getElementById("gvBeideBtn");


var parties = subjects[0]["parties"];
console.log(parties);


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
    partiePar.innerHTML = parties["position"];
}

//checkt button id
function nextPreviousBtn() {
    console.log(this.id)
    if (this.id == "nextBtn") {
        stemmen = "a"
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
    if(this.id == "eensBtn") {
        stemmen = this.id
        console.log(stemmen);
        next();

    } else if (this.id == "oneensBtn") {
        stemmen = this.id;
        console.log(stemmen);
        next();
    } else if (this.id == "gvBeideBtn") {
        stemmen = this.id
        console.log(stemmen);
        next();

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
        console.log(currentSubject)
}



// DOM Manipulation
// functions, parameters
// eventhandlers
// arrays en objects in javascript
// changing styles in javascript 