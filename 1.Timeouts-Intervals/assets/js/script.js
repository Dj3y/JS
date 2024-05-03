// Write a function that mimics the behaviour of a typewriter.
// Using setInterval display the word Keller one character at a time (one letter per second). Once the word is written on the screen clear the interval.
// la fonction a un paramêtre pour pouvoir utilisé avec d'autres mots aussi 
function typeWriter(word){
    // const typeText = 'Keller';
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    const interval = setInterval(() => {
        if (i >= word.length) {
            clearInterval(interval);
        } else { 
            typewriter.innerHTML += word[i];
            i++;
        }
        }, 1000);
    }
// appel de fonction avec le mot qu'on veut affiché
typeWriter("Keller");

// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.
const passedTime = document.getElementById('second-passed');
function displayTimePassed(){
    let secondes = 0;
    setInterval(() =>{ 
        secondes++;
        if (secondes % 60 === 0){
            const minutes = secondes /60;
            // let pluriel = '';
            // if (minutes > 1) {
            //     pluriel = 's';
            // } else {
            //     pluriel = '';
            // }
            passedTime.innerHTML = `Vous êtes sur la page depuis ${minutes} minute${minutes > 1 ? 's' : ''}`;
        }
        else{
             passedTime.innerHTML = `Vous êtes sur la page depuis ${secondes} seconde${secondes > 1 ? 's' : ''}`;
        }
    }, 1000);
} 
displayTimePassed();
