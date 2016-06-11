;(function(global) {
    var Countries = function(visitedCountries) {
        return new Countries.init(visitedCountries);
    }

    Countries.init = function(visitedCountries) {
        this.visited = visitedCountries || {};
    }

    var supportedCountries = [{id:"AE"},{id:"AF"},{id:"AL"},{id:"AM"},{id:"AO"},{id:"AR"},{id:"AT"},{id:"AU"},{id:"AZ"},{id:"BA"},{id:"BD"},{id:"BE"},{id:"BF"},{id:"BG"},{id:"BI"},{id:"BJ"},{id:"BN"},{id:"BO"},{id:"BR"},{id:"BS"},{id:"BT"},{id:"BW"},{id:"BY"},{id:"BZ"},{id:"CA"},{id:"CD"},{id:"CF"},{id:"CG"},{id:"CH"},{id:"CI"},{id:"CL"},{id:"CM"},{id:"CN"},{id:"CO"},{id:"CR"},{id:"CU"},{id:"CY"},{id:"CZ"},{id:"DE"},{id:"DJ"},{id:"DK"},{id:"DO"},{id:"DZ"},{id:"EC"},{id:"EE"},{id:"EG"},{id:"EH"},{id:"ER"},{id:"ES"},{id:"ET"},{id:"FK"},{id:"FI"},{id:"FJ"},{id:"FR"},{id:"GA"},{id:"GB"},{id:"GE"},{id:"GF"},{id:"GH"},{id:"GL"},{id:"GM"},{id:"GN"},{id:"GQ"},{id:"GR"},{id:"GT"},{id:"GW"},{id:"GY"},{id:"HN"},{id:"HR"},{id:"HT"},{id:"HU"},{id:"ID"},{id:"IE"},{id:"IL"},{id:"IN"},{id:"IQ"},{id:"IR"},{id:"IS"},{id:"IT"},{id:"JM"},{id:"JO"},{id:"JP"},{id:"KE"},{id:"KG"},{id:"KH"},{id:"KP"},{id:"KR"},{id:"XK"},{id:"KW"},{id:"KZ"},{id:"LA"},{id:"LB"},{id:"LK"},{id:"LR"},{id:"LS"},{id:"LT"},{id:"LU"},{id:"LV"},{id:"LY"},{id:"MA"},{id:"MD"},{id:"ME"},{id:"MG"},{id:"MK"},{id:"ML"},{id:"MM"},{id:"MN"},{id:"MR"},{id:"MW"},{id:"MX"},{id:"MY"},{id:"MZ"},{id:"NA"},{id:"NC"},{id:"NE"},{id:"NG"},{id:"NI"},{id:"NL"},{id:"NO"},{id:"NP"},{id:"NZ"},{id:"OM"},{id:"PA"},{id:"PE"},{id:"PG"},{id:"PH"},{id:"PL"},{id:"PK"},{id:"PR"},{id:"PS"},{id:"PT"},{id:"PY"},{id:"QA"},{id:"RO"},{id:"RS"},{id:"RU"},{id:"RW"},{id:"SA"},{id:"SB"},{id:"SD"},{id:"SE"},{id:"SI"},{id:"SJ"},{id:"SK"},{id:"SL"},{id:"SN"},{id:"SO"},{id:"SR"},{id:"SS"},{id:"SV"},{id:"SY"},{id:"SZ"},{id:"TD"},{id:"TF"},{id:"TG"},{id:"TH"},{id:"TJ"},{id:"TL"},{id:"TM"},{id:"TN"},{id:"TR"},{id:"TT"},{id:"TW"},{id:"TZ"},{id:"UA"},{id:"UG"},{id:"US"},{id:"UY"},{id:"UZ"},{id:"VE"},{id:"VN"},{id:"VU"},{id:"YE"},{id:"ZA"},{id:"ZM"},{id:"ZW"}];

    var mouseX, mouseY;

    $(document).mousemove(function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function createTooltip(country) {
        var svgEl = $('#' + country.id);
        var tooltip = $(document.createElement('div'))
            .addClass('tt')
            .attr('id', 'tt' + country.id)
            .css({ position: 'absolute' })
            .html('<div class="title">' + svgEl.attr('title') +'</div>'
                    + '<div class="info">Visited ' + country.dates.length + ' times.</div>');
        $('body').append(tooltip);
        tooltip.hide();
    }

    function displayHoverBox(country) {
        var tooltip = $('div#tt' + country.id);
        return function() {
            tooltip.show();
            tooltip.offset({left: mouseX - 50, top: mouseY});
        }
    }

    function removeHoverBox(country) {
        var tooltip = $('div#tt' + country.id);
        return function() {
            $('div#tt' + country.id).hide();
        }
    }

    Countries.prototype = {
        paintVisited: function() {
            this.visited.countries.forEach(function(c) {
                $('path#' + c.id + '.land').css({ fill: 'green' });
            });
        },

        addMouseHoverEffects: function() {
            this.visited.countries.forEach(function(c) {
                createTooltip(c);
                $('path#' + c.id + '.land').hover(displayHoverBox(c), removeHoverBox(c));
                $('#tt' + c.id).hover(displayHoverBox(c), removeHoverBox(c));
                $(document).keyup(function(e) {
                    if (e.which == 27) {
                        $('.tt').hide();
                    }
                });
            });
        }
    };

    Countries.init.prototype = Countries.prototype;

    global.Countries = global.Countries || Countries;
})(window);
