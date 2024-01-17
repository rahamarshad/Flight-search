//Creating elements 
let mainContainer = document.querySelector('body');
let container = document.querySelector('.container');
let searchBar = document.createElement('aside');
searchBar.id = 'searchContainer';
let form = document.createElement('form');
form.id = 'form';
let label = document.createElement('label');
label.id = 'textLabel';
label.setAttribute('for', 'inputSearch');
let input = document.createElement('input');
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Search using flight destination or airport');
input.id = 'inputSearch';
input.name = 'inputSearch';
let enterInput = document.createElement('input');
enterInput.id = 'findButton'
enterInput.setAttribute('type', 'submit');
enterInput.setAttribute('value', 'Find Flight(s)');
//initialise array
let findFlight = [];


//Collecting data from input bar 
enterInput.addEventListener('click', function(event){
    findFlight = [];
    //get input from search bar
    let s = document.getElementById('inputSearch').value.trim().toLowerCase();
    console.log(s);
    if (s === '') {
        console.log('the search keyword is empty');
    }

    if (findFlight.length === 0){
        console.log('Sorry! Flight does not exist');
        //loop through flight info and check for matches 
        for (let item of FlightInfo) {
            if (item.destination.toLowerCase().includes(s)) {
                //if match found add to array 
                findFlight.push(item.destination);
                console.log('found');
            }
            else if (s === item.airport.toLowerCase()) {
                //check for duplicate airport codes
                if (!findFlight.includes(item.airport)) {
                    findFlight.push(item.airport);
                    console.log('found');
                }
            }
            else {
                console.log('not found');
            }
        }
       
        //call function that displays flight details
        if (s !== '') {
        displayFlights(findFlight);
        }
        event.preventDefault();
    }
})


searchBar.appendChild(form);
form.appendChild(label);
form.appendChild(input);
searchBar.appendChild(enterInput);


mainContainer.insertBefore(searchBar, container);

//Adding content to created elements 
label.textContent = 'Search for flights to add:';



