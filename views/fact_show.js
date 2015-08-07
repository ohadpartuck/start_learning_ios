'use strict';

var {
    Text,
    View,
    NavigatorIOS,
    TabBarIOS,
    TouchableHighlight,
    Image,
    ScrollView
    } = React;

var FactShow = React.createClass({
    getInitialState() {
        return {
            isLoading: true
        };
    },

    componentDidMount() {

    },

    openNativeEmailClient(){
      p('emailed')
    },

    requestPushAuthorization(){
        p('push auth')
    },

    render: function() {
        return (
            <View style={styles.globalContainer}>
                <View style={styles.FactContainer}>
                    <View>
                        <Text style={styles.headline}>
                            A Million StartUps Open every year worldwide.
                        </Text>
                    </View>
                </View>

                <View style={styles.FeedBackContainer}>
                    <TouchableHighlight
                        style={styles.links}
                        onPress={this.openNativeEmailClient.bind(this)}>
                        <Text style={styles.links}>Feedback</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.links}
                        onPress={this.openNativeEmailClient.bind(this)}>
                        <Text style={styles.links}>Feedback</Text>
                    </TouchableHighlight>
                    <Text style={styles.links}>push me with intersting stuff!</Text>
                </View>
            </View>

       );
    }
});

module.exports = FactShow;

