var {
    PixelRatio
} = React;

var Global = {

    ON_BOARDING_MAX_FACTS: 2,

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
    }
};


module.exports = Global;