/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    Navigator,
    NavigatorIOS,
    PixelRatio,
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

  getInitialState() {
    Global.getFiveFacts(null);

    return {bootstrapped: false}
  },

  render: function() {
    return <NavigatorIOS
        style={styles.container}
        ref='nav'
        initialRoute={{
          title: 'Start Learning',
          component: FactShow,
        }}/>;
  }
});


AppRegistry.registerComponent('start_learning_ios',
    () => start_learning_ios);
