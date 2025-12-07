//-- Uppgift 4: Skapa variabler ---

// Checkboxen
const checkBox = document.querySelector("#divStyle");

// Alla textfields
const textFields = document.getElementsByClassName("textfield");

//button
const button = document.getElementById("remove");

//Tom div 
const theDiv = document.querySelector("#empty");

// Uppgift 5
// Denna funktion körs när man skriver i textfälten eventlyssnare

function handleInput(e){
    console.log("Target:", e.target); // skriver ut elementet som triggade eventet till konsolen.

    const inputName = e.target.name; // hämta namnet på fältet.

    if (inputName == "content"){
        theDiv.innerHTML = e.target.value; // om värdet heter "content" skriv värdet till div.
    }
}

//UPPGIFT 6 

// Eventlyssnare till checkboxen (anonym funktion)

// Hämta färg-inputfältet ur samlingen textFields
let colorInput = null;
for (const field of textFields) {
    if (field.name === "color") {   // eller field.id === "color"
        colorInput = field;
        break;
    }
}

if (!colorInput) {
    console.error('Kunde inte hitta färg-fältet med name/id "color".');
}

// När checkboxen ändras → ändra bakgrundsfärgen på theDiv
checkBox.addEventListener("change", function () {
    const chosenColor = colorInput.value;  // hämta färgen från input-fältet
    theDiv.style.backgroundColor = chosenColor;

    console.log("Checkbox ändrad – satte bakgrundsfärg till:", chosenColor);
});


//Eventlyssnare till textfälten (använda funktionen från Uppgift 5)

// Funktionen från uppgift 5 heter handleInput
for (const field of textFields) {
    field.addEventListener("input", handleInput);  
    // alternativt:
    // field.addEventListener("blur", handleInput);
}


//Eventlyssnare till knappen (anonym funktion)

// När knappen klickas → ta bort hela div-elementet från DOM
button.addEventListener("click", function () {
    theDiv.remove();
    console.log("Div-elementet (#empty) har tagits bort från DOM.");
});
