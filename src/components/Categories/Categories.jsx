import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Category from '../Category/Category';

import './Categories.scss';


function Categories({ className, categories, activeCategory, onClick, onAddClick, onDelClick, onChangeClick }) {
    const classes = classNames(
        'categories',
        className
    );

    const handleClickAdd = () => onAddClick((new Date()).getTime());

    return (
        <div className={classes}>
            {categories.map(({ id, count, name, color }) => (
                <Category
                    id={id}
                    key={id}
                    count={count}
                    name={name}
                    color={color}
                    onClick={onClick}
                    active={activeCategory === id}
                    onDelClick={onDelClick}
                    onChangeClick={onChangeClick} />
            ))}
            <div className='categories__add' onClick={handleClickAdd}><span>+</span></div>
        </div>
    );
}

Categories.propTypes = {
    className: PropTypes.string,
    categories: PropTypes.array,
    activeCategory: PropTypes.number,
    onClick: PropTypes.func,
}

Categories.defaultProps = {
    className: '',
    categories: [],
    activeCategory: null,
    onClick: () => { },
}

export default Categories;