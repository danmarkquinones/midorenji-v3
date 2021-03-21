export const infiniteBounceInOut = {
    hover:{
        scale:1.1,
        transition:{
            duration:0.3,
            yoyo: Infinity
        }
    }
}

export const fadeIn = {
    initial:{
        scale:0
    },
    animate:{
        scale:1
    }
}

export const fadeinLeft={
    initial:{
        x:-100
    },
    animate:{
        x:0
    }
}

export const fadeinRight={
    initial:{
        x:100
    },
    animate:{
        x:0
    }
}