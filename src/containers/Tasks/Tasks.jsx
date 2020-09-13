import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    AddTask, DeleteTask, ChangeTask,
    AddCategory, DeleteCategory, ChangeCategory, AddCountCategory, SubtractCountCategory,
    ChangeActiveCategory, ChangeActiveFilter,
    UpdateStat,
} from '../../actions/actionCreator';

import './Tasks.scss';

import Categories from '../../components/Categories/Categories';
import Filter from '../../components/Filter/Filter';
import Input from '../../components/Input/Input';
import TaskList from '../../components/TaskList/TaskList';

function Tasks({
    tasks, categories,
    AddTask, DeleteTask, ChangeTask,
    AddCategory, DeleteCategory, ChangeCategory, AddCountCategory, SubtractCountCategory,
    ChangeActiveCategory, ChangeActiveFilter,
    UpdateStat,
    activeCategory, activeFilter,
}) {
    let filteredTasks = activeCategory ? tasks.filter(task => task.category === activeCategory) : [...tasks];
    filteredTasks = activeFilter === "all" ?
        filteredTasks :
        activeFilter === "active" ?
            filteredTasks.filter(task => task.isCompleted === false) :
            filteredTasks.filter(task => task.isCompleted === true);
    const [value, setValue] = useState("");
    const addTask = ({ key }) => {
        const category = activeCategory ? activeCategory : 1;
        if ((key === "Enter" || key === undefined) && value.length > 0) {
            AddTask({
                id: (new Date()).getTime(),
                text: value,
                category: category,
                isCompleted: false
            });
            AddCountCategory(category);
            setValue("");
        }
    };
    const onDeleteCategory = (e, id) => {
        e.stopPropagation();
        ChangeActiveCategory(null);
        DeleteCategory(id)
    };
    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="todo">

            <Categories
                categories={categories}
                className="todo__categories"
                activeCategory={activeCategory}
                onClick={ChangeActiveCategory}
                onAddClick={AddCategory}
                onDelClick={onDeleteCategory}
                onChangeClick={ChangeCategory} />

            <Filter className="todo__filter"
                activeFilter={activeFilter}
                onClick={ChangeActiveFilter} />

            <div className="todo__input">
                <Input value={value}
                    onChange={handleInputChange}
                    onKeyDown={addTask}
                    type="text"
                    placeholder="Добавить задачу ..." />
                <button onClick={addTask}>+</button>
            </div>

            <TaskList
                className="todo__list"
                tasks={filteredTasks}
                categories={categories}
                onClick={ChangeTask}
                onDelClick={(id, category, time) => {
                    SubtractCountCategory(category);
                    UpdateStat(time)
                    DeleteTask(id)
                }}
            />
        </div>
    )
}

export default connect(({ tasks, categories, activeCategory, activeFilter }) => ({
    tasks,
    categories,
    activeCategory,
    activeFilter,
}), {
    AddTask, DeleteTask, ChangeTask,
    AddCategory, DeleteCategory, ChangeCategory, AddCountCategory, SubtractCountCategory,
    ChangeActiveCategory, ChangeActiveFilter,
    UpdateStat,
})(Tasks);