$(document).ready(function() {
    var query = $.getJSON("/world/visited.json", function(data) {
        var countries = Countries(data);
        countries.paintVisited();
        countries.addMouseHoverEffects();
    });
});
