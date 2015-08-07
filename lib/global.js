var {
    PixelRatio
} = React;

var Global = {

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

    deviceHeight: function(){

        if (2 == PixelRatio.get()){
            //iPhone 4, 4S
            //iPhone 5, 5c, 5s
            //iPhone 6
            return 600;
        }else if(3 == PixelRatio.get()){
            //iPhone 6 plus
            return 800;
        }else if (3.5 == PixelRatio.get()){
            //Nexus 6
            return 500;
        }else{
            return 800;
        }
    }

};


module.exports = Global;