var {
    PixelRatio
} = React;

var Global = {

    ON_BOARDING_MAX_FACTS: 2,
    USER_REACHED_LIMIT_KEY: 'user_has_reached_limit',

    rowWidthByDevice: function(){

        if (2 == PixelRatio.get()){
            //iPhone 4, 4S
            //iPhone 5, 5c, 5s
            //iPhone 6
            return 310;
        }else if(3 == PixelRatio.get()){
            //iPhone 6 plus
            return 400;
        }else if (3.5 == PixelRatio.get()){
            //Nexus 6
            return 450;
        }else{
            return 350;
        }
    },

    getFiveFacts: function(){
        startLearning.fiveFacts = [{text: 'שנה שעברה, פעלו בישראל מעל 5000 סטארטאפים, השנה - 5900. גידול של 18%!', source: 'http://blogs.microsoft.co.il/msdn/2014/03/27/why-israel-is-the-startup-nation/'},
            {text: '70% of founders are married when they start up, and 60% have at least one child.', source: 'http://seriousstartups.com/2014/01/28/18-surprising-facts-entrepreneurship/'},
            {text: 'Fact Number 3'},
            {text: 'Fact Number 4'},
            {text: 'Fact Number 5'},
            ];

        return startLearning.fiveFacts;
    },

    _setLS: function (key, value, useSessionStorage) {
        // quickie function to set a localstorage value

        var ls = (useSessionStorage) ? window.sessionStorage : window.localStorage;
        var jsonValue = JSON.stringify(value);

        try {
            ls.setItem(key, jsonValue);
            return true;
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                return false;
            }
        }

    },

    _getLS: function (key, parseJson, useSessionStorage) {
        // quickie function to get a localstorage value

        parseJson = (parseJson != '') ? parseJson : false;

        var ret,
            ls = (useSessionStorage) ? window.sessionStorage : window.localStorage,
            rs = ls.getItem(key);

        try {
            ret = JSON.parse(rs);
            if (ret == 'true') {
                ret = true;
            }
            if (ret == 'false') {
                ret = false;
            }
            if (parseFloat(ret) == ret) {
                ret = parseFloat(ret);
            }
        } catch (e) {
        }

        return parseJson ? JSON.parse(ret) : ret;

    },


};


module.exports = Global;