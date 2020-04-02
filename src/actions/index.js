let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODOS = 'ADD_TODOS';
export const SET_VISIBLITY_FILTER = 'SET_VISIBLITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const LOAD_TODOS = 'GET_TODOS';
export const REQUEST_POST = 'REQUEST_POST';

export const NOTES_API = {
    GET_ALL:  'http://private-9aad-note10.apiary-mock.com/notes'
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const addTodo = text => ({
    type: ADD_TODO,
    id: getNextTodoId(),
    text
})

export const addLoadedTodos = todos => ({
    type: LOAD_TODOS,
    todos
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBLITY_FILTER,
    filter
})

export const requestPost = () => ({
    type: REQUEST_POST
})

export const getNextTodoId = () => (
    nextTodoId++
)

