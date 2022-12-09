
/*
const = BonusContainer = document.querySelector("cliquevent");
BonusContainer.style.borderRaduis = "200px"; */

const button = document.getElementById("extrabutton");
const tableau = document.getElementById("extratab");

const revealT = (elem) => {
    if (elem.style.display === "inline-block") {
        elem.style.display = "none";
    }
    else {
        elem.style.display = "inline-block";
    }
}

button.onclick = function(){revealT(tableau)};