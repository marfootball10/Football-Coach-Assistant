let dashboard_btn = document.getElementById("dashboard_btn")
let players_btn = document.getElementById("players_btn")
let training_btn = document.getElementById("training_btn")
let matches_btn = document.getElementById("matches_btn")
let dashboard_div = document.querySelector(".dashboard_content")
let players_div = document.querySelector(".players_content")
let training_div = document.querySelector(".training_content")
let matches_div = document.querySelector(".matches_content")
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
let card_view_btn = document.querySelector("#card_view_btn")
let list_view_btn = document.querySelector("#list_view_btn")
let player_view = "card"
let suspended_players = document.getElementById('suspended_players_count')

// Tranings tab DOM queries
let add_training_btn = document.querySelector(".add_training_btn")
let training_dialog = document.querySelector(".training_dialog")
let training_form = document.querySelector(".training_form")
let cancel_training_btn = document.querySelector(".cancel_training_btn")
let close_training_btn = document.querySelector(".close_training_btn")
let training_list = document.querySelector(".training_list")
let training_subtitle = document.querySelector(".training_subtitle")

// Training details tabs DOM queries
let training_details_page = document.querySelector(".training_details_page")
let back_to_trainings_btn = document.querySelector(".back_to_trainings_btn")
let training_details_name = document.querySelector(".training_details_name")
let training_details_description = document.querySelector(".training_details_description")
let training_details_date = document.querySelector(".training_details_date")
let training_details_time = document.querySelector(".training_details_time")
let training_details_duration = document.querySelector(".training_details_duration")
let training_details_category = document.querySelector(".training_details_category")
let training_details_intensity = document.querySelector(".training_details_intensity")
let training_detail_goal = document.querySelector(".training_detail_goal")
let training_info_date = document.querySelector(".training_info_date")
let training_info_time = document.querySelector(".training_info_time")
let training_info_duration = document.querySelector(".training_info_duration")
let training_info_category = document.querySelector(".training_info_category")
let training_info_intensity = document.querySelector(".training_info_intensity")
let training_info_exercises = document.querySelector(".training_info_exercises")
let training_tabs = document.querySelectorAll(".training_tab")
let training_information = document.querySelector(".training_information")
let training_exercises = document.querySelector(".training_exercises")
let training_board = document.querySelector(".training_board")
let training_attendance = document.querySelector(".training_attendance")
let exercise_list = document.querySelector(".exercise_list")
let exercise_detail = document.querySelector(".exercise_detail")
let exercise_count = document.querySelector(".exercise_count")
let add_exercise_btn = document.querySelector(".add_exercise_btn")
let exercise_dialog = document.querySelector(".exercise_dialog")
let exercise_form = document.querySelector(".exercise_form")
let cancel_exercise_btn = document.querySelector(".cancel_exercise_btn")
let close_exercise_btn = document.querySelector(".close_exercise_btn")
let attendance_list = document.querySelector(".attendance_list")
let attendance_count = document.querySelector(".attendance_count")
let tactical_board = document.querySelector(".tactical_board")
let board_ctx = tactical_board.getContext("2d")
let board_tools = document.querySelectorAll(".board_tool")
let board_undo_btn = document.querySelector(".board_undo_btn")
let board_clear_btn = document.querySelector(".board_clear_btn")
let add_token_btns = document.querySelectorAll(".add_token_btn")
let active_training = null
let active_tool = "select"
let board_drag = null
let board_draw = null

// Match tab DOM queries
let new_match_btn = document.querySelector(".new_match_btn")
let match_dialog = document.querySelector(".match_dialog")
let match_form = document.querySelector(".match_form")
let cancel_match_btn = document.querySelector(".cancel_match_btn")
let save_match_btn = document.querySelector(".save_match_btn")
let match_title = document.querySelector(".match_title")
let match_subtitle = document.querySelector(".match_subtitle")
let match_list = document.querySelector(".match_list")

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
    constructor(
        name,
        date,
        time,
        duration,
        intensity,
        category,
        goal,
        description
    ) {
        this.name = name
        this.date = date
        this.time = time
        this.duration = duration
        this.intensity = intensity
        this.category = category
        this.goal = goal
        this.description = description
        this.exercises = []
        this.attendance = []
        this.board = { tokens: defaultBoardTokens(), shapes: [] }
    }

    saveTraining() {
        trainings.push(this)
        appendTraining(this)
        updateTrainingCount()
    }
}

let trainings = []

class Exercise {
    constructor(name, duration, intensity, players_count, goal, equipment, instructions, key_points) {
        this.name = name
        this.duration = duration
        this.intensity = intensity
        this.players_count = players_count
        this.goal = goal
        this.equipment = equipment
        this.instructions = instructions
        this.key_points = key_points
    }
}

class Match {
    constructor(opponents_name, date, time, place, league) {
        this.opponents_name = opponents_name
        this.date = date
        this.time = time
        this.place = place
        this.league = league
    }
    saveMatch() {
        matches.push(this)
        appendMatch(this)
        updateMatchCount()
    }
}

let matches = []

function getCurrentDateTime() {
    let now = new Date()

    let day = now.getDay()
    let date = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    return {
        day,
        date,
        month,
        year,
        hours,
        minutes,
        seconds
    }
}

let current_date_time = getCurrentDateTime()

let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
]

let months = [
    "",
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
]

let day_name = days[current_date_time.day]
let month_name = months[current_date_time.month]

let current_date = document.querySelector(".current_date")

current_date.textContent =
    day_name + " · " +
    current_date_time.date + ". " +
    month_name + " " +
    current_date_time.year

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
    dashboard_div.style.display = "flex"
    players_div.style.display = "none"
    training_div.style.display = "none"
    matches_div.style.display = "none"
    new_player_div.style.display = "none"
})

players_btn.addEventListener("click", () => {
    dashboard_div.style.display = "none"
    players_div.style.display = "flex"
    training_div.style.display = "none"
    matches_div.style.display = "none"
    new_player_div.style.display = "none"
})

add_player_btn.addEventListener('click', function() {
    players_div.style.display = 'none'
    new_player_div.style.display = 'flex'
})

training_btn.addEventListener("click", () => {
    dashboard_div.style.display = "none"
    players_div.style.display = "none"
    training_div.style.display = "flex"
    matches_div.style.display = "none"
    new_player_div.style.display = "none"
    training_details_page.style.display = "none"
    training_list.style.display = "flex"
    document.querySelector(".training_header").style.display = "flex"
})

matches_btn.addEventListener("click", () => {
    dashboard_div.style.display = "none"
    players_div.style.display = "none"
    training_div.style.display = "none"
    matches_div.style.display = "flex"
    new_player_div.style.display = "none"
})

// Players tab
card_view_btn.addEventListener("click", function() {
    player_view = "card"
    card_view_btn.classList.add("active")
    list_view_btn.classList.remove("active")

    show_players()
})

list_view_btn.addEventListener("click", function() {
    player_view = "list"
    list_view_btn.classList.add("active")
    card_view_btn.classList.remove("active")

    show_players()
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

    show_players()
    update_players_count()
    all_suspended_players()

    new_player_div.style.display = 'none'
    players_div.style.display = 'flex' 
})

/*function show_players () {
    new_players.innerHTML = ''

    if (player_view === "list") {
        new_players.classList.add("list_view")
    } else {
        new_players.classList.remove("list_view")
    }

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
}*/

function update_players_count() {
    players_count[0].textContent = players.length
    players_count[1].textContent = players.length + ' players'
}

// Suspended players
function all_suspended_players() {
    let suspended_count = 0
    for (let i = 0; i<players.length; i++) {
        if (players[i].status == 'suspended') {
            suspended_count += 1
        }
    }
    suspended_players.innerHTML = suspended_count
}

// Training tab
add_training_btn.addEventListener("click", () => {
    training_dialog.showModal()
})
cancel_training_btn.addEventListener("click", () => {
    training_dialog.close()
})
close_training_btn.addEventListener("click", () => {
    training_dialog.close()
})
back_to_trainings_btn.addEventListener("click", () => {
    training_details_page.style.display = "none"
    training_list.style.display = "flex"
    document.querySelector(".training_header").style.display = "flex"
})
training_form.addEventListener("submit", (event) => {
    event.preventDefault()
    let name = document.getElementById("training_name").value
    let date = document.getElementById("training_date").value
    let time = document.getElementById("training_time").value
    let duration = document.getElementById("training_duration").value
    let intensity = document.getElementById("training_intensity").value
    let category = document.getElementById("training_category").value
    let goal = document.getElementById("training_goal").value
    let description = document.getElementById("training_description").value
    let training = new Training(
        name,
        date,
        time,
        duration,
        intensity,
        category,
        goal,
        description
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
    training_item.appendChild(training_header)
    training_item.addEventListener("click", () => {
        showTrainingDetails(training)
    })
    training_list.appendChild(training_item)
}

function showTrainingDetails(training) {
    training_list.style.display = "none"
    document.querySelector(".training_header").style.display = "none"
    training_details_page.style.display = "flex"
    training_details_name.textContent = training.name
    training_details_description.textContent = training.description || "No description provided."
    training_details_date.textContent = training.date
    training_details_time.textContent = training.time || "—"
    training_details_duration.textContent = training.duration + " min"
    training_details_category.textContent = training.category
    training_details_intensity.textContent = training.intensity
    training_detail_goal.textContent = training.goal || "No training goal specified."
    training_info_date.textContent = training.date
    training_info_time.textContent = training.time || "—"
    training_info_duration.textContent = training.duration + " min"
    training_info_category.textContent = training.category
    training_info_intensity.textContent = training.intensity
    active_training = training
    showExercises()
    showAttendance()
    showTrainingTab(0)
}

function updateTrainingCount() {
    training_subtitle.textContent =
        trainings.length + " trainings"
}

// Training details tabs
training_tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        showTrainingTab(index)
    })
})
function showTrainingTab(index) {
    training_tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index)
    })
    training_information.style.display = index === 0 ? "grid" : "none"
    training_exercises.style.display = index === 1 ? "flex" : "none"
    training_board.style.display = index === 2 ? "flex" : "none"
    training_attendance.style.display = index === 3 ? "flex" : "none"
    if (index === 2) {
        drawBoard()
    }
}
// Exercises
add_exercise_btn.addEventListener("click", () => {
    exercise_dialog.showModal()
})
cancel_exercise_btn.addEventListener("click", () => {
    exercise_dialog.close()
})
close_exercise_btn.addEventListener("click", () => {
    exercise_dialog.close()
})
exercise_form.addEventListener("submit", (event) => {
    event.preventDefault()
    let exercise = new Exercise(
        document.getElementById("exercise_name").value,
        document.getElementById("exercise_duration").value,
        document.getElementById("exercise_intensity").value,
        document.getElementById("exercise_players").value,
        document.getElementById("exercise_goal").value,
        document.getElementById("exercise_equipment").value,
        document.getElementById("exercise_instructions").value,
        document.getElementById("exercise_key_points").value
    )
    active_training.exercises.push(exercise)
    showExercises()
    showExerciseDetail(active_training.exercises.length - 1)
    exercise_form.reset()
    exercise_dialog.close()
})
function showExercises() {
    exercise_list.innerHTML = ""
    exercise_count.textContent = "(" + active_training.exercises.length + ")"
    training_info_exercises.textContent = active_training.exercises.length
    active_training.exercises.forEach((exercise, index) => {
        let item = document.createElement("div")
        item.classList.add("exercise_item")
        let name = document.createElement("p")
        name.classList.add("exercise_item_name")
        name.textContent = exercise.name
        let info = document.createElement("p")
        info.classList.add("exercise_item_info")
        info.textContent = exercise.duration + " min · " + exercise.intensity
        item.appendChild(name)
        item.appendChild(info)
        item.addEventListener("click", () => {
            showExerciseDetail(index)
        })
        exercise_list.appendChild(item)
    })
    if (active_training.exercises.length === 0) {
        exercise_detail.innerHTML = ""
        let message = document.createElement("p")
        message.classList.add("exercise_empty")
        message.textContent = "No exercises yet. Add the first one."
        exercise_detail.appendChild(message)
    } else {
        showExerciseDetail(0)
    }
}
function showExerciseDetail(index) {
    let exercise = active_training.exercises[index]
    exercise_list.querySelectorAll(".exercise_item").forEach((item, i) => {
        item.classList.toggle("selected", i === index)
    })
    exercise_detail.innerHTML = ""
    let name = document.createElement("p")
    name.classList.add("exercise_detail_name")
    name.textContent = exercise.name
    let info = document.createElement("p")
    info.classList.add("exercise_detail_info")
    info.textContent = exercise.duration + " min · " + exercise.intensity + " intensity · " + exercise.players_count + " players"
    exercise_detail.appendChild(name)
    exercise_detail.appendChild(info)
    appendExerciseBlock("Goal", exercise.goal, "")
    appendExerciseBlock("Equipment", exercise.equipment, "")
    appendExerciseBlock("Instructions", exercise.instructions, "green_value")
    appendExerciseBlock("Key points", exercise.key_points, "orange_value")
}
function appendExerciseBlock(label_text, value_text, value_class) {
    if (!value_text) {
        return
    }
    let label = document.createElement("p")
    label.classList.add("exercise_block_label")
    label.textContent = label_text
    let value = document.createElement("p")
    value.classList.add("exercise_block_value")
    if (value_class) {
        value.classList.add(value_class)
    }
    value.textContent = value_text
    exercise_detail.appendChild(label)
    exercise_detail.appendChild(value)
}
// Players at training
function showAttendance() {
    attendance_list.innerHTML = ""
    updateAttendanceCount()
    if (players.length === 0) {
        let message = document.createElement("p")
        message.classList.add("attendance_empty")
        message.textContent = "No players in the squad yet."
        attendance_list.appendChild(message)
        return
    }
    players.forEach((player) => {
        let item = document.createElement("label")
        item.classList.add("attendance_item")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = active_training.attendance.includes(player)
        let name = document.createElement("span")
        name.textContent = player.name + " " + player.surname
        let position = document.createElement("span")
        position.classList.add("attendance_position")
        position.textContent = player.position
        item.classList.toggle("checked", checkbox.checked)
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                active_training.attendance.push(player)
            } else {
                active_training.attendance = active_training.attendance.filter((item_player) => item_player !== player)
            }
            item.classList.toggle("checked", checkbox.checked)
            updateAttendanceCount()
        })
        item.appendChild(checkbox)
        item.appendChild(name)
        item.appendChild(position)
        attendance_list.appendChild(item)
    })
}
function updateAttendanceCount() {
    attendance_count.textContent = active_training.attendance.length + "/" + players.length
}
// Tactical board
function defaultBoardTokens() {
    return [
        { x: 75, y: 280, team: "own", label: "1" },
        { x: 185, y: 165, team: "own", label: "2" },
        { x: 185, y: 280, team: "own", label: "3" },
        { x: 185, y: 395, team: "own", label: "4" },
        { x: 330, y: 205, team: "own", label: "6" },
        { x: 330, y: 355, team: "own", label: "8" },
        { x: 470, y: 280, team: "opponent", label: "X" }
    ]
}
board_tools.forEach((tool) => {
    tool.addEventListener("click", () => {
        active_tool = tool.dataset.tool
        board_tools.forEach((other) => {
            other.classList.toggle("active", other === tool)
        })
    })
})
board_undo_btn.addEventListener("click", () => {
    active_training.board.shapes.pop()
    drawBoard()
})
board_clear_btn.addEventListener("click", () => {
    active_training.board.shapes = []
    active_training.board.tokens = defaultBoardTokens()
    drawBoard()
})
add_token_btns.forEach((button) => {
    button.addEventListener("click", () => {
        let team = button.dataset.team
        let tokens = active_training.board.tokens
        let label = team === "own" ? String(tokens.filter((token) => token.team === "own").length + 1) : "X"
        tokens.push({ x: 450, y: 480, team: team, label: label })
        drawBoard()
    })
})
function boardPoint(event) {
    let rect = tactical_board.getBoundingClientRect()
    return {
        x: (event.clientX - rect.left) * (tactical_board.width / rect.width),
        y: (event.clientY - rect.top) * (tactical_board.height / rect.height)
    }
}
function findToken(point) {
    let tokens = active_training.board.tokens
    for (let i = tokens.length - 1; i >= 0; i--) {
        let dx = point.x - tokens[i].x
        let dy = point.y - tokens[i].y
        if (Math.sqrt(dx * dx + dy * dy) < 16) {
            return i
        }
    }
    return -1
}
function findShape(point) {
    let shapes = active_training.board.shapes
    for (let i = shapes.length - 1; i >= 0; i--) {
        let shape = shapes[i]
        if (shape.type === "zone") {
            let min_x = Math.min(shape.x1, shape.x2)
            let max_x = Math.max(shape.x1, shape.x2)
            let min_y = Math.min(shape.y1, shape.y2)
            let max_y = Math.max(shape.y1, shape.y2)
            if (point.x > min_x && point.x < max_x && point.y > min_y && point.y < max_y) {
                return i
            }
        } else if (distanceToLine(point, shape) < 10) {
            return i
        }
    }
    return -1
}
function distanceToLine(point, shape) {
    let dx = shape.x2 - shape.x1
    let dy = shape.y2 - shape.y1
    let length_squared = dx * dx + dy * dy
    let t = length_squared === 0 ? 0 : ((point.x - shape.x1) * dx + (point.y - shape.y1) * dy) / length_squared
    t = Math.max(0, Math.min(1, t))
    let near_x = shape.x1 + t * dx
    let near_y = shape.y1 + t * dy
    return Math.sqrt((point.x - near_x) * (point.x - near_x) + (point.y - near_y) * (point.y - near_y))
}
tactical_board.addEventListener("mousedown", (event) => {
    let point = boardPoint(event)
    if (active_tool === "select") {
        let index = findToken(point)
        if (index !== -1) {
            board_drag = index
        }
        return
    }
    if (active_tool === "delete") {
        let token_index = findToken(point)
        if (token_index !== -1) {
            active_training.board.tokens.splice(token_index, 1)
        } else {
            let shape_index = findShape(point)
            if (shape_index !== -1) {
                active_training.board.shapes.splice(shape_index, 1)
            }
        }
        drawBoard()
        return
    }
    board_draw = { type: active_tool, x1: point.x, y1: point.y, x2: point.x, y2: point.y }
})
tactical_board.addEventListener("mousemove", (event) => {
    let point = boardPoint(event)
    if (board_drag !== null) {
        active_training.board.tokens[board_drag].x = point.x
        active_training.board.tokens[board_drag].y = point.y
        drawBoard()
    } else if (board_draw) {
        board_draw.x2 = point.x
        board_draw.y2 = point.y
        drawBoard()
    }
})
tactical_board.addEventListener("mouseup", () => {
    if (board_draw) {
        active_training.board.shapes.push(board_draw)
        board_draw = null
    }
    board_drag = null
    drawBoard()
})
tactical_board.addEventListener("mouseleave", () => {
    board_draw = null
    board_drag = null
    drawBoard()
})
function drawBoard() {
    if (!active_training) {
        return
    }
    drawField()
    active_training.board.shapes.forEach((shape) => {
        drawShape(shape)
    })
    if (board_draw) {
        drawShape(board_draw)
    }
    active_training.board.tokens.forEach((token) => {
        drawToken(token)
    })
}
function drawField() {
    board_ctx.fillStyle = "#0b1410"
    board_ctx.fillRect(0, 0, 900, 560)
    board_ctx.fillStyle = "#15503a"
    board_ctx.fillRect(30, 30, 840, 500)
    board_ctx.strokeStyle = "rgba(248,250,252,0.55)"
    board_ctx.lineWidth = 2
    board_ctx.setLineDash([])
    board_ctx.strokeRect(30, 30, 840, 500)
    board_ctx.strokeRect(30, 150, 110, 260)
    board_ctx.strokeRect(30, 215, 40, 130)
    board_ctx.strokeRect(760, 150, 110, 260)
    board_ctx.strokeRect(830, 215, 40, 130)
    board_ctx.beginPath()
    board_ctx.moveTo(450, 30)
    board_ctx.lineTo(450, 530)
    board_ctx.stroke()
    board_ctx.beginPath()
    board_ctx.arc(450, 280, 60, 0, Math.PI * 2)
    board_ctx.stroke()
    board_ctx.beginPath()
    board_ctx.arc(450, 280, 4, 0, Math.PI * 2)
    board_ctx.fillStyle = "rgba(248,250,252,0.55)"
    board_ctx.fill()
}
function drawShape(shape) {
    let colors = { arrow: "#f8fafc", movement: "#facc15", pass: "#38bdf8", zone: "#00d6a3" }
    let color = colors[shape.type]
    board_ctx.strokeStyle = color
    board_ctx.lineWidth = 2
    board_ctx.setLineDash([])
    if (shape.type === "zone") {
        board_ctx.setLineDash([6, 4])
        board_ctx.fillStyle = "rgba(0,214,163,0.15)"
        board_ctx.fillRect(shape.x1, shape.y1, shape.x2 - shape.x1, shape.y2 - shape.y1)
        board_ctx.strokeRect(shape.x1, shape.y1, shape.x2 - shape.x1, shape.y2 - shape.y1)
        board_ctx.setLineDash([])
        return
    }
    if (shape.type === "pass") {
        board_ctx.setLineDash([8, 6])
    }
    if (shape.type === "movement") {
        drawWavyLine(shape.x1, shape.y1, shape.x2, shape.y2)
    } else {
        board_ctx.beginPath()
        board_ctx.moveTo(shape.x1, shape.y1)
        board_ctx.lineTo(shape.x2, shape.y2)
        board_ctx.stroke()
    }
    board_ctx.setLineDash([])
    drawArrowHead(shape.x1, shape.y1, shape.x2, shape.y2, color)
}
function drawWavyLine(x1, y1, x2, y2) {
    let dx = x2 - x1
    let dy = y2 - y1
    let length = Math.sqrt(dx * dx + dy * dy)
    let angle = Math.atan2(dy, dx)
    board_ctx.beginPath()
    board_ctx.moveTo(x1, y1)
    for (let i = 0; i <= length; i += 2) {
        let offset = Math.sin(i / 6) * 5
        board_ctx.lineTo(
            x1 + i * Math.cos(angle) - offset * Math.sin(angle),
            y1 + i * Math.sin(angle) + offset * Math.cos(angle)
        )
    }
    board_ctx.stroke()
}
function drawArrowHead(x1, y1, x2, y2, color) {
    let angle = Math.atan2(y2 - y1, x2 - x1)
    board_ctx.beginPath()
    board_ctx.moveTo(x2, y2)
    board_ctx.lineTo(x2 - 12 * Math.cos(angle - 0.4), y2 - 12 * Math.sin(angle - 0.4))
    board_ctx.lineTo(x2 - 12 * Math.cos(angle + 0.4), y2 - 12 * Math.sin(angle + 0.4))
    board_ctx.closePath()
    board_ctx.fillStyle = color
    board_ctx.fill()
}
function drawToken(token) {
    board_ctx.beginPath()
    board_ctx.arc(token.x, token.y, 14, 0, Math.PI * 2)
    board_ctx.fillStyle = token.team === "own" ? "#22c55e" : "#f97316"
    board_ctx.fill()
    board_ctx.strokeStyle = "#0b1410"
    board_ctx.lineWidth = 2
    board_ctx.stroke()
    board_ctx.fillStyle = "#06100d"
    board_ctx.font = "bold 11px Inter, sans-serif"
    board_ctx.textAlign = "center"
    board_ctx.textBaseline = "middle"
    board_ctx.fillText(token.label, token.x, token.y)
}

// Match tab
new_match_btn.addEventListener('click', function() {
    match_dialog.showModal()
})

cancel_match_btn.addEventListener('click', function() {
    match_dialog.close()
})

match_form.addEventListener("submit", (event) => {
    event.preventDefault()
    let opponents_name = document.getElementById("opponents_name").value
    let date = document.getElementById("match_date").value
    let time = document.getElementById("match_time").value
    let place = document.querySelector(".match_place").value
    let league = document.getElementById("match_league").value
    let match = new Match(
        opponents_name,
        date,
        time,
        place,
        league
    )
    match.saveMatch()
    match_form.reset()
    match_dialog.close()
})

function appendMatch(match) {
    let match_item = document.createElement("div")
    match_item.classList.add("match_item")
    let match_header = document.createElement("div")
    match_header.classList.add("match_item_header")
    let opponents_name = document.createElement("p")
    opponents_name.classList.add("match_item_name")
    opponents_name.textContent = match.opponents_name
    let info = document.createElement("p")
    info.classList.add("match_item_info")
    info.textContent = match.date + " · " + match.time + " · " + match.place + " · " + match.league
    match_header.appendChild(opponents_name)
    match_header.appendChild(info)
    let details = document.createElement("div")
    details.classList.add("match_item_details")
    match_item.appendChild(match_header)
    match_item.appendChild(details)
    match_item.addEventListener("click", () => {
        match_item.classList.toggle("expanded")
    })
    match_list.appendChild(match_item)
}

function updateMatchCount() {
    match_subtitle.textContent = matches.length + " matches"
}