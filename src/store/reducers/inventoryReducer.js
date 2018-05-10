const initialState = {

    subtotal: 0,
    bounce:[
        {
            description:'Castle Bounce House',
            needed:0,
            currentAvailable:3,
            available:3,
            price:75
        },
        {
            description:'Jungle Bounce House',
            needed:0,
            currentAvailable:3,
            available:3,
            price:75
        },
        {
            description:'Rainbow Bounce w/Slide',
            needed:0,
            currentAvailable:2,
            available:2,
            price:90
        },
        {
            description:'Deluxe Castle w/Slide',
            needed:0,
            currentAvailable:2,
            available:2,
            price:110
        },
        {
            description:'Bounce Castle w/Double Slide',
            needed:0,
            currentAvailable:2,
            available:2,
            price:150
        }
    ],
    chairs:[
        {
            description:'White Folding Chair',
            needed:0,
            currentAvailable:250,
            available:250,
            price:4

        },
        {
            description:'Black Folding Chair',
            needed:0,
            currentAvailable:250,
            available:250,
            price:4
        }
    ],
    tables:[
        {
            description:'6\' Long Folding Table',
            needed: 0,
            currentAvailable:30,
            available:30,
            price:12
        },
        {
            description: '60" Round Table',
            needed: 0,
            currentAvailable:30,
            available: 30,
            price: 8
        }
    ],
    misc:[
        {
            description:'Frozen Drink - Single',
            needed:0,
            currentAvailable:8,
            available:8,
            price:35
        },
        {
            description:'Frozen Drink - Double',
            needed:0,
            currentAvailable:20,
            available:20,
            price:50
        },
        {
            description:'Popcorn Machine - Tabletop',
            needed:0,
            currentAvailable:10,
            available:10,
            price:27
        },
        {
            description:'Popcorn Machine - Wheeled',
            needed:0,
            currentAvailable:10,
            available:10,
            price:35
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

            const add = state[id][action.position].needed < state[id][action.position].available ?
                state.subtotal + state[id][action.position].price : state.subtotal
            const subtract = state[id][action.position].needed > 0 ?
                state.subtotal - state[id][action.position].price : state.subtotal
            let subtotal = action.operation === "plus" ? add : subtract

            return {
                ...state,
                [id]:inventory,
                subtotal: subtotal
            }
        case  'UPDATE_AVAILABILITY':
            const bounce = state.bounce.map(item => {
                return {
                    ...item,
                    needed : 0,
                    available : (item.available - item.needed),
                    currentAvailable : 0
                }
            })
            const chairs = state.chairs.map(item => {
                return {
                    ...item,
                    needed : 0,
                    available : (item.available - item.needed),
                    currentAvailable : 0
                }
            })
            const tables = state.tables.map(item => {
                return {
                    ...item,
                    needed : 0,
                    available : (item.available - item.needed),
                    currentAvailable : 0
                }
            })
            const misc = state.misc.map(item => {
                return {
                    ...item,
                    needed : 0,
                    available : (item.available - item.needed),
                    currentAvailable : 0
                }
            })
            return{
                ...(state),
                subtotal : 0,
                bounce,
                chairs,
                tables,
                misc
            }
        default:
            return state
    }
}

export default reducer