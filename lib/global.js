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
        startLearning.fiveFacts = [{text: 'A Million StartUps Open every year worldwide.'},
            {text: '2222'},
            {text: '333'},
            {text: '444'},
            {text: '5555'},
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