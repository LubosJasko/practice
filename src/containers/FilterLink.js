import { connect } from 'react-redux';
import { setVisibilityFilter, addLoadedTodos, getNextTodoId, NOTES_API} from '../actions'
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => filterOwnProps(dispatch, ownProps)
})

const filterOwnProps = (dispatch, ownProps) => {
    if (ownProps.filter) {
        return dispatch(setVisibilityFilter(ownProps.filter))
    }
    if (ownProps.loadData) {
        loadNewTodo(dispatch)
        return console.log('loading data ...')
    }
    return null;
}

const loadNewTodo = dispatch => (
    fetch(NOTES_API.GET_ALL)
        .then (response => response.json())
        .then((json) => {
            const loadTodos = [];
            json.forEach(el => loadTodos.push({id: getNextTodoId() , text: el.title, completed: false}))
            dispatch(addLoadedTodos(loadTodos))})
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)