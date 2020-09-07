import React from 'react';

import './Tasks.scss';

function Tasks() {
    return (
        <div className="todo">
            <div className="todo__categories">
                <div className="todo__category category-todo">
                    <div className="category-todo__icon varia"></div>
                    <div className="category-todo__tasks">3 Задачи</div>
                    <div className="category-todo__name">Разное</div>
                </div>
                <div className="todo__category category-todo">
                    <div className="category-todo__icon work"></div>
                    <div className="category-todo__tasks">5 Задач</div>
                    <div className="category-todo__name">Работа</div>
                </div>
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