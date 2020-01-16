// For global variables
const today = new Date()
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
let currentDate = today.getDate() - 1
let week = [0, 0, 0, 0, 0, 0, 0]
showMonthCalendar()

/* Handles click event for day */
/*$('.valid').mouseenter((event) => {
    $('#' + event.target.id + '>.month-event').hide()
    $('#' + event.target.id + '>.week-event').hide()
    $('#' + event.target.id).append("<div class=\"item\">Create Event</div>")
    $('#' + event.target.id).append("<div class=\"item\">See More</div>")
})

$('.valid').mouseleave((event) => {
    $('.item').remove()
    $('#' + event.target.id + '>.month-event').show()
    $('#' + event.target.id + '>.week-event').show()
})*/

// Handles clicked event
let clicked = false;
let previousId = -1
$(document).click((event) => {
    console.log(event.target.id)
    // Check if id and class are defined
    if(event.target.id && $(event.target).attr('class')){
        // Check if cell is clicked
        if($(event.target).attr('class').includes("valid")){
            // If something is not selected (clicked)
            if(!clicked){
                $('#' + event.target.id + '>.month-event').hide()
                $('#' + event.target.id).append("<div class=\'item\'>Create Event</div>")
                $('#' + event.target.id).append("<div class=\'item\'>See More</div>")
                clicked = true;
            } else {

                // If clicked same cell
                if(event.target.id === previousId){
                    // now clickable buttons
                } else {
                    $('#' + previousId + '>.month-event').show()
                    $('.item').remove()
                    clicked = false
                }
            }
        } else {
            $('#' + previousId + '>.month-event').show()
            $('.item').remove()
            clicked = false
        }
    } else {
        $('#' + previousId + '>.month-event').show()
        $('.item').remove()
        clicked = false
    }
    previousId = event.target.id
})

// Handles click event for changing displays
$('#by-week').click(() => {
    clear()
    showWeekCalendar(true)
})

$('#by-month').click(() => {
    clear()
    showMonthCalendar()
})

function clear(){
    $('.week-by-week').empty()
    $('.month-by-month').empty()
    $('#month').empty()
}

function daysInMonth(){
    return 32 - new Date(currentYear, currentMonth, 32).getDate()
}

function daysInNextMonth(){
    if(currentMonth - 1 < 0){
        return 32 - new Date(currentYear - 1, 11, 32).getDate()
    } else {
        return 32 - new Date(currentYear, currentMonth - 1, 32).getDate()
    }
}

function daysInPreviousMonth(){
    if(currentMonth - 1 < 11){
        return 32 - new Date(currentYear + 1, 0, 32).getDate()
    } else {
        return 32 - new Date(currentYear, currentMonth - 1, 32).getDate()
    }
}

function next() {
    // Checks whether in weekly or monthly mode
    if($('input[name=\'selector\']:checked').val() === "week"){
        showWeekCalendar(true)
    } else {
        clear()
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear
        currentMonth = (currentMonth + 1) % 12
        showMonthCalendar()
    }
}

function previous() {
    if(Math.abs(week[0] - week[6]) > 7){
        if(currentMonth === 0){
            currentMonth = 11
            currentYear--
        } else {
            currentMonth--
        }
    }

    // Checks whether in weekly or monthly mode
    if($('input[name=\'selector\']:checked').val() === "week"){
        showWeekCalendar(false)
    } else {
        clear()
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1
        showMonthCalendar()
    }
}

function changeHeader(month, year){
    $('#month').empty()
    $('#month').append(months[month] + "<br/><span>" + year + "</span>")
}

function addToHeader(monthToAdd, yearToAdd){
    $('#month').append("/" + months[monthToAdd] + "<br/><span>" + yearToAdd + "</span>")
}

function changeAndCheck(valueToCheck, changeToValue){
    console.log("before increment: " + valueToCheck + " " + currentMonth + " " + currentYear)
    valueToCheck = valueToCheck + changeToValue
    // Handles if negative value
    if(valueToCheck < 0){
        changeHeader(currentMonth, currentYear)
        if(currentMonth === 0) {
            currentMonth = 11
            currentYear--
        } else {
            currentMonth--
        }
        valueToCheck += daysInMonth()
        addToHeader(currentMonth, currentYear)
    } else if(valueToCheck > daysInMonth()){
        changeHeader(currentMonth, currentYear)
        valueToCheck -= daysInMonth()
        if(currentMonth === 11) {
            currentMonth = 0
            currentYear++
        } else {
            currentMonth++
        }
        addToHeader(currentMonth, currentYear)
    }
    console.log("after increment: " + valueToCheck + " " + currentMonth + " " + currentYear)
    return valueToCheck
}

function printWeek(date){
    if(today.getDate() === date & today.getMonth() === currentMonth && today.getFullYear() === currentYear){
        $("#0").append("<div id=\"" + date + "\" class=\"active valid\">" + date)
    } else {
        $("#0").append("<div id=\"" + date + "\" class=\"valid\">" + date)        
    }
    /*$.ajax({
        type: "get",
        url: "../../api/scripts/event/list.php",
        data: {
            date: date,
            month: currentMonth,
            year: currentYear
        },
        success: (response) => {
            $("#0").append(response)        

        }
    })*/
    $("#0").append("</div>")
    $("#" + date).append("<div class=\"week-event\">9pm - ACM Meeting</div>")
}

// BUG: clicking back and forth with by week and by month
function showWeekCalendar(positive){
    $('.week-by-week').empty()
    $('.week-by-week').append("<div id=\"0\" class=\"row\">")

    // If on today's week, keep first as this
    let first = today.getDate() - today.getDay()
    if(first < 0){
        if(currentMonth === 0){
            currentMonth = 11
            currentYear--
            first = daysInMonth + first
        } else {
            currentMonth--
            first = daysInMonth + first
        }
    }
    
    // Check if 'prev' or 'next' has been clicked
    if(week[0] !== 0){
        first = (positive) ? changeAndCheck(week[6], 1) : changeAndCheck(week[0], -7)
    }
    console.log("first day: " + first + " " + currentMonth + " " + currentYear)

    // Set days for the week
    for(let i = 0; i < 7; i++){
        week[i] = first
        printWeek(first)
        // Do NOT increment if last iteration, already incremented at start
        if(i !== 6){
            first = changeAndCheck(first, 1)
        }
    }

    // Update header
    if(Math.abs(week[0] - week[6]) <= 7){
        changeHeader(currentMonth, currentYear)
    }
    console.log(week)
    $('.week-by-week').append("</div>")
}

function printMonth(active, valid, row, date){
    if(active && valid){
        $("#row-" + row).append("<div id=\"" + date + "\" class=\"active valid\">" + date)
    } else if(valid){
        $("#row-" + row).append("<div id=\"" + date + "\" class=\"valid\">" + date)
    } else {
        $("#row-" + row).append("<div class=\"invalid\">" + date)
    }
    $("#row-" + row).append("</div>")

    // Only call for valid dates
    if(valid){
        /*$.ajax({
            type: "get",
            url: "../../api/scripts/event/list.php",
            data: {
                date: date,
                month: currentMonth,
                year: currentYear
            },
            success: (response) => {
                $("#row-" + row).append(response)        
    
            }
        })*/
        $("#" + date).append("<div class=\"month-event\">9pm - ACM Meeting</div>")
    }
}

function showMonthCalendar() {
    changeHeader(currentMonth, currentYear)

    let firstDay = (new Date(currentYear, currentMonth)).getDay()
    let table = $('.month-by-month')

    let date = 1 // Change to Date so you can compare dates for active (easier)
    for (let i = 0; i < 6; i++) {

        // In order to stop from printing last row blank
        if(date <= daysInMonth()){
            table.append("<div id=\"row-" + i + "\" class=\"row\">") 
        }

        for (let j = 0; j < 7; j++) {
            let nextMonth = 1
            if (i === 0 && j < firstDay) {
                printMonth(false, false, i, daysInPreviousMonth() - (firstDay - j) + 1)
            } else if(date > daysInMonth()){
                printMonth(false, false, i, nextMonth)
                nextMonth++
                break
            } else {
                if (date === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
                    printMonth(true, true, i, date)
                } else {
                    printMonth(false, true, i, date)
                }
                date++
            }
        }

        // In order to stop from printing last row blank
        if(date <= daysInMonth()){
            table.append("</div>") 
        }
    }
}