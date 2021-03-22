export const infiniteBounceInOut = {
    hover:{
        scale:1.1,
        transition:{
            type:"tween",
            duration:0.3,
            yoyo: Infinity,
        }
    }
}

export const fadeIn = {
    initial:{
        scale:0
    },
    animate:{
        scale:1,
    }
}

export const fadeinLeft={
    initial:{
        x:-100
    },
    animate:{
        x:0,
    }
}

export const fadeinRight={
    initial:{
        x:100
    },
    animate:{
        x:0,
    }
}

export const loaderAnimation = {
    animationOne:{
        scale:[0.5,1],
        transition:{
            yoyo:Infinity,
            duration:1,
            delay:0.3
        }
    },
    animationTwo:{
        scale:[0.5,1],
        transition:{
            yoyo:Infinity,
            duration:1,
            delay:0.6
        }
    },
    animationThree:{
        scale:[0.5,1],
        transition:{
            yoyo:Infinity,
            duration:1,
            delay:0.9
        }
    },
    animationFour:{
        scale:[0.5,1],
        x:200,
        y:200,
        transition:{
            yoyo:Infinity,
            duration:1,
            delay:0.9
        }
    }
}