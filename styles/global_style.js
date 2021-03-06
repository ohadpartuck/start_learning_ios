var {
    StyleSheet,
} = React;

var styles = React.StyleSheet.create({
    container: {
        flex: 1
    },
    globalContainer: {
        //backgroundColor: '#F4F4F4',
        backgroundColor: 'white',

        flex: 1,
    },
    FactContainer: {

        paddingTop: 100,
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 90,
    },
    FeedBackContainer: {
        paddingTop: 100,
        paddingLeft: 30,
        paddingRight: 30,
        flex: 10,
    },
    headline: {
        color: 'black',
        fontSize: 27,
        alignItems: 'center',
        textAlign: 'center',
        width: Global.rowWidthByDevice(),
    },
    dateText: {
        color: 'gray',
        fontSize: 13,
        alignItems: 'flex-end',
        textAlign: 'right',
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

