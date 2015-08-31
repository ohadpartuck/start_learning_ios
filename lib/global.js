var Mailer = require('NativeModules').RNMail;

var {
    PixelRatio,
    AsyncStorage,
    AlertIOS
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
        startLearning.fiveFacts = [{text: 'שנה שעברה, פעלו בישראל מעל 5000 סטארטאפים, השנה - 5900. גידול של 18%!', source: 'http://blogs.microsoft.co.il/msdn/2014/03/27/why-israel-is-the-startup-nation/', date: 1440164118},
            {text: '70% of founders are married when they start up, and 60% have at least one child.', source: 'http://seriousstartups.com/2014/01/28/18-surprising-facts-entrepreneurship/', date: 1440163118},
            {text: 'Fact Number 3', link: 'sadfsadf' , date: 1440163118},
            {text: 'Fact Number 4', link: 'sadfsadf' , date: 1440163118},
            {text: 'Fact Number 5', link: 'sadfsadf' , date: 1440163118},
            {text: 'Fact Number 6', link: 'sadfsadf' , date: 1440163118},
            {text: 'Fact Number 7', link: 'sadfsadf' , date: 1440163118},
            {text: 'Fact Number 8', link: 'sadfsadf' , date: 1440163118},
            {text: 'Fact Number 9', link: 'sadfsadf' , date: 1440163118},
            {text: 'Fact Number 10', link: 'sadfsadf' , date: 1440163118},
            ];

        return startLearning.fiveFacts;
    },

    _setLS: function (key, value) {
        var jsonValue = JSON.stringify(value);

        try {
            AsyncStorage.setItem(key, jsonValue, (error) => {
                if (error) {
                    console.log('Error setting user in local storage! ' + error.message);
                } else {
                    a = 1;
                    //nothing
                }
            });
            return true;
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                return false;
            }
        }

    },

    _getLS: function (key, parseJson, callback) {
        // quickie function to get a localstorage value

        parseJson = (parseJson != '') ? parseJson : false;

        var ret,rs;

           AsyncStorage.getItem(key, (error, value) => {
                if (error) {
                    console.log('Error getting user from local storage! ' + error.message);
                } else {
                    rs = JSON.parse(value);
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

                    return parseJson ? callback(JSON.parse(ret)) : callback(ret);
                }
            });
    },

    sendMail: function(){
        Mailer.mail({
            subject: 'פידבק',
            recipients: ['ohadpartuck@gmail.com'],
            body: ''
        }, (error, event) => {
            if(error) {
                AlertIOS.alert('Error', 'Could not send mail. Please send a mail to support@example.com');
            }
        });
    },


};


module.exports = Global;