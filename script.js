// Selecting Input
let input = document.querySelector("input");

// List-Section
let section = document.querySelector(".list-section");

// DataBase to hold to do list
let data = [];

// Input handle function
function handleInput(event) {
  if (event.keyCode === 13 && event.target.value !== "") {
    data.push({ task: event.target.value,strike:false});

    // To remove the existing text from input
    event.target.value = "";

    // Stop the repeatition of task in UI
    section.innerHTML = "";
    ui();
  }
}

// Function for List of UI
function ui() {
  data.forEach((element, index) => {
    let div = document.createElement("div");
    div.classList = "component";
    div.setAttribute('data-number',index);

    let para = document.createElement("p");
    para.innerText = `${element.task}`;

    let anchorOne = document.createElement('a');
    let anchorTwo = document.createElement('a');

    let iconTick = document.createElement("i");
    iconTick.classList = "fas fa-check";

    let iconCross = document.createElement("i");
    iconCross.classList = "fas fa-times";

    anchorOne.append(iconTick);
    anchorTwo.append(iconCross);

    div.append(anchorOne,para,anchorTwo);
    section.append(div);
  });
}

// Event Listener for Tick to srike off text
section.addEventListener('click',(event)=>{
    if(event.target.classList[1] === "fa-times"){
        let selectedComponent = event.target.parentElement.parentElement.dataset.number;
        delete data[selectedComponent];
        section.innerText ="";
        ui();
    }
    if(event.target.classList[1] === "fa-check"){
        event.target.parentElement.nextSibling.style.textDecoration ="line-through";
    }
})

// Event Listener on Input
input.addEventListener("keyup", handleInput);
