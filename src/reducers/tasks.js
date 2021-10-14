import { ActionTypes } from '../constants';
import { load } from 'redux-localstorage-simple';
const { ADD_TASK, DELETE_TASK, CHANGE_TASK } = ActionTypes;

let TASKS = load({ namespace: 'todo' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: [],
    }
}

const tasks = (state = TASKS.tasks, { id, type, text, category, isCompleted }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    category,
                    isCompleted,
                }
            ];
        case DELETE_TASK:
            return [...state].filter(task => task.id !== id);
        case CHANGE_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    if (task.isCompleted) {
                        return { ...task, isCompleted: false, time: undefined };
                    } else {
                        return { ...task, isCompleted: true, time: (new Date()).getTime() };
                    }
                }
                return task;
            });
        default:
            return state;
    }
}

export default tasks;