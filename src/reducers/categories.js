import { ActionTypes } from '../constants';
import { load } from 'redux-localstorage-simple';
const { ADD_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY, ADD_COUNT_CATEGORY, SUBTRACT_COUNT_CATEGORY } = ActionTypes;

let CATEGORIES = load({ namespace: 'todo' });

if (!CATEGORIES || !CATEGORIES.categories || !CATEGORIES.categories.length) {
    CATEGORIES = {
        categories: [{
            id: 1,
            count: 0,
            name: 'Разное',
            color: '#e5768c'
        }]
    }
}

const categories = (state = CATEGORIES.categories, { id, type, count, name, color }) => {
    switch (type) {
        case ADD_CATEGORY:
            return [
                ...state, {
                    id,
                    count,
                    name,
                    color
                }
            ];
        case DELETE_CATEGORY:
            return [...state].filter(category => category.id !== id);
        case CHANGE_CATEGORY:
            return [...state].map(category => {
                if (category.id === id) {
                    return { ...category, name: name, color: color, count: count ? count : category.count };
                }
                return category;
            });
        case ADD_COUNT_CATEGORY:
            return [...state].map(category => {
                if (category.id === id) {
                    return { ...category, count: category.count + 1 };
                }
                return category;
            });
        case SUBTRACT_COUNT_CATEGORY:
            return [...state].map(category => {
                if (category.id === id) {
                    return { ...category, count: category.count - 1 };
                }
                return category;
            });
        default:
            return state;
    }
}

export default categories;