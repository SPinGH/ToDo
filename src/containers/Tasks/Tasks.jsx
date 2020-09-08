import React, { useState } from 'react';

import './Tasks.scss';

import Categories from '../../components/Categories/Categories';
import Filter from '../../components/Filter/Filter';

function Tasks() {
    const [activeCategory, setCategory] = useState(null);
    const [activeFilter, setFilter] = useState("all");
    return (
        <div className="todo">

            <Categories className="todo__categories"
                activeCategory={activeCategory}
                onClick={setCategory} />

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