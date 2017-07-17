import { combineReducers } from 'redux';
import { CitiesReducer }  from './cities.reducer';

export const RootReducer = combineReducers({
    cities: CitiesReducer
});
