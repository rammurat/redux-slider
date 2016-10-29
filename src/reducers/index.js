//load api data 
import apiData from '../api/data'

//reducer 
const slider = (state = {},action) => {
    switch(action.type){
        default:
        return state = apiData; //return loaded 
    }
};

export default slider;