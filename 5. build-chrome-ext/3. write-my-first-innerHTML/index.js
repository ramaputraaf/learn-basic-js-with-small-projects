const contEl = document.querySelector("#container")
contEl.innerHTML += '<button onclick = "buy()">Buy!</button>'

function buy() {
    contEl.innerHTML += '<p>Thank you for buying!</p>'
}