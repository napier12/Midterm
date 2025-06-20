const flavor = [
    { name: "Chocolate", price: 2, details: "Milk Chocolate"},
    { name: "Vanilla", price: 2, details: "French Vanilla"},
    { name: "Strawberry", price: 3, details: "Strawberry flavor with strawberry pieces"},
    { name: "Cherry", price: 3, details: "Vanilla with cherry pieces"},
    { name: "Cookie Dough", price: 4, details: "Chocolate with cookie dough bites"},
    { name: "Cotton Candy", price: 4, details: "Vanilla with cotton candy bits"},
];

let actionMenu = document.querySelector(".actionMenu");
const actionDiv = document.createElement('div');
actionMenu.innerHTML = `<strong>Actions:</strong><br> C-Create a flavor <br> R-Read details <br> U-Update a Flavor <br> D-Delete a flavor`;

let flavorMenu = document.querySelector(".flavorMenu");

const flavorInput = () => {
    flavorMenu.innerHTML = " ";
    flavor.forEach((flavor) => {
    const flavorList = document.createElement('ul');
    flavorList.innerHTML = `<li>${flavor.name}</li>`;
    flavorMenu.append(flavorList);
    });
}

flavorInput();

const showInfo = () => {
    let action = document.querySelector("#selection").value;
    let selectedFlavor;
    switch (action){
        case "C":
            createFlavor();
            break;
        case "R":
            readFlavor();
            break;
        case "U":
            selectedFlavor = findFlavor();
            console.log(selectedFlavor);
            updateFlavor(selectedFlavor);
            break;
        case "D":
            selectedFlavor = findFlavor();
            deleteFlavor(selectedFlavor);
            break;

    }
};



const createFlavor = () => {
    let userFlavor = prompt("Flavor Name");
    let userPrice = prompt("Flavor Price");
    let userDetails = prompt("Flavor Details");
    flavor.push({
        name: userFlavor,
        price: parseFloat(userPrice),
        details: userDetails,
    });
    flavorInput();
    console.log(flavor);
};

let flavorDetail = document.querySelector(".flavorDetail");

const readFlavor = () => {
    let readEntry = prompt("Enter a Flavor: ");
    const foundFlavor = flavor.find(item => item.name === readEntry);
       if (foundFlavor) {
        flavorDetail.innerHTML = `${foundFlavor.name}, $${foundFlavor.price}, ${foundFlavor.details}`;
    } else {
        flavorDetail.innerHTML = `Flavor "${readEntry}" not found.`;
    }
    console.log(foundFlavor);
};

const findFlavor = () => {
    let searchName = prompt("Enter flavor to update:");
    const found = flavor.find(item => item.name === searchName);
    if (!found) {
        flavorDetail.innerHTML = `Flavor "${searchName}" not found.`;
    }
    return found;
};

const updateFlavor = (flavorUpdate) => {
    let choice = prompt(`What do you want to update for "${flavorUpdate.name}"? Enter 'name', 'price', or 'details':`);
    switch (choice) {
        case 'name':
            let newName = prompt("Enter new name:");
            flavorUpdate.name = newName;
            break;
        case 'price':
            let newPrice = prompt("Enter new price:");
            flavorUpdate.price = parseFloat(newPrice);
            break;
        case 'details':
            let newDetails = prompt("Enter new details:");
            flavorUpdate.details = newDetails;
            break;
        default:
            alert("Invalid choice.");
            return;
    }

    flavorInput();
    flavorDetail.innerHTML = `${flavorUpdate.name}, $${flavorUpdate.price}, ${flavorUpdate.details}`;
    console.log("Updated flavor:", flavorUpdate);
};

const deleteFlavor = (flavorUpdate) => {
    const index = flavor.findIndex(item => item.name === flavorUpdate.name);
    if (index !== -1) {
        flavor.splice(index, 1); 
        flavorInput(); 
        flavorDetail.innerHTML = `Flavor "${flavorUpdate.name}" has been removed.`;
        console.log(`Deleted: ${flavorUpdate.name}`);
    } else {
        flavorDetail.innerHTML = `Flavor "${flavorUpdate.name}" not found.`;
    }
};