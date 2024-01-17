/* 
 * Main scripts file for the flight schedule website.
 * Assignment 4, CSCI 1170, Fall 2022
 * Starter code provided by Dr. Mayra Barrera Machuca
 */

//function & for loops added in A5, remaining same as A4
function displayFlights(findFlight) {
    for (let i = 0; i < findFlight.length; i++) {
        for (let item of FlightInfo) {
            if (findFlight[i].toLowerCase().includes(item.destination.toLowerCase()) 
            || findFlight[i].toLowerCase().includes(item.airport.toLowerCase())) {
                // creating elements 
                let mainContainer = document.querySelector(".container");
                let mainArticle = document.createElement("article");
                let articleHeading = document.createElement("h2");
                let articleI = document.createElement("i");
                let articleUl = document.createElement("ul");
                let articleList1 = document.createElement("li");
                let articleList2 = document.createElement("li");
                let articleList3 = document.createElement("li");
                let button = document.createElement("button");

                // adding destination to flight info box
                mainContainer.appendChild(mainArticle);
                mainArticle.appendChild(articleHeading);
                articleHeading.innerText += item.destination; 
                console.log(articleHeading);


                mainArticle.appendChild(articleI);
                if (item.stops === 0) {
                    articleI.innerText += "\nNon Stop, " + item.time + "min";
                    console.log(articleI);
                }
                else {
                    articleI.innerText += "\n" +item.stops + ", " + item.time + "min";
                    console.log(articleI);
                }
                articleI.innerText += "\nDepart time: " + item.departTime;

                // article lists 
                mainArticle.appendChild(articleUl);
                articleUl.appendChild(articleList1);  
                articleUl.appendChild(articleList2);
                articleUl.appendChild(articleList3); 
                articleList1.innerText += "Airline: " + item.airline;
                articleList2.innerText += "Airport: " + item.airport;
                articleList3.innerText += "Details: " + item.info;

                // select button 
                mainArticle.appendChild(button);
                button.innerText += "Select";
                
                // posting flight info to select bag
                button.addEventListener("click", function(){ 
                    let asideContainer = document.querySelector(".flights-selection-bag");
                    let asideText = document.createElement("p");
                    asideContainer.appendChild(asideText);
                    asideText.innerText += "Flight " + item.code + " to " + item.destination + " added" ;
                    console.log(asideContainer);
                });
                // adding class names 
                articleI.classList.add("articleText");
                mainArticle.classList.add("flight-info");
                articleUl.classList.add("flight-availability-info"); 
            }
    }
}}
