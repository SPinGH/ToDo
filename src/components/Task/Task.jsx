import React from 'react';
import classNames from 'classnames';

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

export default Task;