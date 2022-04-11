// Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. 
// Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier 
// samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. 
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function tvDetails(inventory)
{
    return `${inventory.brand} ${inventory.type} - ${inventory.name}`
}
console.log(tvDetails(inventory[4]))


// Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. 
// Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. 
// Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

function tvFormatPrice(inventory)
{
    return `€${inventory.price},-`
}
console.log(tvFormatPrice(inventory[4]))

// Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm. 
// Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. 
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). 
// Test of jouw functie werkt in alle mogelijke gevallen.

function screenSizeFormat(screenSizes)
{
    let cleanFormatScreenSizes = ''

    for(let i = 0; i != screenSizes.length; i++)
    {
        if(i === 0)
        {
            cleanFormatScreenSizes += `${screenSizes[i]} inch (${screenSizes[i] * 2.54} cm)`
        }
        else
        {
            cleanFormatScreenSizes += ` | ${screenSizes[i]} inch (${screenSizes[i] * 2.54} cm)`
        }
    }
    return cleanFormatScreenSizes
}

console.log(screenSizeFormat(inventory[0].availableSizes))

// Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina. 
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)


function generateTvList(inventory)
{
    for(let i = 0; i != inventory.length; i++)
    {
        // Declare position element
        const tvListSection = document.getElementById('tvListSection')

        // Create Div
        const newTvListDiv = document.createElement("div")
        newTvListDiv.id = 'tvListDiv' + [i]
        newTvListDiv.className = 'tvList'

        tvListSection.appendChild(newTvListDiv)

        // Declare position element Div for TV list
        const tvListDiv = document.getElementById('tvListDiv' + [i])

        // Create first P
        const newTvListItem = document.createElement("p")
        const tvListContent = document.createTextNode(tvDetails(inventory[i]));
        newTvListItem.appendChild(tvListContent)

        tvListDiv.appendChild(newTvListItem)

        // Create second P
        const newTvListItemPrice = document.createElement("p")
        const tvListContentPrice = document.createTextNode(tvFormatPrice(inventory[i]))
        newTvListItemPrice.appendChild(tvListContentPrice);

        tvListDiv.appendChild(newTvListItemPrice)

        // Create third P
        const newTvListItemSize = document.createElement("p")
        const tvListContentSize = document.createTextNode(screenSizeFormat(inventory[i].availableSizes))
        newTvListItemSize.appendChild(tvListContentSize)

        tvListDiv.appendChild(newTvListItemSize)
    }
}

generateTvList(inventory)