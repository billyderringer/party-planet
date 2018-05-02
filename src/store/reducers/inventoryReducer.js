const initialState = {
    bounce:[
        {
            description:'Castle Bounce House',
            needed:0,
            currentAvailable:0,
            available:3,
            price:75.00
        },
        {
            description:'Jungle Bounce House',
            needed:0,
            currentAvailable:0,
            available:3,
            price:75.00
        },
        {
            description:'Rainbow Bounce w/Slide',
            needed:0,
            currentAvailable:0,
            available:2,
            price:90.00
        },
        {
            description:'Deluxe Castle w/Slide',
            needed:0,
            currentAvailable:0,
            available:2,
            price:110.00
        },
        {
            description:'Bounce Castle w/Double Slide',
            needed:0,
            currentAvailable:0,
            available:2,
            price:150.00
        }
    ],
    chairs:[
        {
            description:'White Folding Chair',
            needed:0,
            currentAvailable:0,
            available:250,
            price:4.99

        },
        {
            description:'Black Folding Chair',
            needed:0,
            currentAvailable:0,
            available:250,
            price:4.99
        }
    ],
    tables:[
        {
            description:'6\' Long Folding Table',
            needed: 0,
            currentAvailable:0,
            available:30,
            price:12.99
        },
        {
            description: '60" Round Table',
            needed: 0,
            currentAvailable:0,
            available: 30,
            price: 8.99
        }
        ],
    misc:[
        {
            description:'Frozen Drink - Single',
            needed:0,
            currentAvailable:0,
            available:8,
            price:35.00
        },
        {
            description:'Frozen Drink - Double',
            needed:0,
            currentAvailable:0,
            available:20,
            price:50.00
        },
        {
            description:'Popcorn Machine - Tabletop',
            needed:0,
            currentAvailable:0,
            available:10,
            price:27.00
        },
        {
            description:'Popcorn Machine - Wheeled',
            needed:0,
            currentAvailable:0,
            available:10,
            price:35.00
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_NEEDED_PROPERTY':
            const id = action.identity
            const inventory = state[id].map((item,i) => {
                if(i === action.position){
                    return {
                        ...(state[id][i]),
                        needed:action.count,
                        currentAvailable: action.currentAvailable
                    }
                }
                return item
            })
            return {
                ...state,
                [id]:inventory
            }
        default:
            return state
    }
}

export default reducer