import { ActionTypes } from '../constants';

const Actions = {
    AddTask: ({ id, text, category, isCompleted }) => ({
        type: ActionTypes.ADD_TASK,
        id,
        text,
        category,
        isCompleted,
    }),
    DeleteTask: id => ({
        type: ActionTypes.DELETE_TASK,
        id,
    }),
    ChangeTask: id => ({
        type: ActionTypes.CHANGE_TASK,
        id,
    }),
    AddCategory: id => ({
        type: ActionTypes.ADD_CATEGORY,
        id,
        count: 0,
        name: 'Название',
        color: '#cccccc',
    }),
    DeleteCategory: id => ({
        type: ActionTypes.DELETE_CATEGORY,
        id,
    }),
    ChangeCategory: ({ id, name, color, count }) => ({
        type: ActionTypes.CHANGE_CATEGORY,
        id,
        name,
        color,
        count
    }),
    AddCountCategory: id => ({
        type: ActionTypes.ADD_COUNT_CATEGORY,
        id,
    }),
    SubtractCountCategory: id => ({
        type: ActionTypes.SUBTRACT_COUNT_CATEGORY,
        id,
    }),
    ChangeActiveCategory: id => ({
        type: ActionTypes.CHANGE_ACTIVECATEGORY,
        id,
    }),
    ChangeActiveFilter: id => ({
        type: ActionTypes.CHANGE_ACTIVEFILTER,
        id,
    }),
    UpdateStat: time => ({
        type: ActionTypes.UPDATE_STAT,
        time
    })
}

export default Actions;