/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
    AlertIOS,
    AppRegistry,
    Navigator,
    NavigatorIOS,
    PixelRatio,
    PushNotificationIOS,
    } = React;

window.React = React;

var Global = require('./lib/global');
window.Global = Global;

var styles = require('./styles/global_style');
var startLearning = {};

window.startLearning = startLearning;
window.p = function(msg){ console.log(msg)};
window.styles = styles;

var FactShow  = require('./views/fact_show');

var start_learning_ios = React.createClass({

    componentWillMount() {
        PushNotificationIOS.addEventListener('notification', this._onNotification);
    },

    componentWillUnmount() {
        PushNotificationIOS.removeEventListener('notification', this._onNotification);
    },

    _onNotification(notification) {
        AlertIOS.alert(
            'Notification Received',
            'Alert message: ' + notification.getMessage(),
            [{
                text: 'Dismiss',
                onPress: null,
            }]
        );
    },

    getInitialState() {
        Global.getFiveFacts(null);

        return {bootstrapped: false}
    },

    render: function() {
        return <NavigatorIOS
            style={styles.container}
            ref='nav'
            initialRoute={{
                title: 'דיבורים על סטארטאפים',
                component: FactShow,
            }}/>;
    }
});


AppRegistry.registerComponent('start_learning_ios',
    () => start_learning_ios);
