let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = "Stocks Up: " + count + " | "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}

console.log("Tracking Stocks Closing Green!")
