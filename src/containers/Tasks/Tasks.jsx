import React, { useState } from 'react';

import './Tasks.scss';

import Category from '../../components/Category/Category';
import Filter from '../../components/Filter/Filter';

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
    const [activeFilter, setFilter] = useState("all");
    return (
        <div className="todo">
            <div className="todo__categories">
                {categories.map(({ id, count, category, color }) => (
                    <Category className="todo__category"
                        key={id}
                        count={count}
                        category={category}
                        color={color}
                        onClick={() => setCategory(activeCategory === id ? null : id)}
                        active={activeCategory === id} />
                ))}
            </div>
            <Filter className="todo__filter"
                activeFilter={activeFilter}
                onClick={setFilter} />
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