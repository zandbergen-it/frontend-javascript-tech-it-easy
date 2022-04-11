// Opdracht 3a
// Stappenplan
// 1. Maak een variabele met een map van inventory
// 2. 

const tvBrands = inventory.map((inventory) => inventory.brand)

// Opdracht 3b
// Stappenplan
// 1. Declareer functie
// 2. Return map met de merken
// 3. Maak een loop om de list items te genereren

function getTvBrands(inventory){
    return inventory.map((inventory) => inventory.brand)
}

const allTvBrands = getTvBrands(inventory)
const tvBrandsElement = document.getElementById('tvBrands')

for (i = 0; i != allTvBrands.length; i++)
{
    const newTvListItem = document.createElement("li");
    const tvListContent = document.createTextNode(allTvBrands[i]);
    newTvListItem.appendChild(tvListContent);

    const contentSection = document.getElementById("");
    tvBrandsElement.appendChild(newTvListItem);
}
