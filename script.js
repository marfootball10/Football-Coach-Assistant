let dashboard_btn = document.getElementById("dashboard_btn")
let players_btn = document.getElementById("players_btn")
let training_btn = document.getElementById("training_btn")
let dashboard_div = document.querySelector(".dashboard_content")
let players_div = document.querySelector(".players_content")
let training_div = document.querySelector(".training_content")
let menu_toggle = document.querySelector(".menu_toggle")
let left_sidebar = document.querySelector(".left_sidebar")
let out_of_menu = document.querySelector(".out_of_menu")

menu_toggle.addEventListener("click", function () {
    left_sidebar.classList.add("active")
    menu_toggle.style.display = 'none'
    out_of_menu.style.display = 'flex'
})

out_of_menu.addEventListener('click', function () {
    left_sidebar.classList.remove("active")
    menu_toggle.style.display = 'block'
    out_of_menu.style.display = 'none'
})

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