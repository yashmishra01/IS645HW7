// Character list. Each house has a name and a code
const houses = [{
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; //Empty array
    }
};

const createOptionElement = (text, value) => {
    const elem1 = document.createElement("option");
    elem1.textContent = text;
    elem1.value = value;
    return elem1;
};


const createLiElement = namelist => {
    const elem2 = document.createElement("li");
    elem2.textContent = namelist;
    return elem2;
};


const houseElem = document.querySelector("select");


houses.forEach(house => {
    houseElem.appendChild(createOptionElement(house.name, house.code));
});


houseElem.addEventListener("change", e => {

    const char = getCharacters(e.target.value);
    const characterElement = document.getElementById("characters");



    characterElement.innerHTML = "";


    char.forEach(character => {
        characterElement.appendChild(createLiElement(character));
    });
});