// JS variables, such as "animalSearched", api-key, api-url;
var apiKey = "49bd46fd5aab11a948d0cf49fdb22633";
var animalSearched = "Dog";
// Jquery on click event for submit button, should grab zip code box
  $('#enter').on('click', function() {
        var zipCode = $('#zipCode').val();
        console.log(zipCode); 
// Jquery event for clicking left arrow on the page 

// Jquery event for clicking left arrow on their keyboard

// Jquery event for right arrow on keyboard

// Jquery event for clicking right arrow on the page

// JS method for replacing entire page with new HTML

// JS method for getting API request

var queryURL = "http://api.petfinder.com/pet.getRandom?key="+apiKey+"&output=full&format=json&animal=dog";
$.ajax({
    url: queryURL,
    method: "GET"
  })

  
    .then(function(response) {
        console.log();
   

    });
