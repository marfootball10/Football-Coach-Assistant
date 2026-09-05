let dashboard_btn = document.getElementById("dashboard_btn")
let players_btn = document.getElementById("players_btn")
let training_btn = document.getElementById("training_btn")
let dashboard_div = document.querySelector(".dashboard_content")
let players_div = document.querySelector(".players_content")
let training_div = document.querySelector(".training_content")

dashboard_btn.addEventListener("click", () => {
    players_div.style.display = "none"
    training_div.style.display = "none"
    dashboard_div.style.display = "flex"
})

players_btn.addEventListener("click", () => {
    dashboard_div.style.display = "none"
    training_div.style.display = "none"
    players_div.style.display = "flex"
})

training_btn.addEventListener("click", () => {
    dashboard_div.style.display = "none"
    players_div.style.display = "none"
    training_div.style.display = "flex"
})