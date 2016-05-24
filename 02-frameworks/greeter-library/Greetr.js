// add a semicolon in case another library used doesn't finish it's semicolons properly.
;(function(global, $) {

    // Return a new object using new function constructor, so a programmer doesn't need to type it
    // every time.
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    // These objects are not exposed to the outside world, it's in the memory space of this IIFE
    // only. However you can use these inside the objects because of their lexical environment.
    var supportedLangs = ['en', 'es', 'fi'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
        fi: 'Moi'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        fi: 'Hei'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inció sesión',
        fi: 'Kirjattiin'
    };

    //Create a prototype object containing functions a Greetr object can use.
    Greetr.prototype = {
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullname() + '.';
        },

        greetingMsg: function(formal) {
            return formal ? this.formalGreeting() : this.greeting();
        },

        greet: function(formal) {
            if (console) {
                console.log(this.greetingMsg(formal));
            }

            // Make the function chainable.
            return this;
        },

        log: function() {
            if (console) {
                console. log(logMessages[this.language] + ': ' + this.fullname());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();

            return this;
        },

        // Add creeting to a given jQuery html selector.
        htmlGreeting: function(selector, formal) {
            if (!$) throw 'jQuery not loaded';
            if (!selector) throw 'Missing jQuery selector';

            $(selector).html(this.greetingMsg(formal));

            return this;
        }

    };

    // Create the Greetr object.
    Greetr.init = function(firstname, lastname, language) {
        // Use self instead of this to avoid inconsistencies to where this points to inside
        // closures.
        var self = this;

        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';

        self.validate();
    }

    // Point newly greated objects prototype to Greetr.prototype, so it will have all the functions
    // specified in the prototype.
    Greetr.init.prototype = Greetr.prototype;

    // Expose object to global object so it can be used. (Not worrying about if it already exists.)
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
