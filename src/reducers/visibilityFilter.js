import { VisibilityFilters, SET_VISIBLITY_FILTER } from '../actions';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, actions) => {
    switch (actions.type) {
        case SET_VISIBLITY_FILTER:
            return actions.filter;   
        default:
            return state
    }
}

export default visibilityFilter