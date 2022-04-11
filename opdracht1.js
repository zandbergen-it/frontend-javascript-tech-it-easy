// Opdracht 1a
// Stappenplan
// 1. Maak variabele met map en log hierin alle type namen

const tvTypes = inventory.map((tv) => tv.type)
console.log(tvTypes)

// Opdracht 1b
// Stappenplan
// 1. Maak variabele met filter op inventory
// 2. Bereken welke objecten uitverkocht zijn met originalStock - sold
// 3. Return objecten die uitverkocht zijn

const soldOutTvs = inventory.filter((tv) => tv.originalStock - tv.sold === 0)
console.log(soldOutTvs)

// Opdracht 1c
// Stappenplan
// 1. Maak variabele met filter op inventory
// 2. Filter op ambiLight key
// 3. Return alleen ambilight TV's

const ambiLightTVs = inventory.filter((tv) => tv.options.ambiLight)
console.log(ambiLightTVs)

// Opdracht 1d
// Stappenplan
// 1. Maak variabele met sort functie op inventory
// 2. Vergelijk prijzen en sorteer hiermee

const sortTvPrices = inventory.sort((a,b) => a.price - b.price )
console.log(sortTvPrices)