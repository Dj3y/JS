// Create a new directory , containing 3 files:
//     index.html
//     script.js
//     a json file containing an array with a few strings ( learn what's a json file )
// Create a <button>, when clicked the json's contentn is loaded with a fetch('your-json-file.json'), then dynamically generate a <ul> list containing each rule in a <li>.
function afficheJson(){
    const btn = document.querySelector('#btnJson');
    btn.addEventListener('click', () =>{
        fetch("assets/js/file.json")
        .then((response) => response.json())
        .then((data) => {
            const ul = document.querySelector("#family");
            ul.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
        })
        .catch((error) => {
            console.log("Error loading: ", error);
        })
    })
}
