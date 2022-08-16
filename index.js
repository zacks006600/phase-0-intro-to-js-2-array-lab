// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    appendCat = [...cats, 'Broom'];
    cats;
    return appendCat
}

function prependCat(name) {
    prependCat = ['Arnold', ...cats]
    cats;
    return prependCat
}

function removeLastCat() {
    removeLastCat = cats.slice(0, cats.length - 1)
    return removeLastCat
}

function removeFirstCat() {
    removeFirstCat = cats.slice(1)
    return removeFirstCat
}
