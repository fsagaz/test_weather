import { CITIES } from '../constants/cities';

function getData(city){
    return {
        type: CITIES.GET_DATA,
        payload: city
    }
}



export default { getData };  
