import React, { useState } from 'react';

import './Tasks.scss';

import Categories from '../../components/Categories/Categories';
import Filter from '../../components/Filter/Filter';
import Input from '../../components/Input/Input';
import Task from '../../components/Task/Task';

const TASKS = [
    {
        id: 0,
        text: "lorem ipsum dolor set.",
        category: 0,
        isCompleted: false,
    },
    {
        id: 1,
        text: "lorem ipsum dolor set.",
        category: 0,
        isCompleted: false,
    },
    {
        id: 2,
        text: "lorem ipsum dolor set.",
        category: 1,
        isCompleted: false,
    },
];

function Tasks() {
    const [activeCategory, setCategory] = useState(null);
    const [activeFilter, setFilter] = useState("all");
    const [tasks, setTasks] = useState(TASKS);
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            })
        )

    }
    return (
        <div className="todo">

            <Categories className="todo__categories"
                activeCategory={activeCategory}
                onClick={setCategory} />

            <Filter className="todo__filter"
                activeFilter={activeFilter}
                onClick={setFilter} />

            <div className="todo__input">
                <Input type="text" placeholder="placeholder" />
                <button>+</button>
            </div>

            <div className="todo__list">
                {tasks.map(({ id, text, category, isCompleted }) => (
                    <Task
                        key={id}
                        id={id}
                        text={text}
                        color="red"
                        isCompleted={isCompleted}
                        onClick={toggleTask} />
                ))}
            </div>
        </div>
    )
}

export default Tasks;