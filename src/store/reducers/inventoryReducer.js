const initialState = {
    bounce:{
        basicCastle:{
            description:'Castle Bounce House',
            available:3,
            price:75.00
        },

        jungleBounce:{
            description:'Jungle Bounce House',
            available:3,
            price:75.00
        },
        rainbowBounce:{
            description:'Rainbow Bounce w/Slide',
            available:2,
            price:90.00
        },
        kingDeluxeSlide:{
            description:'Deluxe Castle w/Slide',
            available:2,
            price:110.00
        },
        castleDoubleSlide:{
            description:'Bounce Castle w/Double Slide',
            available:2,
            price:150.00
        }
    },
    chairs:{
        whiteChair:{
            description:'White Folding Chair',
            available:250,
            price:4.99
        },
        blackChair:{
            description:'Black Folding Chair',
            available:250,
            price:4.99
        }
    },
    tables:{
        rectangleTable:{
            description:'6\' Long Folding Table',
            available:30,
            price:12.99
        },
        roundTable:{
            description:'60" Round Table',
            available:30,
            price:8.99
        }
    },
    misc:{
        frozenDrinkSingle:{
            description:'Frozen Drink - Single',
            available:8,
            price:35.00
        },
        frozenDrinkDouble:{
            description:'Frozen Drink - Double',
            available:20,
            price:50.00
        },
        popcornTabletop:{
            description:'Popcorn Machine - Tabletop',
            available:10,
            price:27.00
        },
        popcornWheeled:{
            description:'Popcorn Machine - Wheeled',
            available:10,
            price:35.00
        }
    },
    currentCount:0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        default:
            return state
    }
}

export default reducer