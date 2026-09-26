let dashboard_btn = document.getElementById("dashboard_btn")
let players_btn = document.getElementById("players_btn")
let training_btn = document.getElementById("training_btn")
let matches_btn = document.getElementById("matches_btn")
let performance_btn = document.getElementById("performance_btn")
let analysis_btn = document.getElementById("analysis_btn")
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
let delete_training_btn = document.querySelector(".delete_training_btn")
let add_testing_btn = document.querySelector(".add_testing_btn")
let testing_session_div = document.querySelector(".testing_session_div")
let back_to_trainings_from_testing_btn = document.querySelector(".back_to_trainings_from_testing_btn")
let create_testing_btn = document.querySelector(".create_testing_btn")
let testing_all_players_checkbox = document.querySelector(".testing_all_players_checkbox")
let testing_players_list = document.querySelector(".testing_players_list")
let testing_disciplines_groups = document.querySelector(".testing_disciplines_groups")
let testing_protocol_page = document.querySelector(".testing_protocol_page")
let back_to_trainings_from_protocol_btn = document.querySelector(".back_to_trainings_from_protocol_btn")
let testing_protocol_name = document.querySelector(".testing_protocol_name")
let testing_protocol_meta = document.querySelector(".testing_protocol_meta")
let testing_protocol_players_count = document.querySelector(".testing_protocol_players_count")
let testing_protocol_tests_count = document.querySelector(".testing_protocol_tests_count")
let testing_protocol_status_badge = document.querySelector(".testing_protocol_status_badge")
let testing_protocol_list = document.querySelector(".testing_protocol_list")
let active_testing_session = null
let testing_test_detail_page = document.querySelector(".testing_test_detail_page")
let back_to_testing_protocol_btn = document.querySelector(".back_to_testing_protocol_btn")
let testing_test_detail_category = document.querySelector(".testing_test_detail_category")
let testing_test_detail_name = document.querySelector(".testing_test_detail_name")
let testing_test_detail_measurement = document.querySelector(".testing_test_detail_measurement")
let testing_test_detail_unit = document.querySelector(".testing_test_detail_unit")
let testing_test_detail_attempts = document.querySelector(".testing_test_detail_attempts")
let testing_instructions_text = document.querySelector(".testing_instructions_text")
let testing_results_list = document.querySelector(".testing_results_list")
let save_testing_results_btn = document.querySelector(".save_testing_results_btn")
let active_testing_test = null

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
let training_tabs = training_details_page.querySelectorAll(".training_tab")
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
let board_tools = training_board.querySelectorAll(".board_tool")
let board_undo_btn = training_board.querySelector(".board_undo_btn")
let board_clear_btn = training_board.querySelector(".board_clear_btn")
let add_token_btns = training_board.querySelectorAll(".add_token_btn")
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

// Match details tab DOM queries
let matches_intro = document.querySelector(".matches_intro")
let match_details_page = document.querySelector(".match_details_page")
let back_to_matches_btn = document.querySelector(".back_to_matches_btn")
let delete_match_btn = document.querySelector(".delete_match_btn")
let match_details_league = document.querySelector(".match_details_league")
let match_details_place_badge = document.querySelector(".match_details_place_badge")
let match_details_own_name = document.querySelector(".match_details_own_name")
let match_details_own_label = document.querySelector(".match_details_own_label")
let match_details_opponent_name = document.querySelector(".match_details_opponent_name")
let match_details_datetime = document.querySelector(".match_details_datetime")
let match_tabs = match_details_page.querySelectorAll(".training_tab")
let match_information = document.querySelector(".match_information")
let match_lineup = document.querySelector(".match_lineup")
let match_board = document.querySelector(".match_board")
let match_info_date = document.querySelector(".match_info_date")
let match_info_time = document.querySelector(".match_info_time")
let match_info_league = document.querySelector(".match_info_league")
let match_info_place = document.querySelector(".match_info_place")
let match_info_formation = document.querySelector(".match_info_formation")
let match_info_notes = document.querySelector(".match_info_notes")
let edit_match_details_btn = document.querySelector(".edit_match_details_btn")
let match_details_dialog = document.querySelector(".match_details_dialog")
let match_details_form = document.querySelector(".match_details_form")
let cancel_match_details_btn = document.querySelector(".cancel_match_details_btn")
let close_match_details_btn = document.querySelector(".close_match_details_btn")
let lineup_count = document.querySelector(".lineup_count")
let lineup_list = document.querySelector(".lineup_list")
let board_phase_tabs = document.querySelectorAll(".board_phase_tab")
let match_tactical_board = document.querySelector(".match_tactical_board")
let match_board_ctx = match_tactical_board.getContext("2d")
let match_board_tools = match_board.querySelectorAll(".board_tool")
let match_board_undo_btn = match_board.querySelector(".board_undo_btn")
let match_board_clear_btn = match_board.querySelector(".board_clear_btn")
let match_add_token_btns = match_board.querySelectorAll(".add_token_btn")
let active_match = null
let active_phase = "attack"
let match_active_tool = "select"
let match_board_drag = null
let match_board_draw = null
let POSITION_LABELS = {
    goalkeeper: "Goalkeeper",
    "center-back": "Center-back",
    "right-back": "Right-back",
    "left-back": "Left-back",
    "defensive-midfielder": "Defensive midfielder",
    midfielder: "Midfielder",
    "attacking-midfielder": "Attacking midfielder",
    "right-wing": "Right wing",
    "left-wing": "Left wing",
    striker: "Striker"
}

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

let TEST_CATALOG = {
    physical: [
        { key: "sprint_10m", name: "10m Sprint", measurement: "time", unit: "seconds", attempts: 3 },
        { key: "sprint_20m", name: "20m Sprint", measurement: "time", unit: "seconds", attempts: 3 },
        { key: "sprint_30m", name: "30m Sprint", measurement: "time", unit: "seconds", attempts: 3 },
        { key: "top_speed", name: "Top Speed", measurement: "speed", unit: "km/h", attempts: 1 },
        { key: "acceleration", name: "Acceleration", measurement: "speed", unit: "m/s²", attempts: 1 },
        { key: "agility", name: "Agility", measurement: "time", unit: "seconds", attempts: 3 },
        { key: "endurance", name: "Yo-Yo / Endurance Test", measurement: "distance", unit: "meters", attempts: 1 }
    ],
    technical: [
        { key: "ball_control", name: "Ball Control", measurement: "score", unit: "%", attempts: 1 },
        { key: "passing_accuracy", name: "Passing Accuracy", measurement: "fraction", unit: "%", attempts: 1 },
        { key: "finishing", name: "Finishing", measurement: "fraction", unit: "%", attempts: 1 },
        { key: "weak_foot", name: "Weak Foot", measurement: "score", unit: "%", attempts: 1 },
        { key: "dribbling", name: "Dribbling", measurement: "score", unit: "%", attempts: 1 }
    ],
    defensive: [
        { key: "one_v_one", name: "1v1 Defending", measurement: "fraction", unit: "%", attempts: 1 },
        { key: "tackling", name: "Tackling", measurement: "fraction", unit: "%", attempts: 1 },
        { key: "interceptions", name: "Interceptions", measurement: "fraction", unit: "%", attempts: 1 },
        { key: "defensive_positioning", name: "Defensive Positioning", measurement: "score", unit: "%", attempts: 1 },
        { key: "duel_success", name: "Duel Success", measurement: "fraction", unit: "%", attempts: 1 }
    ],
    mental: [
        { key: "decision_making", name: "Decision Making", measurement: "score", unit: "%", attempts: 1 },
        { key: "concentration", name: "Concentration", measurement: "score", unit: "%", attempts: 1 },
        { key: "composure", name: "Composure", measurement: "score", unit: "%", attempts: 1 },
        { key: "awareness", name: "Awareness", measurement: "score", unit: "%", attempts: 1 },
        { key: "reaction_to_pressure", name: "Reaction to Pressure", measurement: "score", unit: "%", attempts: 1 }
    ]
}
let CATEGORY_DEFAULT_GROUPS = {
    full_performance: ["physical", "technical", "defensive", "mental"],
    physical: ["physical"],
    technical: ["technical"],
    tactical: ["defensive"],
    mental: ["mental"],
    custom: []
}
let GROUP_LABELS = {
    physical: "Physical",
    technical: "Technical",
    defensive: "Defensive",
    mental: "Mental"
}
let MEASUREMENT_LABELS = {
    time: "Time",
    speed: "Speed",
    distance: "Distance",
    score: "Score",
    fraction: "Accuracy"
}
let TEST_INSTRUCTIONS = {
    sprint_10m: "Mark a straight 10 meter track with a clearly marked start and finish line. The player starts in a stationary position behind the start line. On the coach's signal, the player accelerates at maximum effort and continues at full speed past the finish line. Start the timer at the signal and stop it when the player crosses the finish line. Each player completes 3 attempts with sufficient recovery time between them. Record every attempt and use the best (lowest) time as the main result.",
    sprint_20m: "Mark a straight 20 meter track. The player starts behind the start line in a stationary position. On the coach's signal, the player accelerates at maximum intensity and continues through the finish line without slowing down. Record the time of every attempt. The player completes 3 attempts with sufficient rest between them. Use the fastest time as the main result.",
    sprint_30m: "Mark a straight 30 meter sprint track. The player starts behind the start line. On the signal, the player accelerates at maximum speed and keeps maximum effort until the finish line. The player completes 3 attempts. Allow sufficient recovery between attempts. Record all times and use the fastest attempt as the main result.",
    top_speed: "Set up a straight sprint track with enough space for acceleration before the measured zone. The player builds up speed and enters the measured zone at maximum velocity. The highest speed reached inside the measured zone is recorded. The player completes 2-3 attempts with full recovery between them. Record the highest value achieved.",
    acceleration: "Mark a short sprint track with a clear start and finish point. The player starts from a stationary position. On the coach's signal, the player accelerates immediately at maximum effort. Measure the time needed to cover the set distance. The player completes 3 attempts with sufficient rest between them. Record every time and use the best time as the main result.",
    agility: "Set up an agility course using cones according to the planned pattern. The player must complete the entire course as fast as possible without skipping or touching any cones. Explain the exact route before the test. The player completes 2-3 attempts. Record the time of each attempt and the number of errors. Use the best valid time as the main result.",
    endurance: "Mark two parallel lines according to the selected Yo-Yo protocol. The player runs between the lines in time with the audio signal. Each shuttle is followed by a prescribed recovery period. The pace increases progressively according to the protocol. The test continues until the player can no longer keep up with the required pace or fails to meet the stopping criteria. Record the final level reached and the total distance covered.",
    ball_control: "Set up a marked control zone. The player receives the ball from a defined direction and must bring it under control within the zone using the first touch or a specified touch. Use identical conditions for every attempt. Perform 20 attempts. Mark each attempt as successful or unsuccessful based on whether the player keeps the ball under control inside the zone.",
    passing_accuracy: "Mark the player's starting position and the target zones. The player performs passes into the marked targets. Use the same distance and conditions for every attempt. The player performs 30 passes. Mark each pass as successful or unsuccessful depending on whether the ball lands inside the target zone. Calculate the final passing accuracy percentage.",
    finishing: "Mark the shooting position and the target zones inside the goal. The player performs 20 shooting attempts according to the set protocol. Ensure identical or clearly defined conditions before every attempt. Record whether each shot results in a goal. Record the total number of attempts and the resulting conversion rate.",
    weak_foot: "Perform the test exclusively with the player's non-dominant foot. Use the same type of task as the corresponding technical test, but every attempt must be performed with the weaker foot. Perform 20 attempts. Record successful and unsuccessful attempts and compare the result against the defined criteria.",
    dribbling: "Set up a slalom course using cones according to the plan. The player must dribble the ball through the entire course and pass every cone in the correct order without skipping any. Record the time and the number of errors. Perform 2-3 attempts. Use the best valid time as the main result and log any errors made.",
    one_v_one: "Mark out a 1v1 area with a clear attacking target zone. The attacker starts with the ball and the defender takes a set starting position. The duel begins on the coach's signal. The defender tries to stop the attacker from reaching the target zone or completing the attacking action. Perform 10 repetitions. Record the successful and unsuccessful defensive situations.",
    tackling: "Mark out an area for the duel and define clear rules for a successful tackle. The attacker dribbles the ball toward the target zone. The defender attempts to make a clean tackle and win the ball. Perform 10 situations. Record every successful and unsuccessful tackle. Only count tackles performed according to the defined rules.",
    interceptions: "Create a passing lane between the player who passes and the player who receives the ball. The defender takes a set position between them. After the pass, the defender attempts to read the direction of the ball and intercept it. Perform 15 situations. Record every successful interception and the total number of attempts.",
    defensive_positioning: "Set up a game situation with an attacker, the ball and a defender. The defender must position themselves correctly relative to the ball, the attacker, the space and the defended target. Perform a series of repetitions from different starting positions. After each situation, assess whether the defensive position was correct according to the defined criteria.",
    duel_success: "Set up repeated 1v1 duel situations according to the defined protocol. Every player completes the same number of duels under comparable conditions. After each duel, record whether the player won or lost. Calculate the final percentage of duels won.",
    decision_making: "Create a game situation in which the player has more than one possible solution. The player must evaluate the available information and choose and execute an appropriate solution. Do not tell the player the correct answer in advance. Perform 20 situations. Record the decision made and assess it against the predefined correct solution for that situation.",
    concentration: "Set up a series of repetitions with identical rules and controlled conditions. The player must follow the instructions and react correctly to each task throughout the entire test. Perform 20 repetitions. Record every error caused by a lapse in concentration, an incorrect execution of the instruction, or a premature reaction. Calculate the result from the total number of correct reactions.",
    composure: "Create a situation in which the player is exposed to time pressure or match-like pressure. The player must complete the set technical or decision-making task without unnecessarily losing control. Perform 10-20 repetitions according to the chosen protocol. Observe the quality of execution, the decision made and the number of errors under pressure. Assess the performance against the predefined criteria.",
    awareness: "Create a situation in which the player must scan their surroundings before receiving or playing the ball. Place relevant cues in the space, such as a teammate, an opponent or a target zone. The player must assess the situation and then perform the correct action. Perform 20 repetitions. Record correct and incorrect decisions.",
    reaction_to_pressure: "Create a game situation in which the player receives the ball and is immediately put under pressure by an opponent. The player must evaluate the situation as quickly as possible and choose an appropriate solution. Vary the direction and type of pressure so the player cannot predict the situation. Perform 10-20 repetitions. Record the quality and success rate of the reaction under pressure."
}
let TEST_NOTE_PLACEHOLDERS = {
    sprint_10m: "e.g. Strong start, slightly hesitant first two steps.",
    sprint_20m: "e.g. Good acceleration phase, maintained speed well.",
    sprint_30m: "e.g. Slight drop-off in the final 10 meters.",
    top_speed: "e.g. Reached top speed later than expected.",
    acceleration: "e.g. Explosive first steps, good drive phase.",
    agility: "e.g. Lost time on the change of direction to the left.",
    endurance: "e.g. Maintained pace well until the final stages.",
    ball_control: "e.g. Clean first touch under pressure.",
    passing_accuracy: "e.g. Consistent accuracy on the long diagonal.",
    finishing: "e.g. Good technique, needs improvement with weak foot.",
    weak_foot: "e.g. Noticeably less confident and less accurate.",
    dribbling: "e.g. Good close control, lost pace on tight turns.",
    one_v_one: "e.g. Delayed the attacker well, timing could improve.",
    tackling: "e.g. Clean, well-timed tackle.",
    interceptions: "e.g. Read the passing lane early and well.",
    defensive_positioning: "e.g. Good body orientation relative to the ball.",
    duel_success: "e.g. Strong and consistent in physical duels.",
    decision_making: "e.g. Recognized the passing option quickly.",
    concentration: "e.g. Lost focus slightly in the second half of the test.",
    composure: "e.g. Stayed composed despite time pressure.",
    awareness: "e.g. Checked shoulder before receiving the ball.",
    reaction_to_pressure: "e.g. Reacted quickly and calmly under pressure."
}

function getOrdinal(number) {
    let last_two_digits = number % 100
    if (last_two_digits >= 11 && last_two_digits <= 13) {
        return number + "th"
    }
    let last_digit = number % 10
    if (last_digit === 1) {
        return number + "st"
    }
    if (last_digit === 2) {
        return number + "nd"
    }
    if (last_digit === 3) {
        return number + "rd"
    }
    return number + "th"
}

class TestingSession {
    constructor(name, date, time, location, coach, category, notes, id = generateTrainingId()) {
        this.id = id
        this.type = "testing"
        this.name = name
        this.date = date
        this.time = time
        this.location = location
        this.coach = coach
        this.category = category
        this.notes = notes
        this.players = []
        this.tests = []
        this.status = "not_started"
    }
    saveTestingSession() {
        testing_sessions.push(this)
        appendTestingSession(this)
        updateTrainingCount()
    }
}

let testing_sessions = []

const TRAININGS_COOKIE_NAME = "trainings"
const TRAININGS_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

function generateTrainingId() {
  return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2)
}

function getTrainingsFromCookie() {
  let prefix = TRAININGS_COOKIE_NAME + "="

  for (let cookie of document.cookie.split(";")) {
    cookie = cookie.trim()

    if (cookie.startsWith(prefix)) {
      try {
        let trainings = JSON.parse(
          decodeURIComponent(cookie.substring(prefix.length))
        )

        return Array.isArray(trainings) ? trainings : []
      } catch {
        return []
      }
    }
  }

  return []
}

function saveTrainingsToCookie() {
  let data = trainings.map((training) => ({
    id: training.id,
    name: training.name,
    date: training.date,
    time: training.time,
    duration: training.duration,
    intensity: training.intensity,
    category: training.category,
    goal: training.goal,
    description: training.description
  }))

  document.cookie =
    TRAININGS_COOKIE_NAME +
    "=" +
    encodeURIComponent(JSON.stringify(data)) +
    "; max-age=" +
    TRAININGS_COOKIE_MAX_AGE +
    "; path=/; samesite=lax"
}

class Training {
    constructor(name, date, time, duration, intensity, category, goal, description, id = generateTrainingId()) {
        this.id = id
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
        saveTrainingsToCookie()
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
        this.formation = ""
        this.notes = ""
        this.lineup = []
        this.boards = {
            attack: { tokens: defaultBoardTokens(), shapes: [] },
            defense: { tokens: defaultBoardTokens(), shapes: [] },
            transition_to_attack: { tokens: defaultBoardTokens(), shapes: [] },
            transition_to_defense: { tokens: defaultBoardTokens(), shapes: [] },
            set_pieces: { tokens: defaultBoardTokens(), shapes: [] }
        }
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
    getOrdinal(current_date_time.date) + " " +
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

function setActiveSidebarButton(active_button) {

    document.querySelectorAll(".btns_sidebar").forEach(function(button) {
        button.classList.remove("active")
    })

    active_button.classList.add("active")
}

setActiveSidebarButton(dashboard_btn)
lucide.createIcons()

dashboard_btn.addEventListener("click", () => {
    setActiveSidebarButton(dashboard_btn)
    dashboard_div.style.display = "flex"
    players_div.style.display = "none"
    training_div.style.display = "none"
    matches_div.style.display = "none"
    new_player_div.style.display = "none"
})

players_btn.addEventListener("click", () => {
    setActiveSidebarButton(players_btn)
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
    setActiveSidebarButton(training_btn)
    dashboard_div.style.display = "none"
    players_div.style.display = "none"
    training_div.style.display = "flex"
    matches_div.style.display = "none"
    new_player_div.style.display = "none"
    training_details_page.style.display = "none"
    testing_session_div.style.display = "none"
    testing_protocol_page.style.display = "none"
    testing_test_detail_page.style.display = "none"
    training_list.style.display = "flex"
    document.querySelector(".training_header").style.display = "flex"
})

add_testing_btn.addEventListener("click", () => {
    document.querySelector(".testing_name").value = ""
    document.querySelector(".testing_date").value = ""
    document.querySelector(".testing_time").value = ""
    document.querySelector(".testing_location").value = ""
    document.querySelector(".testing_coach").value = ""
    document.querySelector(".testing_category").value = "full_performance"
    document.querySelector(".testing_notes").value = ""
    clearTestingErrors()
    training_list.style.display = "none"
    document.querySelector(".training_header").style.display = "none"
    showTestingPlayers()
    showTestingDisciplines("full_performance")
    testing_session_div.style.display = "flex"
})
function clearTestingErrors() {
    document.querySelector(".testing_name").classList.remove("input_error")
    document.querySelector(".testing_date").classList.remove("input_error")
    document.querySelector(".testing_time").classList.remove("input_error")
    testing_players_list.classList.remove("section_error")
    testing_disciplines_groups.classList.remove("section_error")
}
back_to_trainings_from_testing_btn.addEventListener("click", () => {
    testing_session_div.style.display = "none"
    training_list.style.display = "flex"
    document.querySelector(".training_header").style.display = "flex"
})
document.querySelector(".testing_category").addEventListener("change", (event) => {
    showTestingDisciplines(event.target.value)
})
testing_all_players_checkbox.addEventListener("change", () => {
    let checked = testing_all_players_checkbox.checked
    testing_players_list.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = checked
        checkbox.closest(".testing_player_option").classList.toggle("checked", checked)
    })
})
function showTestingPlayers() {
    testing_players_list.innerHTML = ""
    testing_all_players_checkbox.checked = false
    if (players.length === 0) {
        let message = document.createElement("p")
        message.classList.add("attendance_empty")
        message.textContent = "No players in the squad yet."
        testing_players_list.appendChild(message)
        return
    }
    players.forEach((player) => {
        let option = document.createElement("label")
        option.classList.add("testing_player_option")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.value = player.name + " " + player.surname
        let name = document.createElement("span")
        name.textContent = player.name + " " + player.surname
        checkbox.addEventListener("change", () => {
            option.classList.toggle("checked", checkbox.checked)
        })
        option.appendChild(checkbox)
        option.appendChild(name)
        testing_players_list.appendChild(option)
    })
}
function showTestingDisciplines(category) {
    testing_disciplines_groups.innerHTML = ""
    let default_groups = CATEGORY_DEFAULT_GROUPS[category] || []
    Object.keys(TEST_CATALOG).forEach((group_key) => {
        let group_div = document.createElement("div")
        group_div.classList.add("testing_discipline_group")
        let title = document.createElement("p")
        title.classList.add("testing_discipline_group_title")
        title.textContent = GROUP_LABELS[group_key]
        let list = document.createElement("div")
        list.classList.add("testing_discipline_list")
        TEST_CATALOG[group_key].forEach((test_definition) => {
            let option = document.createElement("label")
            option.classList.add("testing_discipline_option")
            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.checked = default_groups.includes(group_key)
            checkbox.dataset.group = group_key
            checkbox.dataset.key = test_definition.key
            option.classList.toggle("checked", checkbox.checked)
            let name = document.createElement("span")
            name.textContent = test_definition.name
            checkbox.addEventListener("change", () => {
                option.classList.toggle("checked", checkbox.checked)
            })
            option.appendChild(checkbox)
            option.appendChild(name)
            list.appendChild(option)
        })
        group_div.appendChild(title)
        group_div.appendChild(list)
        testing_disciplines_groups.appendChild(group_div)
    })
}
create_testing_btn.addEventListener("click", () => {
    let name_input = document.querySelector(".testing_name")
    let date_input = document.querySelector(".testing_date")
    let time_input = document.querySelector(".testing_time")
    let name = name_input.value.trim()
    let date = date_input.value
    let time = time_input.value
    let location = document.querySelector(".testing_location").value.trim()
    let coach = document.querySelector(".testing_coach").value.trim()
    let category = document.querySelector(".testing_category").value
    let notes = document.querySelector(".testing_notes").value.trim()
    let selected_players = Array.from(testing_players_list.querySelectorAll("input:checked")).map((checkbox) => checkbox.value)
    let selected_tests = Array.from(testing_disciplines_groups.querySelectorAll("input:checked"))
    clearTestingErrors()
    let has_error = false
    if (!name) {
        name_input.classList.add("input_error")
        has_error = true
    }
    if (!date) {
        date_input.classList.add("input_error")
        has_error = true
    }
    if (!time) {
        time_input.classList.add("input_error")
        has_error = true
    }
    if (selected_players.length === 0) {
        testing_players_list.classList.add("section_error")
        has_error = true
    }
    if (selected_tests.length === 0) {
        testing_disciplines_groups.classList.add("section_error")
        has_error = true
    }
    if (has_error) {
        return
    }
    let session = new TestingSession(name, date, time, location, coach, category, notes)
})
function appendTestingSession(session) {
    let item = document.createElement("div")
    item.classList.add("testing_item")
    let label = document.createElement("p")
    label.classList.add("testing_item_label")
    label.textContent = "Performance Test"
    let name = document.createElement("p")
    name.classList.add("testing_item_name")
    name.textContent = session.name
    let info = document.createElement("p")
    info.classList.add("testing_item_info")
    info.textContent = session.date + (session.time ? " · " + session.time : "")
    let stats = document.createElement("div")
    stats.classList.add("testing_item_stats")
    let stats_left = document.createElement("div")
    stats_left.classList.add("testing_item_stats_left")
    let players_count_span = document.createElement("span")
    players_count_span.textContent = session.players.length + " PLAYERS"
    let tests_count_span = document.createElement("span")
    tests_count_span.textContent = session.tests.length + " TESTS"
    stats_left.appendChild(players_count_span)
    stats_left.appendChild(tests_count_span)
    let status_badge = document.createElement("span")
    status_badge.classList.add("testing_status_badge", "status_" + session.status)
    status_badge.textContent = session.status.replace("_", " ")
    stats.appendChild(stats_left)
    stats.appendChild(status_badge)
    item.appendChild(label)
    item.appendChild(name)
    item.appendChild(info)
    item.appendChild(stats)
    item.addEventListener("click", () => {
        showTestingProtocol(session)
    })
    training_list.appendChild(item)
    session.element = item
}
function showTestingProtocol(session) {
    training_list.style.display = "none"
    document.querySelector(".training_header").style.display = "none"
    testing_protocol_page.style.display = "flex"
    active_testing_session = session
    testing_protocol_name.textContent = session.name
    testing_protocol_meta.textContent = session.date + (session.time ? " · " + session.time : "") + " · " + (session.location || "No location set")
    testing_protocol_players_count.textContent = session.players.length + " PLAYERS"
    testing_protocol_tests_count.textContent = session.tests.length + " TESTS"
    testing_protocol_status_badge.textContent = session.status.replace("_", " ")
    testing_protocol_status_badge.className = "testing_status_badge status_" + session.status
        testing_protocol_list.innerHTML = ""
    session.tests.forEach((test, index) => {
        let row = document.createElement("div")
        row.classList.add("testing_protocol_row")
        let name = document.createElement("span")
        name.classList.add("testing_protocol_row_name")
        name.textContent = String(index + 1).padStart(2, "0") + ". " + test.name
        let badge = document.createElement("span")
        badge.classList.add("testing_status_badge", "status_" + test.status)
        badge.textContent = test.status.replace("_", " ")
        row.appendChild(name)
        row.appendChild(badge)
        row.addEventListener("click", () => {
            showTestDetail(session, test)
        })
        testing_protocol_list.appendChild(row)
    })
}
back_to_trainings_from_protocol_btn.addEventListener("click", () => {
    testing_protocol_page.style.display = "none"
    training_list.style.display = "flex"
    document.querySelector(".training_header").style.display = "flex"
    active_testing_session = null
})
back_to_testing_protocol_btn.addEventListener("click", () => {
    testing_test_detail_page.style.display = "none"
    showTestingProtocol(active_testing_session)
})
function showTestDetail(session, test) {
    testing_protocol_page.style.display = "none"
    testing_test_detail_page.style.display = "flex"
    active_testing_session = session
    active_testing_test = test
    testing_test_detail_category.textContent = GROUP_LABELS[test.group].toUpperCase()
    testing_test_detail_name.textContent = test.name
    testing_test_detail_measurement.textContent = "Measured: " + MEASUREMENT_LABELS[test.measurement]
    testing_test_detail_unit.textContent = "Unit: " + test.unit
    testing_test_detail_attempts.textContent = "Attempts: " + test.attempts
    testing_instructions_text.textContent = TEST_INSTRUCTIONS[test.key]
    renderTestResults()
}
function getTestResultEntry(test, player_name) {
    let entry = test.results.find((result) => result.player === player_name)
    if (!entry) {
        entry = { player: player_name, attempts: [], best: null, successful: null, total: null, percentage: null, note: "" }
        test.results.push(entry)
    }
    return entry
}
function renderTestResults() {
    testing_results_list.innerHTML = ""
    active_testing_session.players.forEach((player_name) => {
        let entry = getTestResultEntry(active_testing_test, player_name)
        testing_results_list.appendChild(createTestResultRow(entry, active_testing_test))
    })
}
function createTestResultRow(entry, test) {
    let row = document.createElement("div")
    row.classList.add("testing_result_row")
    let name = document.createElement("p")
    name.classList.add("testing_result_player_name")
    name.textContent = entry.player
    let inputs = document.createElement("div")
    inputs.classList.add("testing_result_inputs")
    if (test.measurement === "time") {
        for (let i = 0; i < test.attempts; i++) {
            let attempt_group = document.createElement("div")
            attempt_group.classList.add("testing_attempt_group")
            let attempt_label = document.createElement("span")
            attempt_label.classList.add("testing_attempt_label")
            attempt_label.textContent = getOrdinal(i + 1) + " attempt"
            let attempt_input = document.createElement("input")
            attempt_input.type = "number"
            attempt_input.step = "0.01"
            attempt_input.classList.add("testing_attempt_input")
            attempt_input.placeholder = "0.00"
            attempt_input.value = entry.attempts[i] !== undefined ? entry.attempts[i] : ""
            let attempt_unit = document.createElement("span")
            attempt_unit.classList.add("testing_attempt_unit")
            attempt_unit.textContent = test.unit
            attempt_group.appendChild(attempt_label)
            attempt_group.appendChild(attempt_input)
            attempt_group.appendChild(attempt_unit)
            inputs.appendChild(attempt_group)
        }
    } 
    else if (test.measurement === "fraction") {
        let successful_input = document.createElement("input")
        successful_input.type = "number"
        successful_input.classList.add("testing_successful_input")
        successful_input.placeholder = "Successful"
        successful_input.value = entry.successful !== null ? entry.successful : ""
        let total_input = document.createElement("input")
        total_input.type = "number"
        total_input.classList.add("testing_total_input")
        total_input.placeholder = "Total"
        total_input.value = entry.total !== null ? entry.total : ""
        inputs.appendChild(successful_input)
        inputs.appendChild(total_input)
    } 
    else {
        let value_input = document.createElement("input")
        value_input.type = "number"
        value_input.step = "0.01"
        value_input.classList.add("testing_value_input")
        value_input.placeholder = test.unit
        value_input.value = entry.best !== null ? entry.best : ""
        inputs.appendChild(value_input)
    }
    let computed = document.createElement("p")
    computed.classList.add("testing_result_computed")
    computed.textContent = formatTestResult(entry, test)
    let note_input = document.createElement("input")
    note_input.type = "text"
    note_input.classList.add("testing_result_note")
    note_input.placeholder = TEST_NOTE_PLACEHOLDERS[test.key]
    note_input.value = entry.note || ""
    row.appendChild(name)
    row.appendChild(inputs)
    row.appendChild(computed)
    row.appendChild(note_input)
    return row
}
function formatTestResult(entry, test) {
    if (test.measurement === "fraction") {
        return entry.percentage !== null ? entry.successful + "/" + entry.total + " (" + entry.percentage + "%)" : "—"
    }
    return entry.best !== null ? entry.best + " " + test.unit : "—"
}
save_testing_results_btn.addEventListener("click", () => {
    let rows = testing_results_list.querySelectorAll(".testing_result_row")
    rows.forEach((row, index) => {
        let entry = active_testing_test.results[index]
        if (active_testing_test.measurement === "time") {
            let attempt_values = Array.from(row.querySelectorAll(".testing_attempt_input")).map((input) => parseFloat(input.value)).filter((value) => !isNaN(value))
            entry.attempts = attempt_values
            entry.best = attempt_values.length > 0 ? Math.min(...attempt_values) : null
        } else if (active_testing_test.measurement === "fraction") {
            let successful_value = parseFloat(row.querySelector(".testing_successful_input").value)
            let total_value = parseFloat(row.querySelector(".testing_total_input").value)
            entry.successful = isNaN(successful_value) ? null : successful_value
            entry.total = isNaN(total_value) ? null : total_value
            entry.percentage = (entry.total && entry.total > 0) ? Math.round((entry.successful / entry.total) * 100) : null
        } else {
            let value = parseFloat(row.querySelector(".testing_value_input").value)
            entry.best = isNaN(value) ? null : value
        }
        entry.note = row.querySelector(".testing_result_note").value
    })
    updateTestStatus(active_testing_test)
    updateTestingSessionStatus(active_testing_session)
    renderTestResults()
})
function hasTestResult(entry, test) {
    if (test.measurement === "fraction") {
        return entry.percentage !== null
    }
    return entry.best !== null
}
function updateTestStatus(test) {
    let completed_count = test.results.filter((entry) => hasTestResult(entry, test)).length
    if (completed_count === 0) {
        test.status = "not_started"
    } else if (completed_count === test.results.length) {
        test.status = "completed"
    } else {
        test.status = "in_progress"
    }
}
function updateTestingSessionStatus(session) {
    let completed_count = session.tests.filter((test) => test.status === "completed").length
    let started_count = session.tests.filter((test) => test.status !== "not_started").length
    if (completed_count === session.tests.length) {
        session.status = "completed"
    } else if (started_count > 0) {
        session.status = "in_progress"
    } else {
        session.status = "not_started"
    }
    let card_badge = session.element.querySelector(".testing_status_badge")
    card_badge.className = "testing_status_badge status_" + session.status
    card_badge.textContent = session.status.replace("_", " ")
}

matches_btn.addEventListener("click", () => {
    setActiveSidebarButton(matches_btn)
    dashboard_div.style.display = "none"
    players_div.style.display = "none"
    training_div.style.display = "none"
    matches_div.style.display = "flex"
    new_player_div.style.display = "none"
})

performance_btn.addEventListener("click", () => {
    setActiveSidebarButton(performance_btn)
})

analysis_btn.addEventListener("click", () => {
    setActiveSidebarButton(analysis_btn)
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
    clearPlayerForm()
    new_player_div.style.display = 'none'
    players_div.style.display = 'flex'
})

save_player_btn.addEventListener('click', function() {
    let name = document.querySelector('.new_player_name').value.trim()
    let surname = document.querySelector('.new_player_surname').value.trim()
    let age = document.querySelector('.new_player_age').value
    let height = document.querySelector('.new_player_height').value
    let weight = document.querySelector('.new_player_weight').value
    let position = document.querySelector('.new_player_position').value
    let dominant_leg = document.querySelector('.new_player_dominant_leg').value
    let status = document.querySelector('.new_player_status').value
    let notes = document.querySelector('.notes_about_new_player').value.trim()
    let errors = validatePlayer(name, surname, age, height, weight, position)
    if (errors.length > 0) {
        showPlayerErrors(errors)
        return
    }
    players.push(new Player(name, surname, age, height, weight, position, dominant_leg, status, notes))
    show_players()
    update_players_count()
    all_suspended_players()
    clearPlayerForm()
    new_player_div.style.display = 'none'
    players_div.style.display = 'flex'
})

function show_players () {
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
}

function update_players_count() {
    players_count[0].textContent = players.length
    players_count[1].textContent = players.length + ' players'
}

// Player form validation
function validatePlayer(name, surname, age, height, weight, position) {
    let errors = []
    if (!name) {
        errors.push({ input: '.new_player_name', message: 'Name is required.' })
    }
    if (!surname) {
        errors.push({ input: '.new_player_surname', message: 'Surname is required.' })
    }
    if (age === '' || isNaN(age) || age < 4 || age > 60) {
        errors.push({ input: '.new_player_age', message: 'Age is required.' })
    }
    if (height === '' || isNaN(height) || height < 100 || height > 220) {
        errors.push({ input: '.new_player_height', message: 'Height is required.' })
    }
    if (weight === '' || isNaN(weight) || weight < 30 || weight > 150) {
        errors.push({ input: '.new_player_weight', message: 'Weight is required.' })
    }
    if (!position) {
        errors.push({ input: '.new_player_position', message: 'Position must be selected.' })
    }
    return errors
}
function showPlayerErrors(errors) {
    document.querySelectorAll('.new_player_info input, .new_player_info select').forEach((field) => {
        field.classList.remove('input_error')
    })
    errors.forEach((error) => {
        document.querySelector(error.input).classList.add('input_error')
    })
}

function clearPlayerForm() {
    document.querySelector('.new_player_name').value = ''
    document.querySelector('.new_player_surname').value = ''
    document.querySelector('.new_player_age').value = ''
    document.querySelector('.new_player_height').value = ''
    document.querySelector('.new_player_weight').value = ''
    document.querySelector('.new_player_position').value = ''
    document.querySelector('.new_player_dominant_leg').value = 'right'
    document.querySelector('.new_player_status').value = 'active'
    document.querySelector('.notes_about_new_player').value = ''
    showPlayerErrors([])
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
    training_form.reset()
    training_dialog.close()
})
close_training_btn.addEventListener("click", () => {
    training_form.reset()
    training_dialog.close()
})
back_to_trainings_btn.addEventListener("click", () => {
    training_details_page.style.display = "none"
    training_list.style.display = "flex"
    document.querySelector(".training_header").style.display = "flex"
})
delete_training_btn.addEventListener("click", () => {
    let confirmed = confirm("Are you sure you want to delete \"" + active_training.name + "\"?")
    if (!confirmed) {
        return
    }
    let index = trainings.indexOf(active_training)
    trainings.splice(index, 1)
    active_training.element.remove()
    saveTrainingsToCookie()
    updateTrainingCount()
    training_details_page.style.display = "none"
    training_list.style.display = "flex"
    document.querySelector(".training_header").style.display = "flex"
    active_training = null
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
    training.element = training_item
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
    let total_count = trainings.length + testing_sessions.length
    training_subtitle.textContent = total_count + " trainings"
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
    exercise_form.reset()
    exercise_dialog.close()
})
close_exercise_btn.addEventListener("click", () => {
    exercise_form.reset()
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
        { x: 60, y: 280, team: "own", label: "1" },
        { x: 160, y: 100, team: "own", label: "2" },
        { x: 160, y: 230, team: "own", label: "3" },
        { x: 160, y: 330, team: "own", label: "4" },
        { x: 160, y: 460, team: "own", label: "5" },
        { x: 260, y: 160, team: "own", label: "6" },
        { x: 260, y: 280, team: "own", label: "7" },
        { x: 260, y: 400, team: "own", label: "8" },
        { x: 380, y: 140, team: "own", label: "9" },
        { x: 380, y: 280, team: "own", label: "10" },
        { x: 380, y: 420, team: "own", label: "11" },
        { x: 840, y: 280, team: "opponent", label: "1" },
        { x: 740, y: 100, team: "opponent", label: "2" },
        { x: 740, y: 230, team: "opponent", label: "3" },
        { x: 740, y: 330, team: "opponent", label: "4" },
        { x: 740, y: 460, team: "opponent", label: "5" },
        { x: 640, y: 160, team: "opponent", label: "6" },
        { x: 640, y: 280, team: "opponent", label: "7" },
        { x: 640, y: 400, team: "opponent", label: "8" },
        { x: 520, y: 140, team: "opponent", label: "9" },
        { x: 520, y: 280, team: "opponent", label: "10" },
        { x: 520, y: 420, team: "opponent", label: "11" },
        { x: 450, y: 280, team: "ball", label: "" }
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
        let label = team === "ball" ? "" : String(tokens.filter((token) => token.team === team).length + 1)
        tokens.push({ x: 450, y: 480, team: team, label: label })
        drawBoard()
    })
})
function boardPoint(canvas, event) {
    let rect = canvas.getBoundingClientRect()
    return {
        x: (event.clientX - rect.left) * (canvas.width / rect.width),
        y: (event.clientY - rect.top) * (canvas.height / rect.height)
    }
}
function findToken(tokens, point) {
    for (let i = tokens.length - 1; i >= 0; i--) {
        let dx = point.x - tokens[i].x
        let dy = point.y - tokens[i].y
        if (Math.sqrt(dx * dx + dy * dy) < 16) {
            return i
        }
    }
    return -1
}
function findShape(shapes, point) {
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
    let point = boardPoint(tactical_board, event)
    if (active_tool === "select") {
        let index = findToken(active_training.board.tokens, point)
        if (index !== -1) {
            board_drag = index
        }
        return
    }
    if (active_tool === "delete") {
        let token_index = findToken(active_training.board.tokens, point)
        if (token_index !== -1) {
            active_training.board.tokens.splice(token_index, 1)
        } else {
            let shape_index = findShape(active_training.board.shapes, point)
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
    let point = boardPoint(tactical_board, event)
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
    drawBoardOnCanvas(board_ctx, active_training.board, board_draw)
}
function drawBoardOnCanvas(ctx, board, preview_shape) {
    drawField(ctx)
    board.shapes.forEach((shape) => {
        drawShape(ctx, shape)
    })
    if (preview_shape) {
        drawShape(ctx, preview_shape)
    }
    board.tokens.forEach((token) => {
        drawToken(ctx, token)
    })
}
function drawField(ctx) {
    ctx.fillStyle = "#0b1410"
    ctx.fillRect(0, 0, 900, 560)
    ctx.fillStyle = "#15503a"
    ctx.fillRect(30, 30, 840, 500)
    ctx.strokeStyle = "rgba(248,250,252,0.55)"
    ctx.lineWidth = 2
    ctx.setLineDash([])
    ctx.strokeRect(30, 30, 840, 500)
    ctx.strokeRect(30, 150, 110, 260)
    ctx.strokeRect(30, 215, 40, 130)
    ctx.strokeRect(760, 150, 110, 260)
    ctx.strokeRect(830, 215, 40, 130)
    ctx.beginPath()
    ctx.moveTo(450, 30)
    ctx.lineTo(450, 530)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(450, 280, 60, 0, Math.PI * 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(450, 280, 4, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(248,250,252,0.55)"
    ctx.fill()
}
function drawShape(ctx, shape) {
    let colors = { arrow: "#f8fafc", movement: "#facc15", pass: "#38bdf8", zone: "#00d6a3" }
    let color = colors[shape.type]
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.setLineDash([])
    if (shape.type === "zone") {
        ctx.setLineDash([6, 4])
        ctx.fillStyle = "rgba(0,214,163,0.15)"
        ctx.fillRect(shape.x1, shape.y1, shape.x2 - shape.x1, shape.y2 - shape.y1)
        ctx.strokeRect(shape.x1, shape.y1, shape.x2 - shape.x1, shape.y2 - shape.y1)
        ctx.setLineDash([])
        return
    }
    if (shape.type === "pass") {
        ctx.setLineDash([8, 6])
    }
    if (shape.type === "movement") {
        drawWavyLine(ctx, shape.x1, shape.y1, shape.x2, shape.y2)
    } else {
        ctx.beginPath()
        ctx.moveTo(shape.x1, shape.y1)
        ctx.lineTo(shape.x2, shape.y2)
        ctx.stroke()
    }
    ctx.setLineDash([])
    drawArrowHead(ctx, shape.x1, shape.y1, shape.x2, shape.y2, color)
}
function drawWavyLine(ctx, x1, y1, x2, y2) {
    let dx = x2 - x1
    let dy = y2 - y1
    let length = Math.sqrt(dx * dx + dy * dy)
    let angle = Math.atan2(dy, dx)
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    for (let i = 0; i <= length; i += 2) {
        let offset = Math.sin(i / 6) * 5
        ctx.lineTo(
            x1 + i * Math.cos(angle) - offset * Math.sin(angle),
            y1 + i * Math.sin(angle) + offset * Math.cos(angle)
        )
    }
    ctx.stroke()
}
function drawArrowHead(ctx, x1, y1, x2, y2, color) {
    let angle = Math.atan2(y2 - y1, x2 - x1)
    ctx.beginPath()
    ctx.moveTo(x2, y2)
    ctx.lineTo(x2 - 12 * Math.cos(angle - 0.4), y2 - 12 * Math.sin(angle - 0.4))
    ctx.lineTo(x2 - 12 * Math.cos(angle + 0.4), y2 - 12 * Math.sin(angle + 0.4))
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
}
function drawToken(ctx, token) {
    if (token.team === "ball") {
        drawBallToken(ctx, token.x, token.y)
        return
    }
    ctx.beginPath()
    ctx.arc(token.x, token.y, 14, 0, Math.PI * 2)
    ctx.fillStyle = token.team === "own" ? "#22c55e" : "#f97316"
    ctx.fill()
    ctx.strokeStyle = "#0b1410"
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fillStyle = "#06100d"
    ctx.font = "bold 11px Inter, sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(token.label, token.x, token.y)
}
function drawBallToken(ctx, x, y) {
    let radius = 9
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = "#f8fafc"
    ctx.fill()
    ctx.strokeStyle = "#0b1410"
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.fillStyle = "#0b1410"
    drawPentagon(ctx, x, y, radius * 0.4, 0)
    for (let i = 0; i < 5; i++) {
        let angle = -Math.PI / 2 + i * (Math.PI * 2 / 5) + Math.PI / 5
        let patch_x = x + radius * 0.72 * Math.cos(angle)
        let patch_y = y + radius * 0.72 * Math.sin(angle)
        drawPentagon(ctx, patch_x, patch_y, radius * 0.32, angle + Math.PI / 2)
    }
}
function drawPentagon(ctx, cx, cy, radius, rotation) {
    ctx.beginPath()
    for (let i = 0; i < 5; i++) {
        let angle = rotation + i * (Math.PI * 2 / 5) - Math.PI / 2
        let px = cx + radius * Math.cos(angle)
        let py = cy + radius * Math.sin(angle)
        if (i === 0) {
            ctx.moveTo(px, py)
        } else {
            ctx.lineTo(px, py)
        }
    }
    ctx.closePath()
    ctx.fill()
}
match_board_tools.forEach((tool) => {
    tool.addEventListener("click", () => {
        match_active_tool = tool.dataset.tool
        match_board_tools.forEach((other) => {
            other.classList.toggle("active", other === tool)
        })
    })
})
match_board_undo_btn.addEventListener("click", () => {
    active_match.boards[active_phase].shapes.pop()
    drawMatchBoard()
})
match_board_clear_btn.addEventListener("click", () => {
    active_match.boards[active_phase].shapes = []
    active_match.boards[active_phase].tokens = defaultBoardTokens()
    drawMatchBoard()
})
match_add_token_btns.forEach((button) => {
    button.addEventListener("click", () => {
        let team = button.dataset.team
        let tokens = active_match.boards[active_phase].tokens
        let label = team === "ball" ? "" : String(tokens.filter((token) => token.team === team).length + 1)
        tokens.push({ x: 450, y: 480, team: team, label: label })
        drawMatchBoard()
    })
})
board_phase_tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        active_phase = tab.dataset.phase
        board_phase_tabs.forEach((other) => {
            other.classList.toggle("active", other === tab)
        })
        drawMatchBoard()
    })
})
match_tactical_board.addEventListener("mousedown", (event) => {
    let point = boardPoint(match_tactical_board, event)
    let board = active_match.boards[active_phase]
    if (match_active_tool === "select") {
        let index = findToken(board.tokens, point)
        if (index !== -1) {
            match_board_drag = index
        }
        return
    }
    if (match_active_tool === "delete") {
        let token_index = findToken(board.tokens, point)
        if (token_index !== -1) {
            board.tokens.splice(token_index, 1)
        } else {
            let shape_index = findShape(board.shapes, point)
            if (shape_index !== -1) {
                board.shapes.splice(shape_index, 1)
            }
        }
        drawMatchBoard()
        return
    }
    match_board_draw = { type: match_active_tool, x1: point.x, y1: point.y, x2: point.x, y2: point.y }
})
match_tactical_board.addEventListener("mousemove", (event) => {
    let point = boardPoint(match_tactical_board, event)
    let board = active_match.boards[active_phase]
    if (match_board_drag !== null) {
        board.tokens[match_board_drag].x = point.x
        board.tokens[match_board_drag].y = point.y
        drawMatchBoard()
    } else if (match_board_draw) {
        match_board_draw.x2 = point.x
        match_board_draw.y2 = point.y
        drawMatchBoard()
    }
})
match_tactical_board.addEventListener("mouseup", () => {
    if (match_board_draw) {
        active_match.boards[active_phase].shapes.push(match_board_draw)
        match_board_draw = null
    }
    match_board_drag = null
    drawMatchBoard()
})
match_tactical_board.addEventListener("mouseleave", () => {
    match_board_draw = null
    match_board_drag = null
    drawMatchBoard()
})
function drawMatchBoard() {
    if (!active_match) {
        return
    }
    drawBoardOnCanvas(match_board_ctx, active_match.boards[active_phase], match_board_draw)
}

// Match tab
new_match_btn.addEventListener('click', function() {
    match_dialog.showModal()
})

cancel_match_btn.addEventListener('click', function() {
    match_form.reset()
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
    match_item.appendChild(match_header)
    match_item.addEventListener("click", () => {
        showMatchDetails(match)
    })
    match_list.appendChild(match_item)
    match.element = match_item
}

function updateMatchCount() {
    match_subtitle.textContent = matches.length + " matches"
}

back_to_matches_btn.addEventListener("click", () => {
    match_details_page.style.display = "none"
    match_list.style.display = "flex"
    matches_intro.style.display = "flex"
})
delete_match_btn.addEventListener("click", () => {
    let confirmed = confirm("Are you sure you want to delete the match against \"" + active_match.opponents_name + "\"?")
    if (!confirmed) {
        return
    }
    let index = matches.indexOf(active_match)
    matches.splice(index, 1)
    active_match.element.remove()
    updateMatchCount()
    match_details_page.style.display = "none"
    match_list.style.display = "flex"
    matches_intro.style.display = "flex"
    active_match = null
})
match_tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        showMatchTab(index)
    })
})
function showMatchTab(index) {
    match_tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index)
    })
    match_information.style.display = index === 0 ? "grid" : "none"
    match_lineup.style.display = index === 1 ? "flex" : "none"
    match_board.style.display = index === 2 ? "flex" : "none"
    if (index === 2) {
        drawMatchBoard()
    }
}
function showMatchDetails(match) {
    match_list.style.display = "none"
    matches_intro.style.display = "none"
    match_details_page.style.display = "flex"
    active_match = match
    match_details_league.textContent = match.league
    match_details_place_badge.textContent = match.place === "home" ? "Home" : "Away"
    match_details_place_badge.classList.toggle("place_home", match.place === "home")
    match_details_place_badge.classList.toggle("place_away", match.place !== "home")
    let own_team_name = document.querySelector(".team_name p:last-child").textContent
    match_details_own_name.textContent = own_team_name
    match_details_own_label.textContent = match.place === "home" ? "Home team" : "Away team"
    match_details_opponent_name.textContent = match.opponents_name
    match_details_datetime.textContent = match.date + " · " + match.time
    match_info_date.textContent = match.date
    match_info_time.textContent = match.time || "—"
    match_info_league.textContent = match.league
    match_info_place.textContent = match.place === "home" ? "Home" : "Away"
    updateMatchExtraInfo()
    showLineup()
    showMatchTab(0)
}
function updateMatchExtraInfo() {
    match_info_formation.textContent = active_match.formation || "Not set"
    match_info_notes.textContent = active_match.notes || "No notes yet."
}
edit_match_details_btn.addEventListener("click", () => {
    document.getElementById("match_formation").value = active_match.formation
    document.getElementById("match_notes").value = active_match.notes
    match_details_dialog.showModal()
})
cancel_match_details_btn.addEventListener("click", () => {
    match_details_form.reset()
    match_details_dialog.close()
})
close_match_details_btn.addEventListener("click", () => {
    match_details_form.reset()
    match_details_dialog.close()
})
match_details_form.addEventListener("submit", (event) => {
    event.preventDefault()
    active_match.formation = document.getElementById("match_formation").value
    active_match.notes = document.getElementById("match_notes").value
    updateMatchExtraInfo()
    match_details_dialog.close()
})
function formatPositionLabel(position) {
    return POSITION_LABELS[position] || "—"
}
function getLineupEntry(match, player) {
    let entry = match.lineup.find((lineup_entry) => lineup_entry.player === player)
    if (!entry) {
        entry = { player: player, attendance: "absent", role: "not_nominated" }
        match.lineup.push(entry)
    }
    return entry
}
function showLineup() {
    lineup_list.innerHTML = ""
    if (players.length === 0) {
        let message = document.createElement("p")
        message.classList.add("attendance_empty")
        message.textContent = "No players in the squad yet."
        lineup_list.appendChild(message)
        updateLineupCount()
        return
    }
    players.forEach((player) => {
        let entry = getLineupEntry(active_match, player)
        lineup_list.appendChild(createLineupItem(entry))
    })
    updateLineupCount()
}
function createLineupItem(entry) {
    let item = document.createElement("div")
    item.classList.add("lineup_item")
    let player_info = document.createElement("div")
    player_info.classList.add("lineup_item_player")
    let avatar = document.createElement("div")
    avatar.classList.add("lineup_item_avatar")
    avatar.textContent = entry.player.name.charAt(0) + entry.player.surname.charAt(0)
    let text = document.createElement("div")
    let name = document.createElement("p")
    name.classList.add("lineup_item_name")
    name.textContent = entry.player.name + " " + entry.player.surname
    let position = document.createElement("p")
    position.classList.add("lineup_item_position")
    position.textContent = formatPositionLabel(entry.player.position)
    text.appendChild(name)
    text.appendChild(position)
    player_info.appendChild(avatar)
    player_info.appendChild(text)
    let controls = document.createElement("div")
    controls.classList.add("lineup_item_controls")
    controls.appendChild(createLineupBadgeGroup(entry, "attendance", [
        { value: "present", label: "P" },
        { value: "absent", label: "N" },
        { value: "excused", label: "O" }
    ]))
    controls.appendChild(createLineupBadgeGroup(entry, "role", [
        { value: "starting", label: "Start" },
        { value: "substitute", label: "Sub" },
        { value: "not_nominated", label: "Out" }
    ]))
    item.appendChild(player_info)
    item.appendChild(controls)
    return item
}
function createLineupBadgeGroup(entry, field, options) {
    let group = document.createElement("div")
    group.classList.add("lineup_badges")
    options.forEach((option) => {
        let badge = document.createElement("button")
        badge.type = "button"
        badge.classList.add("lineup_badge")
        badge.classList.toggle("active", entry[field] === option.value)
        badge.textContent = option.label
        badge.addEventListener("click", () => {
            entry[field] = option.value
            group.querySelectorAll(".lineup_badge").forEach((other_badge, index) => {
                other_badge.classList.toggle("active", options[index].value === option.value)
            })
            updateLineupCount()
        })
        group.appendChild(badge)
    })
    return group
}
function updateLineupCount() {
    let starting_count = active_match.lineup.filter((entry) => entry.role === "starting").length
    lineup_count.textContent = "(" + starting_count + "/11)"
}

function loadTrainingsFromCookie() {
    let saved_trainings = getTrainingsFromCookie()

    saved_trainings.forEach((training) => {
        let loaded_training = new Training(
            training.name,
            training.date,
            training.time,
            training.duration,
            training.intensity,
            training.category,
            training.goal,
            training.description,
            training.id
        )

        trainings.push(loaded_training)
        appendTraining(loaded_training)
    })

    updateTrainingCount()
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadTrainingsFromCookie)
} else {
    loadTrainingsFromCookie()
}