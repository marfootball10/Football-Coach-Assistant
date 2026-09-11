let dashboard_btn = document.getElementById("dashboard_btn")
let players_btn = document.getElementById("players_btn")
let training_btn = document.getElementById("training_btn")
let add_player_btn = document.querySelector('.add_player_btn')
let back_to_players = document.querySelector('.go_back_to_players')
let save_player_btn = document.querySelector('.save_player')
let dashboard_div = document.querySelector(".dashboard_content")
let players_div = document.querySelector(".players_content")
let training_div = document.querySelector(".training_content")
let new_player_div = document.querySelector('.new_player')
let menu_toggle = document.querySelector(".menu_toggle")
let left_sidebar = document.querySelector(".left_sidebar")
let out_of_menu = document.querySelector(".out_of_menu")

class Player {
  constructor(name, surname, age, height, weight, position, dominant_leg, status, notes) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.position = position;
    this.dminant_leg = dominant_leg;
    this.status = status;
    this.notes = notes;
  }
}

let players = []

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

add_player_btn.addEventListener('click', function() {
    players_div.style.display = 'none'
    new_player_div.style.display = 'flex'
})

back_to_players.addEventListener('click', function() {
    new_player_div.style.display = 'none'
    players_div.style.display = 'flex'
})

save_player_btn.addEventListener('click', function() {
    let name = document.querySelector('.new_player_name').value
    let surname = document.querySelector('.new_player_surname').value
    let age = document.querySelector('.new_player_age').value
    let height = document.querySelector('.new_player_height').value
    let weight = document.querySelector('.new_player_weight').value
    let position = document.querySelector('.new_player_position').value
    let dominant_leg = document.querySelector('.new_player_dominant_leg').value
    let status = document.querySelector('.new_player_status').value
    let notes = document.querySelector('.notes_about_new_player').value
    players.push(new Player(name, surname, age, height, weight, position, dominant_leg, status, notes))
    new_player_div.style.display = 'none'
    players_div.style.display = 'flex'
    
})