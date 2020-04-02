import * as actions from '../actions';
import reducer from '../reducers/todos';
import fetch from 'cross-fetch';

describe('Actions', () => {
    test('should crea an asction to add a todo', () => {
        const text = 'Finish docs';
        const expectedAction = {
            id: 0,
            type: actions.ADD_TODO,
            text
        };
        expect(actions.addTodo(text)).toEqual(expectedAction)
    })
})

describe('Todos reducer', () => {
    test('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })

    test('Should handle ADD_TODO', () => {
        expect(reducer([], {
            type: actions.ADD_TODO,
            text: 'Run the tests'
          })
        ).toEqual([
          {
            text: 'Run the tests',
            completed: false,
            id:1
          }
        ])
    });        


    test('Should handle ADD_TODO_2', () => {
        expect(
            reducer(
                [
                    {
                        text: 'Use Redux',
                        completed: false,
                        id: 0
                    }
                ],
                {
                    type: actions.ADD_TODO,
                    text: 'Run the tests'
                }
            )
        ).toEqual([
            {
                text: 'Use Redux',
                completed: false,
                id: 0
            },
            {
                text: 'Run the tests',
                completed: false,
                id: 2
            }
        ])
    })
})

describe('Test fetch', () => {
    test('Fetch', async () => {
        const response = await fetch(actions.NOTES_API.GET_ALL)
        .then (response => response.json());

        expect(response).toEqual(
            [
                {"id": 1, 
                "title": "Jogging in park"
            },
                {"id": 2,
                "title": "Pick-up posters from post-office"
            }
        ])
    })
})