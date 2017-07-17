import { CITIES } from '../constants/cities';

const initialState = [];

export function CitiesReducer(state = initialState, action) {
    switch(action.type) {
        case CITIES.GET_DATA:
            return [...state, action.payload];
        default:
            return state;
    }
}
