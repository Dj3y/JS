// Exercice 1.
// Find the timezones of :
// Anchorage (USA): Alaska Time Zone (AKST/AKDT)
// Reykjavik (Iceland): Greenwich Mean Time (GMT)
// Saint Petersburg (Russia): Moscow Standard Time (MSK)
// And display the date and time of these cities along with the time and date of Brussels.
// Function to get current date and time in a specific timezone
export function currentDateTime(timezone) {
    const infos = {
        timeZone: timezone,
        hour12: false,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return new Date().toLocaleString('en-US', infos);
}

// Timezones for each cities
const cities = [
    { name: "Brussels", timezone: "Europe/Brussels" },
    { name: "Anchorage", timezone: "America/Anchorage" },
    { name: "Reykjavik", timezone: "Atlantic/Reykjavik" },
    { name: "Saint Petersburg", timezone: "Europe/Moscow" }
];

// Get the div where we display the time for each city
const sectionTimeZone = document.getElementById('timezone');

// Display date and time for each city using loop for of 
for(let city of cities){
    const dateTime = currentDateTime(city.timezone);
    const listItem = document.createElement('p');
    listItem.textContent = `${city.name}: ${dateTime}`;
    sectionTimeZone.appendChild(listItem);
};