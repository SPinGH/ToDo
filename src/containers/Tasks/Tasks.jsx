import React, { useState } from 'react';

import './Tasks.scss';

import Category from '../../components/Category/Category';

const categories = [
    {
        id: 1,
        count: 3,
        category: "Разное",
        color: "#e5768c"
    },
    {
        id: 2,
        count: 5,
        category: "Работа",
        color: "#71dc79"
    },
    {
        id: 3,
        count: 31,
        category: "Учёба",
        color: "#f8ed56"
    },
]

function Tasks() {
    const [activeCategory, setCategory] = useState(null);
    return (
        <div className="todo">
            <div className="todo__categories">
                {categories.map((category) => (
                    <Category className="todo__category"
                        key={category.id}
                        count={category.count}
                        category={category.category}
                        color={category.color}
                        onClick={() => setCategory(activeCategory === category.id ? null : category.id)}
                        active={activeCategory === category.id} />
                ))}
            </div>
            <div className="todo__filter">
                <button className="todo__filter-item active">Все</button>
                <button className="todo__filter-item">Завершенные</button>
                <button className="todo__filter-item">Активные</button>
            </div>
            <div className="todo__input">
                <input type="text" placeholder="placeholder" />
                <button>+</button>
            </div>
            <div className="todo__list">
                <div className="todo__task varia">
                    <input type="checkbox" id="check1" />
                    <label htmlFor="check1">Lorem ipsum dolor sit.</label>
                </div>
                <div className="todo__task varia">
                    <input type="checkbox" id="check2" />
                    <label htmlFor="check2">Lorem ipsum dolor sit.</label>
                </div>
                <div className="todo__task work">
                    <input type="checkbox" id="check3" />
                    <label htmlFor="check3">Lorem ipsum dolor sit.</label>
                </div>
            </div>
        </div>
    )
}

export default Tasks;