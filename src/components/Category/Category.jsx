import React from 'react';
import classNames from 'classnames';

import './Category.scss';

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
}

function Category({ count, category, color, className, active, onClick }) {
    const classes = classNames(
        "category-todo",
        className,
        { active },
    );
    return (
        <div className={classes} onClick={onClick}>
            <div className="category-todo__icon" style={{ backgroundColor: color }}></div>
            <div className="category-todo__tasks">{count} {declOfNum(count, ["Задача", "Задачи", "Задач"])}</div>
            <div className="category-todo__name">{category}</div>
        </div>
    )
}

export default Category;