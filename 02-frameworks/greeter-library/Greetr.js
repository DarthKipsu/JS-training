(function(global, $) {

    // Return a new object using new function constructor, so a programmer doesn't need to type it
    // every time.
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    //Create a prototype object containing functions a Greetr object can use.
    Greetr.prototype = {};

    // Create the Greetr object.
    Greetr.init = function(firstname, lastname, language) {
        // Use self instead of this to avoid inconsistencies to where this points to inside
        // closures.
        var self = this;

        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }

    // Point newly greated objects prototype to Greetr.prototype, so it will have all the functions
    // specified in the prototype.
    Greetr.init.prototype = Greetr.prototype;

    // Expose object to global object so it can be used. (Not worrying about if it already exists.)
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
