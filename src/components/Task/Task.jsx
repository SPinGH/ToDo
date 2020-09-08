import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import "./Task.scss";

function Task({ id, className, isCompleted, text, color, onClick }) {
    const classes = classNames(
        "task",
        className,
        isCompleted === true ? "completed" : ""
    )
    return (
        <div className={classes}>
            <span className="task__text" onClick={() => onClick(id)}>{text}</span>
            <span className="task__category" style={{ backgroundColor: color }}></span>
        </div>
    );
}

Task.propTypes = {
    className: PropTypes.string,
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

Task.defaultProps = {
    className: "",
    id: null,
    isCompleted: false,
    text: "",
    color: "#ccc",
    onClick: () => { },
}

export default Task;