import { ActionTypes } from '../constants';
const { CHANGE_ACTIVECATEGORY } = ActionTypes;

const activeCategory = (state = null, { id, type }) => {
    switch (type) {
        case CHANGE_ACTIVECATEGORY:
            return state === id ? null : id;
        default:
            return state;
    }
}

export default activeCategory;