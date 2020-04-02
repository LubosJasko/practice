import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters, LOAD_TODOS } from '../actions';

const Footer = () => (
    <div>
        <span>Show:</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        <FilterLink loadData={LOAD_TODOS}>Load Todos</FilterLink>
    </div>
)

export default Footer;