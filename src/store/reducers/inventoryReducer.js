const initialState = {
    bounce:[
        {
            description:'Castle Bounce House',
            available:3,
            price:75.00
        },
        {
            description:'Jungle Bounce House',
            available:3,
            price:75.00
        },
        {
            description:'Rainbow Bounce w/Slide',
            available:2,
            price:90.00
        },
        {
            description:'Deluxe Castle w/Slide',
            available:2,
            price:110.00
        },
        {
            description:'Bounce Castle w/Double Slide',
            available:2,
            price:150.00
        }
    ],
    chairs:[
        {
            description:'White Folding Chair',
            available:250,
            price:4.99
        },
        {
            description:'Black Folding Chair',
            available:250,
            price:4.99
        }
    ],
    tables:[
        {
            description:'6\' Long Folding Table.jsx',
            available:30,
            price:12.99
        },
        {
            description:'60" Round Table.jsx',
            available:30,
            price:8.99
        }
    ],
    misc:[
        {
            description:'Frozen Drink - Single',
            available:8,
            price:35.00
        },
        {
            description:'Frozen Drink - Double',
            available:20,
            price:50.00
        },
        {
            description:'Popcorn Machine - Tabletop',
            available:10,
            price:27.00
        },
        {
            description:'Popcorn Machine - Wheeled',
            available:10,
            price:35.00
        }
    ],
    currentCount:0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        default:
            return state
    }
}

export default reducer