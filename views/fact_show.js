'use strict';

var {
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
    Image,
    ScrollView
    } = React;

var FactShow = React.createClass({
    getInitialState() {
        return null;
    },

    componentDidMount() {

    },

    render: function() {
        return ( <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headline}>Badges to acheive near Tel Aviv</Text>
            </View>
        </ScrollView>);
    }
});

module.exports = FactShow;

