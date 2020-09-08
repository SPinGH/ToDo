import React from 'react';
import classNames from 'classnames';

import Category from '../Category/Category';

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


function Categories({ className, activeCategory, onClick }) {
    const classes = classNames(
        "categories",
        className
    )
    return (
        <div className={classes}>
            {categories.map(({ id, count, category, color }) => (
                <Category
                    key={id}
                    count={count}
                    category={category}
                    color={color}
                    onClick={() => onClick(activeCategory === id ? null : id)}
                    active={activeCategory === id} />
            ))}
        </div>
    );
}

export default Categories;