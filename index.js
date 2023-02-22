let home = document.getElementById("home-score");
let homeScore = 0


function add1Home() {
    homeScore += 1
    home.textContent = homeScore
}
function add2Home() {
    homeScore += 2
    home.textContent = homeScore
}
function add3Home() {
    homeScore += 3
    home.textContent = homeScore
}

let guest = document.getElementById("guest-score");
let guestScore = 0

function add1Guest() {
    guestScore += 1
    guest.textContent = guestScore
}
function add2Guest() {
    guestScore += 2
    guest.textContent = guestScore
}
function add3Guest() {
    guestScore += 3
    guest.textContent = guestScore
}

function reset() {
    homeScore = 0
    home.textContent = homeScore

    guestScore = 0
    guest.textContent = guestScore
}