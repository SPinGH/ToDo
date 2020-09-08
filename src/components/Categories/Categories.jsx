import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Categories.scss';

import Category from '../Category/Category';

const categories = [
    {
        id: 1,
        count: 3,
        name: "Разное",
        color: "#e5768c"
    },
    {
        id: 2,
        count: 5,
        name: "Работа",
        color: "#71dc79"
    },
    {
        id: 3,
        count: 31,
        name: "Учёба",
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
            {categories.map(({ id, count, name, color }) => (
                <Category
                    key={id}
                    count={count}
                    name={name}
                    color={color}
                    onClick={() => onClick(activeCategory === id ? null : id)}
                    active={activeCategory === id} />
            ))}
        </div>
    );
}

Categories.propTypes = {
    className: PropTypes.string,
    activeCategory: PropTypes.number,
    onClick: PropTypes.func,
}

Categories.defaultProps = {
    className: "",
    activeCategory: null,
    onClick: () => { },
}

export default Categories;