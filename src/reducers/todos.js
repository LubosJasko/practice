import {ADD_TODO, TOGGLE_TODO, LOAD_TODOS,getNextTodoId} from '../actions';

const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
        return [
            ...state,
            {
                id: action.id || getNextTodoId(),
                text: action.text,
                completed: false
            }
        ];
        case LOAD_TODOS:
            state.concat(action.todos)
            return state.concat(action.todos);
        case TOGGLE_TODO:
            return state.map(todo => 
                todo.id === action.id ? { ...todo, completed: !todo.completed }
                : todo
                );
        default:
            return state;
    }
}

export default todos