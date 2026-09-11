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

class Player {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

let players = []

class Training {
    constructor(name, date, time, duration) {
        this.name = name
        this.date = date
        this.time = time
        this.duration = duration

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

    let training = new Training(
        name,
        date,
        time,
        duration
    )

    training.saveTraining()
    training_form.reset()
    training_dialog.close()
})

function appendTraining(training) {
    let training_item = document.createElement("div")
    training_item.classList.add("training_item")
    training_item.innerHTML = `
        <p class="training_item_name">${training.name}</p>
        <p class="training_item_info">
            ${training.date} · ${training.time}
        </p>
        <p class="training_item_info">
            Duration: ${training.duration} min
        </p>
    `
    training_list.appendChild(training_item)
}

function updateTrainingCount() {
    training_subtitle.textContent =
        trainings.length + " trainings"
}
