import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reducers from './store/'

test('reducers', () => {
    let state;
    state = reducers({
        customerReducer: {
            currentCustomer: {
                firstName: 'Rachael',
                lastName: 'Derringer',
                phoneNumber: '214-480-0284',
                emailAddress: 'billy.derringer@yahoo.com',
                streetAddress: '15250 kleberg rd #27',
                city: 'Dallas',
                usState: 'TX',
                zipCode: '75253'
            }, customers: []
        },
        inventoryReducer: {
            bounce: [{
                description: 'Castle Bounce House',
                needed: 0,
                currentAvailable: 0,
                available: 3,
                price: 75
            }, {
                description: 'Jungle Bounce House',
                needed: 0,
                currentAvailable: 0,
                available: 3,
                price: 75
            }, {
                description: 'Rainbow Bounce w/Slide',
                needed: 0,
                currentAvailable: 0,
                available: 2,
                price: 90
            }, {
                description: 'Deluxe Castle w/Slide',
                needed: 0,
                currentAvailable: 0,
                available: 2,
                price: 110
            }, {description: 'Bounce Castle w/Double Slide', needed: 0, currentAvailable: 0, available: 2, price: 150}],
            chairs: [{
                description: 'White Folding Chair',
                needed: 0,
                currentAvailable: 0,
                available: 250,
                price: 4.99
            }, {description: 'Black Folding Chair', needed: 0, currentAvailable: 0, available: 250, price: 4.99}],
            tables: [{
                description: '6\' Long Folding Table',
                needed: 3,
                currentAvailable: 27,
                available: 30,
                price: 12.99
            }, {description: '60" Round Table', needed: 9, currentAvailable: 21, available: 30, price: 8.99}],
            misc: [{
                description: 'Frozen Drink - Single',
                needed: 0,
                currentAvailable: 0,
                available: 8,
                price: 35
            }, {
                description: 'Frozen Drink - Double',
                needed: 0,
                currentAvailable: 0,
                available: 20,
                price: 50
            }, {
                description: 'Popcorn Machine - Tabletop',
                needed: 0,
                currentAvailable: 0,
                available: 10,
                price: 27
            }, {description: 'Popcorn Machine - Wheeled', needed: 0, currentAvailable: 0, available: 10, price: 35}]
        },
        timeReducer: {outDate: '', outTime: '', returnDate: '', returnTime: ''}
    }, {type: 'SET_TIME', property: 'outDate', value: '2018-05-02'});
    expect(state).toEqual({
        customerReducer: {
            currentCustomer: {
                firstName: 'Rachael',
                lastName: 'Derringer',
                phoneNumber: '214-480-0284',
                emailAddress: 'billy.derringer@yahoo.com',
                streetAddress: '15250 kleberg rd #27',
                city: 'Dallas',
                usState: 'TX',
                zipCode: '75253'
            }, customers: []
        },
        inventoryReducer: {
            bounce: [{
                description: 'Castle Bounce House',
                needed: 0,
                currentAvailable: 0,
                available: 3,
                price: 75
            }, {
                description: 'Jungle Bounce House',
                needed: 0,
                currentAvailable: 0,
                available: 3,
                price: 75
            }, {
                description: 'Rainbow Bounce w/Slide',
                needed: 0,
                currentAvailable: 0,
                available: 2,
                price: 90
            }, {
                description: 'Deluxe Castle w/Slide',
                needed: 0,
                currentAvailable: 0,
                available: 2,
                price: 110
            }, {description: 'Bounce Castle w/Double Slide', needed: 0, currentAvailable: 0, available: 2, price: 150}],
            chairs: [{
                description: 'White Folding Chair',
                needed: 0,
                currentAvailable: 0,
                available: 250,
                price: 4.99
            }, {description: 'Black Folding Chair', needed: 0, currentAvailable: 0, available: 250, price: 4.99}],
            tables: [{
                description: '6\' Long Folding Table',
                needed: 3,
                currentAvailable: 27,
                available: 30,
                price: 12.99
            }, {description: '60" Round Table', needed: 9, currentAvailable: 21, available: 30, price: 8.99}],
            misc: [{
                description: 'Frozen Drink - Single',
                needed: 0,
                currentAvailable: 0,
                available: 8,
                price: 35
            }, {
                description: 'Frozen Drink - Double',
                needed: 0,
                currentAvailable: 0,
                available: 20,
                price: 50
            }, {
                description: 'Popcorn Machine - Tabletop',
                needed: 0,
                currentAvailable: 0,
                available: 10,
                price: 27
            }, {description: 'Popcorn Machine - Wheeled', needed: 0, currentAvailable: 0, available: 10, price: 35}]
        },
        timeReducer: {outDate: '2018-05-02', outTime: '', returnDate: '', returnTime: ''}
    });
})
