// Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.
const btn = document.getElementById("btnName");
    btn.addEventListener('click',resultName);
function resultName(){
        const inputName = document.getElementById("inputName").value;
        if (!inputName) {
            alert('Please enter a name.');
            return;
        }
        fetch(`https://api.agify.io?name=${inputName}`) 
        .then((response) =>response.json())
        .then((data) => {
            console.log('test');
            const resultsContainer = document.getElementById("results");
            const divResult = document.createElement('div');
            divResult.textContent = `The name you asked is ${inputName} and the average age is ${data.age}.`; 
            resultsContainer.appendChild(divResult);
        })
    .catch((error) => {
        console.log("Error loading: ", error);
    })
}

// Extra steps
//     Also add a <select> field with a few countries in it, to narrow down the search to a specific country. You'll have to look in agify documentation to know more about that.
//     Store the previous results in a localStorage so you don't have to fetch them again!
//     Refactor your "The collection" project using json and fetch
// Agify is down ? Find another free api here : https://apilist.fun/collection/free-apis