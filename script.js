let dashboard_btn = document.getElementById("dashboard_btn")
let players_btn = document.getElementById("players_btn")
let training_btn = document.getElementById("training_btn")
let dashboard_div = document.querySelector(".dashboard_content")
let players_div = document.querySelector(".players_content")
let training_div = document.querySelector(".training_content")
let menu_toggle = document.querySelector(".menu_toggle")
let left_sidebar = document.querySelector(".left_sidebar")
let out_of_menu = document.querySelector(".out_of_menu")

//Players tab DOM queries
let add_player_btn = document.querySelector('.add_player_btn')
let back_to_players = document.querySelector('.go_back_to_players')
let save_player_btn = document.querySelector('.save_player')
let new_player_div = document.querySelector('.new_player_div')
let new_players = document.querySelector('.new_players')
let players_count = document.querySelectorAll('.players_count')

// Tranings tab DOM queries
let add_training_btn = document.querySelector(".add_training_btn")
let training_dialog = document.querySelector(".training_dialog")
let training_form = document.querySelector(".training_form")
let cancel_training_btn = document.querySelector(".cancel_training_btn")
let training_list = document.querySelector(".training_list")
let training_subtitle = document.querySelector(".training_subtitle")
let training_players_selection = document.querySelector(".training_players_selection")

class Player {
  constructor(name, surname, age, height, weight, position, dominant_leg, status, notes) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.position = position;
    this.dominant_leg = dominant_leg;
    this.status = status;
    this.notes = notes;
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
    new_player_div.style.display = "none"
})

players_btn.addEventListener("click", () => {
    dashboard_div.style.display = "none"
    training_div.style.display = "none"
    players_div.style.display = "flex"
    new_player_div.style.display = "none"
})

training_btn.addEventListener("click", () => {
    dashboard_div.style.display = "none"
    players_div.style.display = "none"
    training_div.style.display = "flex"
    new_player_div.style.display = "none"
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

    show_players()
    update_players_count()

    new_player_div.style.display = 'none'
    players_div.style.display = 'flex' 
})

function show_players () {
    new_players.innerHTML = ''
    
    players.forEach((player) => {
        let player_div = document.createElement("div")
        player_div.classList.add("player_div")
        let name = document.createElement("p")
        name.textContent = player.name + " " + player.surname
        let age = document.createElement("p")
        age.textContent = player.age
        let position = document.createElement("p")
        position.textContent = player.position
        let status = document.createElement("p")
        status.textContent = player.status
        
        player_div.appendChild(name)
        player_div.appendChild(age)
        player_div.appendChild(position)
        player_div.appendChild(status)
        new_players.appendChild(player_div)
    })
}

function update_players_count() {
    players_count[0].textContent = players.length
    players_count[1].textContent = players.length + ' players'
}