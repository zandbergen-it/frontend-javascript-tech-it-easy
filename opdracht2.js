// Opdracht 2a
// Stappenplan
// 1. Maak een variabele voor verkochte TV's met waarde 0
// 2. Maak for loop die alle TV's uit inventory langs gaat 
// 3. Tel verkochte TV's op bij de verkochte TV variabele
// 4. Return verkochte TV's variabele

function numberOfSoldTvs(inventory)
{
    let nrOfSoldTvs = 0

    for (let i = 0; i != inventory.length; i++)
    {
        nrOfSoldTvs += inventory[i].sold
    }

    return nrOfSoldTvs
}

console.log(numberOfSoldTvs(inventory))

// Opdracht 2b
// Stappenplan
// 1. Maak een element in HTML met een ID
// 2. Maak een verwijzing in javascript naar het element
// 3. Gebruik innerText voor het invullen van het aantal verkochte TV's

const soldTvs = document.getElementById('soldTvs')
soldTvs.innerText = `Er zijn ${numberOfSoldTvs(inventory)} TV's verkocht.`

// Opdracht 2c
// Stappenplan
// 1. Maak een variabele met ingekochte TV's met waarde 0
// 2. Maak een loop voor ingekochte TV's
// 3. Tel ingekochte TV's op bij de verkochte TV variabele
// 4. Return ingekochte TV's

function numberOfBoughtTvs(inventory)
{
    let nrOfBoughtTvs = 0

    for (let i = 0; i != inventory.length; i++)
    {
        nrOfBoughtTvs += inventory[i].originalStock
    }

    return nrOfBoughtTvs
}

console.log(numberOfBoughtTvs(inventory))

// Opdracht 2d
// Stappenplan
// 1. Maak een element in HTML met een ID
// 2. Maak een verwijzing in javascript naar het element
// 3. Gebruik innerText voor het invullen van het aantal verkochte TV's

const boughtTvs = document.getElementById('boughtTvs')
boughtTvs.innerText = `Er zijn ${numberOfBoughtTvs(inventory)} TV's ingekocht.`

// Opdracht 2e
// Stappenplan
// 1. Maak variabele voor te verkopen TV's
// 2. Bereken het aantal te verkopen TV's dmv inventory - verkochte TV's

const toBeSoldTvs = numberOfBoughtTvs(inventory) - numberOfSoldTvs(inventory)

const toBeSoldTvsElement = document.getElementById('toBeSoldTvs')
toBeSoldTvsElement.innerText = `Er zijn nog ${toBeSoldTvs} TV's in de verkoop.`