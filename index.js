// Challenge 1: Your Age in Days


function ageInDays(){
    let birthYear = prompt("What year were you born alaye?")
    let ageyInDays = (2022 - birthYear) * 365;
    let h1 = document.createElement('h1')
    let textAnswer = document.createTextNode("You are "+ ageyInDays + " days")
    h1.setAttribute("id", "ageeInDays");
    h1.appendChild(textAnswer);
    document.querySelector("#flex-box-result").appendChild(h1)
}

function reset(){
    document.querySelector("#ageeInDays").remove();
}





