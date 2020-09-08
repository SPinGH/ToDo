import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Category.scss';

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
}

function Category({ count, name, color, className, active, onClick }) {
    const classes = classNames(
        "category",
        className,
        { active },
    );
    return (
        <div className={classes} onClick={onClick}>
            <div className="category__icon" style={{ backgroundColor: color }}></div>
            <div className="category__tasks">{count} {declOfNum(count, ["Задача", "Задачи", "Задач"])}</div>
            <div className="category__name">{name}</div>
        </div>
    )
}

Category.propTypes = {
    className: PropTypes.string,
    count: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
}

Category.defaultProps = {
    className: "",
    count: 0,
    name: "Зазное",
    color: "#ccc",
    active: false,
    onClick: () => { },
}

export default Category;