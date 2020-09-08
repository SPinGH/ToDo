import React from 'react';
import classNames from 'classnames';

import './Filter.scss';

const Buttons = [
    {
        id: 'all',
        text: 'Все'
    },
    {
        id: 'completed',
        text: 'Завершенные'
    },
    {
        id: 'active',
        text: 'Активные'
    },
]

function Filter({ className, activeFilter, onClick }) {
    const classes = classNames(
        "filter",
        className,
    )
    return (
        <div className={classes}>
            {Buttons.map((btn) => (
                <button className={`filter__item ${activeFilter === btn.id ? "active" : ""}`}
                    key={btn.id}
                    onClick={() => onClick(btn.id)}>{btn.text}</button>
            ))}
        </div>
    );
}

export default Filter;