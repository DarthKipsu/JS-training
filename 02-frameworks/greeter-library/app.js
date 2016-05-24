// Create a new object
var g = G$('John', 'Doe');

// Chain some methods
g.greet().setLang('es').greet(true).setLang('fi').greet().log();

// Use the object to greet by clicking on the html button
$('#login').click(function() {
    g.setLang($('#lang').val()).htmlGreeting('#greeting');
});
