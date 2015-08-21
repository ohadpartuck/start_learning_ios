'use strict';

var {
    Text,
    View,
    Button,
    NavigatorIOS,
    TouchableHighlight,
    AlertIOS,
    PushNotificationIOS,
    ScrollView
    } = React;

var FactShow = React.createClass({

    getInitialState() {
        return {
            isLoading: true,
            currentFactNumber: 1,
            currentFact: startLearning.fiveFacts[0],
            facts: startLearning.fiveFacts,
            permissions: null,
        };
    },

    componentDidMount() {

    },

    openNativeEmailClient(){
       Global.sendMail();
        p('email')
    },

    _abandonPermissions(){
        PushNotificationIOS.abandonPermissions()
        p('after abandonPermissions')
    },

    requestPushAuthorization(){
        p('push auth')
    },

    handleScroll(){

        if (!this._userReachedHisDailyLimit()){

            this.state.currentFactNumber += 1;
            p('new fact is ' + this.state.facts[this.state.currentFactNumber - 1].text);
            // setState -> page reload
            this.setState({currentFact: this.state.facts[this.state.currentFactNumber - 1]});
            if (this.state.currentFactNumber >= Global.ON_BOARDING_MAX_FACTS) {
                this.saveThatUserReachedLimit();
            }
        }else{
            //save state that the user has reached his limit
            var that = this;
            AlertIOS.alert('No more info for you!',
                'Come back tomorrow :-) Enable push notifications for a' +
                'daily dose of our Startup info.',
                [{text: 'Sure', onPress: () => that._requestPermission()},
                    {text: 'No, thanks', onPress: () => p('nothing')}]);
        }
        p('scroll')
    },

    saveThatUserReachedLimit(){
        Global._setLS(Global.USER_REACHED_LIMIT_KEY, (new Date).getTime())
    },

    _userReachedHisDailyLimit(){
        return (Global._getLS(Global.USER_REACHED_LIMIT_KEY)) ? true : false
    },

    _showPermissions() {
        PushNotificationIOS.checkPermissions((permissions) => {
            p(permissions);
            this.setState({permissions});
        });
    },

    _requestPermission(){
        p('before requesting permission');
        var result = PushNotificationIOS.requestPermissions({alert: true});
        p('after requesting permission -- ' + result);
    },

    _onRegister(deviceToken){
        p('_onRegister');
        p(deviceToken);
        //TODO send to parse to register the device
    },

    _getFactDate(factDate){
        // TODO validate factDate is defined
        return new Date(factDate).toString();
    },

    //TODO handle this warning message
    //'You specified `onScroll` on a <ScrollView> but not ' +
    // '`scrollEventThrottle`. You will only receive one event. ' +
    //'Using `16` you get all the events but be aware that it may ' +
    //'cause frame drops, use a bigger number if you don\'t need as ' +
    //'much precision.'
    render: function() {
        PushNotificationIOS.addEventListener('register', this._onRegister);
        p('before requesting permission');
        var result = PushNotificationIOS.requestPermissions({alert: true, badge: true, sound: false});
        p('after requesting permission +++ ' +  result);
        return (
            <ScrollView style={styles.globalContainer}
                onScroll={this.handleScroll}>

                <View style={styles.FactContainer}>
                    <View>
                        <Text style={styles.headline}>
                            {this.state.currentFact.text}
                        </Text>
                        <Text style={styles.dateText}>
                            {this._getFactDate(this.state.currentFact.date)}
                        </Text>
                    </View>
                </View>

                <View style={styles.FeedBackContainer}>

                    <TouchableHighlight
                        style={styles.links}
                        onPress={this._showPermissions}>
                        <Text style={styles.links}>שלח לי עדכון יומי מעניין</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.links}
                        onPress={this.openNativeEmailClient}>
                        <Text style={styles.links}>פידבק?</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.links}
                        onPress={this._abandonPermissions}>
                        <Text style={styles.links}>בטל התראות יומיות</Text>
                    </TouchableHighlight>

                </View>
            </ScrollView>

        );
    }
});

module.exports = FactShow;

