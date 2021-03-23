// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];




//create a list to diplay the suggested list
cSuggestions = document.createElement("ul");
cSuggestions.id = "cSuggestions"
document.getElementById("suggestions").appendChild(cSuggestions);


//create a list of suggested country based on user input
document.getElementById("country").addEventListener("input", (e) => {

    let countryArray = [];
    let userInput = e.target.value;

    if (e.target.value) {
        countryNameArray = countryList.filter(country => country.toLowerCase().includes(userInput.toLowerCase()));
        countryNameArray = countryNameArray.map(country => `<li>${country}<li>`)
    }

    showCountryNameArray(countryNameArray);

})

function showCountryNameArray(countryNameArray) {
    const scriptHtml = !countryNameArray.length ? "" : countryNameArray.join("");
    document.querySelector("ul").innerHTML = scriptHtml;
}