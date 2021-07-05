

function StartTheShow(){
    clickDestination();
    clickTravel(destination);
    clickEntertainment(destination);  
    clickRestaurant(destination);
    storageIdea();
}

function clickDestination(){
    destinationPlaces = ["JurrasicPark", "DeathStar", "Faerun"];
    let destinationTravel =  Math.floor(Math.random() * destinationPlaces.length);
    destination = destinationPlaces[destinationTravel];              
    if(userPromt === "Destination"){
        clickTravel(destination);
        clickEntertainment(destination);  
        clickRestaurant(destination);
    }   
    return destination;    
}


function clickTravel(destination){
    let jurrasicPark = ["Dinosaur", "Jeep", "Monorail"];
    let faerun = ["Horse", "Cart", "Dragon"];
    let deathStar = ["Tie Fighter", "X-Wing",  "Slave-1"];
    travel = "";   
    if(destination === "Faerun"){
        let faerunTravel =  Math.floor(Math.random() * faerun.length);
        travel = faerun[faerunTravel];            
    }
    else if(destination === "JurrasicPark"){
        let jurrasicparkTravel =  Math.floor(Math.random() * jurrasicPark.length);
        travel = jurrasicPark[jurrasicparkTravel];        
    }
    else if(destination === "DeathStar"){
        let deathStarTravel = Math.floor(Math.random() * deathStar.length);
        travel = deathStar[deathStarTravel];        
    } 
    return travel;  
}


function clickEntertainment(destination){
    let jurrasicPark = ["T-rex exhibit", "Mosasaur exhibit", "Grand Tour Of The Park"];
    let faerun = ["Tomb Raiding", "Quest", "Mage Games"];
    let deathStar = ["Space Arcade", "Shooting Gallery",  "Bounty Hunting With Friends"];
    entertainment = "";
    if(destination === "Faerun"){
        let faerunTravel =  Math.floor(Math.random() * faerun.length);
        entertainment = faerun[faerunTravel];
    }
    else if(destination === "JurrasicPark"){
        let jurrasicparkTravel =  Math.floor(Math.random() * jurrasicPark.length);
        entertainment = jurrasicPark[jurrasicparkTravel];
    }
    else if(destination === "DeathStar"){
        let deathStarTravel = Math.floor(Math.random() * deathStar.length);
        entertainment = deathStar[deathStarTravel];
    }        
    return entertainment;
}
               
 
function clickRestaurant(destination){
    let jurrasicPark = ["Dino Burger inn", "Cold Blooded Ice Shack", "Brontosaurus Buffet"];
    let faerun = ["Wenches And Mead Tavern", "Golden Blade Inn", "The Goblins Shack"];
    let deathStar = ["Cafeteria", "The Dark Side Bakery",  "Cantina"];
    restaurant = "";
    if(destination === "Faerun"){
        let faerunTravel =  Math.floor(Math.random() * faerun.length);
        restaurant = faerun[faerunTravel];    
    }
    else if(destination === "JurrasicPark"){
        let jurrasicparkTravel =  Math.floor(Math.random() * jurrasicPark.length);
        restaurant = jurrasicPark[jurrasicparkTravel];
    }
    else if(destination === "DeathStar"){
        let deathStarTravel = Math.floor(Math.random() * deathStar.length);
        restaurant = deathStar[deathStarTravel];
    }        
    return restaurant;
}         


function storageIdea(){
    let storage = [ destination, restaurant, travel, entertainment];
    
    if(destination != "" && restaurant != ""&& travel != "" && entertainment != ""){
        alert("Congratulations!! You will be going too "+destination+"! The event you will attending is the "+entertainment+"! The restaurant will be the "+restaurant+" and you will be traveling by "+travel+"!");
        userPromt = prompt("Would you like to change any specific event? If so which one, Destination, Entertainment, Restaurant or Travel? If you think this is the perfect trip please type Continue ");
    }        
    if(userPromt === "Entertainment"){
        dontLike(userPromt);        
    }
    else if(userPromt === "Destination"){ 
        dontLike(userPromt);
    }
    else if(userPromt === "Travel"){
        dontLike(userPromt);
    }
    else if(userPromt === "Restaurant"){
        dontLike(userPromt);
    }
    else if(userPromt === "Continue"){
        doYouLike(storage);
    }
    return storage;                                                                                                 
}


function dontLike (userPromt){
      
    if(userPromt === "Entertainment"){
        clickEntertainment(destination);        
    }
    else if(userPromt === "Destination"){ 
        clickDestination();
    }
    else if(userPromt === "Travel"){
        clickTravel(destination);
    }
    else if(userPromt === "Restaurant"){
        clickRestaurant(destination);
    }  
    storageIdea();
    return userPromt;
}







function doYouLike(destination){
    alert(destination);
    userPromt = prompt("Do you think the trip that is planned out for you is perfect and would you like to book it right now type Yes! If you wanna plan a new trip type No");
  

    if(userPromt === "Yes"){
        alert("All Sales are final now and this is your trip! "+destination);
        alert("I am glad we could find the most perfect day trip for you! I hear all these places have really good safty standers!");
        console.log("confirmed");    
        console.log(destination);
    }
    else if(userPromt === "No"){
        alert("O No! Well Lets plan a new trip by hitting the button again");
        console.log("They wanna redo "+userPromt);
    }    
}
let destination = ("");
let restaurant = ("");
let travel = ("");
let entertainment = ("");
let userPromt = ("")
