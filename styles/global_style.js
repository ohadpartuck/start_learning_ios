var {
    StyleSheet,
} = React;

var styles = React.StyleSheet.create({
    container: {
        flex: 1
    },
    globalContainer: {
        flex: 1,
    },
    FactContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 90 ,
    },
    FeedBackContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        flex: 10,
    },
    headline: {
        color: 'black',
        fontSize: 27,
        alignItems: 'center',
        width: Global.rowWidthByDevice(),
    },
    links: {
        color: '#12c',
        fontSize: 14,
        marginTop: 3,
        width: 400,
    },
    bottomContainer:{
        flexDirection: 'row',
        backgroundColor: 'green',
        height: 50,
    }
});


module.exports = styles;

