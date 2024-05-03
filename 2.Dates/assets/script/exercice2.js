// Exerice 2.
// Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

export function dayLeft() {
    let birthDay = new Date('1989-03-24');
    let today = new Date();
    let differenceDate = today - birthDay;
    let dayPassed = Math.floor(differenceDate / (1000* 60 * 60 *24));
    let sectionBrith = document.querySelector('#birthday');
    let pDay = document.createElement('p');
    pDay.textContent = dayPassed;
    sectionBrith.appendChild(pDay);
 }

// Write a function to find how many days have passed since any point in time (after 1970).