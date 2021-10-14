import React, { useState } from 'react';
import { connect } from 'react-redux';

import Actions from '../../actions/actionCreator';

import Categories from '../../components/Categories/Categories';
import Filter from '../../components/Filter/Filter';
import Input from '../../components/Input/Input';
import TaskList from '../../components/TaskList/TaskList';

import './Tasks.scss';


function Tasks(props) {
    const { tasks, categories, activeCategory, activeFilter } = props;

    let filteredTasks = activeCategory ? tasks.filter(task => task.category === activeCategory) : [...tasks];
    filteredTasks = activeFilter === 'all' ?
        filteredTasks :
        activeFilter === 'active' ?
            filteredTasks.filter(task => task.isCompleted === false) :
            filteredTasks.filter(task => task.isCompleted === true);

    const [value, setValue] = useState('');

    const addTask = ({ key }) => {
        const category = activeCategory ? activeCategory : 1;
        if ((key === 'Enter' || key === undefined) && value.length > 0) {
            props.AddTask({
                id: (new Date()).getTime(),
                text: value,
                category: category,
                isCompleted: false
            });
            props.AddCountCategory(category);
            setValue('');
        }
    };

    const onDeleteCategory = (e, id) => {
        e.stopPropagation();
        props.ChangeActiveCategory(null);
        props.DeleteCategory(id)
    };

    const handleInputChange = e => setValue(e.target.value);

    const handleDelClick = (id, category, time) => {
        props.SubtractCountCategory(category);
        props.UpdateStat(time);
        props.DeleteTask(id);
    }

    return (
        <div className='todo'>

            <Categories
                categories={categories}
                className='todo__categories'
                activeCategory={activeCategory}
                onClick={props.ChangeActiveCategory}
                onAddClick={props.AddCategory}
                onDelClick={onDeleteCategory}
                onChangeClick={props.ChangeCategory} />

            <Filter className='todo__filter'
                activeFilter={activeFilter}
                onClick={props.ChangeActiveFilter} />

            <div className='todo__input'>
                <Input value={value}
                    onChange={handleInputChange}
                    onKeyDown={addTask}
                    type='text'
                    placeholder='Добавить задачу ...' />
                <button onClick={addTask}>+</button>
            </div>

            <TaskList
                className='todo__list'
                tasks={filteredTasks}
                categories={categories}
                onClick={props.ChangeTask}
                onDelClick={handleDelClick}
            />
        </div>
    )
}

export default connect(({ tasks, categories, activeCategory, activeFilter }) => ({
    tasks,
    categories,
    activeCategory,
    activeFilter,
}), Actions)(Tasks);