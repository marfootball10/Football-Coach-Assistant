let dashboard_btn = document.getElementById("dashboard_btn")
let players_btn = document.getElementById("players_btn")
let training_btn = document.getElementById("training_btn")
let add_player_btn = document.querySelector('.add_player_btn')
let dashboard_div = document.querySelector(".dashboard_content")
let players_div = document.querySelector(".players_content")
let training_div = document.querySelector(".training_content")
let new_player_div = document.querySelector('.new_player')
let menu_toggle = document.querySelector(".menu_toggle")
let left_sidebar = document.querySelector(".left_sidebar")
let out_of_menu = document.querySelector(".out_of_menu")

// Traning tab DOM queries
let add_training_btn = document.querySelector(".add_training_btn")
let training_dialog = document.querySelector(".training_dialog")
let training_form = document.querySelector(".training_form")
let cancel_training_btn = document.querySelector(".cancel_training_btn")
let training_list = document.querySelector(".training_list")
let training_subtitle = document.querySelector(".training_subtitle")
let training_players_selection = document.querySelector(".training_players_selection")

class Player {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

let players = []

/*let players = [
    new Player("Martin", "Novák"),
    new Player("Peter", "Kováč"),
    new Player("Lukáš", "Horváth"),
    new Player("Tomáš", "Švec"),
    new Player("Michal", "Baláž"),
    new Player("Ján", "Varga"),
    new Player("Matej", "Polák"),
    new Player("Samuel", "Bartoš"),
    new Player("Adam", "Krištof"),
    new Player("Filip", "Tóth")
]*/

class Training {
    constructor(name, date, time, duration, players) {
        this.name = name
        this.date = date
        this.time = time
        this.duration = duration
        this.players = players
    }
    saveTraining() {
        trainings.push(this)
        appendTraining(this)
        updateTrainingCount()
    }
}

let trainings = []

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

// Training tab
add_training_btn.addEventListener("click", () => {
    showTrainingPlayers()
    training_dialog.showModal()
})
cancel_training_btn.addEventListener("click", () => {
    training_dialog.close()
})
training_form.addEventListener("submit", (event) => {
    event.preventDefault()
    let name = document.getElementById("training_name").value
    let date = document.getElementById("training_date").value
    let time = document.getElementById("training_time").value
    let duration = document.getElementById("training_duration").value
    let selected_players = []
    let checkboxes =
        training_players_selection.querySelectorAll(
            'input[type="checkbox"]:checked'
        )
    checkboxes.forEach((checkbox) => {
        let player_index = Number(checkbox.value)
        selected_players.push(players[player_index])
    })
    let training = new Training(
        name,
        date,
        time,
        duration,
        selected_players
    )
    training.saveTraining()
    training_form.reset()
    training_dialog.close()
})

function appendTraining(training) {
    let training_item = document.createElement("div")
    training_item.classList.add("training_item")
    let training_header = document.createElement("div")
    training_header.classList.add("training_item_header")
    let name = document.createElement("p")
    name.classList.add("training_item_name")
    name.textContent = training.name
    let info = document.createElement("p")
    info.classList.add("training_item_info")
    info.textContent = training.date + " · " + training.time + " · " + training.duration + " min"
    training_header.appendChild(name)
    training_header.appendChild(info)
    let details = document.createElement("div")
    details.classList.add("training_item_details")
    let players_title = document.createElement("p")
    players_title.textContent = "Players"
    details.appendChild(players_title)
    let players_list = document.createElement("ul")
    training.players.forEach((player) => {
        let player_item = document.createElement("li")
        player_item.textContent =
            player.name + " " + player.surname
        players_list.appendChild(player_item)
    })
    details.appendChild(players_list)
    training_item.appendChild(training_header)
    training_item.appendChild(details)
    training_item.addEventListener("click", () => {
        training_item.classList.toggle("expanded")
    })
    training_list.appendChild(training_item)
}

function updateTrainingCount() {
    training_subtitle.textContent =
        trainings.length + " trainings"
}

function showTrainingPlayers() {
    training_players_selection.innerHTML = ""
    if (players.length === 0) {
        let message = document.createElement("p")
        message.textContent = "No players available."
        training_players_selection.appendChild(message)
        return
    }

    players.forEach((player, index) => {
        let player_div = document.createElement("div")
        player_div.classList.add("training_player_option")

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.value = index

        let label = document.createElement("label")
        label.textContent = player.name + " " + player.surname

        player_div.appendChild(checkbox)
        player_div.appendChild(label)

        training_players_selection.appendChild(player_div)
    })
}
