import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TaskList.scss';

import Task from '../../components/Task/Task';

function TaskList({ className, tasks, categories, onClick, onDelClick }) {
    const classes = classNames(
        "taskList",
        className,
    )
    return (
        <div className={classes}>
            {tasks.map(({ id, text, category, isCompleted }) => (
                <Task
                    key={id}
                    id={id}
                    text={text}
                    category={categories.find(ctg => ctg.id === category)}
                    isCompleted={isCompleted}
                    onClick={onClick}
                    onDelClick={onDelClick} />
            ))}
        </div>
    );
}

TaskList.propTypes = {
    className: PropTypes.string,
    tasks: PropTypes.array,
    categories: PropTypes.array,
    onClick: PropTypes.func,
}

TaskList.defaultProps = {
    className: "",
    tasks: [],
    categories: [],
    onClick: () => { },
}

export default TaskList;