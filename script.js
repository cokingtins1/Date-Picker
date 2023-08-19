import { parse, format, getDate, getMonth, getYear } from "date-fns"

const pickButton = document.querySelector(".date-picker-button")

const datePickerContainer = document.querySelector(".date-picker.show")
const datePickerButton = document.querySelector(".date-picker-button")

const currentMonth = document.querySelector(".current-month")

const button = document.querySelectorAll("button")

const calendar = document.querySelector(
	".date-picker-grid-dates date-picker-grid"
)

const DEFAULT_DATE = datePickerButton.textContent // October 26, 2020
const DEFAULT_FORMAT_STRING = "MMMM do, yyyy" // 'October 26, 2020'

const calendarButtons = document.querySelectorAll(".date")

const defaultDateObj = parseDate(DEFAULT_DATE, DEFAULT_FORMAT_STRING)

button.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (button.matches(".date")) {
			const buttonNumber = parseInt(button.textContent)
			console.log(defaultDateObj.month)
			// datePickerContainer.className = "date-picker"
			// if (datePickerButton.textContent === "October 26, 2020") {
			// 	// const currentCalendar = parseDate(DEFAULT_DATE, DEFAULT_FORMAT_STRING)
			// 	console.log("hi")
			// } else {
			// 	// parseCalendarOnClick(buttonNumber)
			// 	// const pickedNumber = parseDate(buttonNumber)
			// 	// console.log(pickedNumber.month)
			// 	// popCalendar()
			// }

			// datePickerButton.textContent = "Sean"
		} else if (button.matches(".date-picker-button")) {
			if (datePickerContainer.matches(".date-picker")) {
				// datePickerContainer.className = "date-picker show"
			}
		}
	})
})

// Populate new calendar

function popDefaultCalendar() {
	parseDate(DEFAULT_DATE, DEFAULT_FORMAT_STRING)

	currentMonth.textContent = `${dateInfo.month} - ${dateInfo.year}`
	// console.log(dateInfo.year)
}

function popCalendar() {}

function parseCalendarOnClick(number) {
	console.log(number)
}

function getDateFromClick() {}

function parseDate(stringDate, formatString) {
	const parsedDate = parse(stringDate, formatString, new Date())

	const dateNumber = getDate(parsedDate)
	const month = format(parsedDate, "MMMM")
	const monthNumber = getMonth(parsedDate)
	const year = getYear(parsedDate)

	return (dateInfo = {
		number: dateNumber,
		month: month,
		year: year,
		// dateCode:
	})
}

const test = "October 26, 2020"

popDefaultCalendar(test)

// const myDate = Date(2014, 1, 11)

// function formatDate(date) {
// 	return format(new Date(date), "MMMMMM do, yyyy")
// }

// formatDate(myDate)

// console.log(myDate)
