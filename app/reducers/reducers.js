import { combineReducers } from 'redux'
import { GET_FORECAST } from '../actions/actions'

function ReducerWeatherForecast(state = [], action) {
    switch (action.type) {
        case GET_FORECAST:
            return [action.payload.data, ...state];
    }
    return state;
}

const rootReducer = combineReducers({
    forecast: ReducerWeatherForecast
})

export default rootReducer