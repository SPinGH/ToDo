import {
    ADD_TASK, DELETE_TASK, CHANGE_TASK,
    ADD_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY, ADD_COUNT_CATEGORY, SUBTRACT_COUNT_CATEGORY,
    CHANGE_ACTIVECATEGORY, CHANGE_ACTIVEFILTER,
    UPDATE_STAT
} from "../constants";

export const AddTask = ({ id, text, category, isCompleted }) => ({
    type: ADD_TASK,
    id,
    text,
    category,
    isCompleted,
});

export const DeleteTask = id => ({
    type: DELETE_TASK,
    id,
});

export const ChangeTask = id => ({
    type: CHANGE_TASK,
    id,
});



export const AddCategory = id => ({
    type: ADD_CATEGORY,
    id,
    count: 0,
    name: "Название",
    color: "#ccc",
});

export const DeleteCategory = id => ({
    type: DELETE_CATEGORY,
    id,
});

export const ChangeCategory = (id, name, color, count) => ({
    type: CHANGE_CATEGORY,
    id,
    name,
    color,
    count
});

export const AddCountCategory = id => ({
    type: ADD_COUNT_CATEGORY,
    id,
});

export const SubtractCountCategory = id => ({
    type: SUBTRACT_COUNT_CATEGORY,
    id,
});


export const ChangeActiveCategory = id => ({
    type: CHANGE_ACTIVECATEGORY,
    id,
});

export const ChangeActiveFilter = id => ({
    type: CHANGE_ACTIVEFILTER,
    id,
});


export const UpdateStat = (time) => ({
    type: UPDATE_STAT,
    time
});