import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Task from '../../components/Task/Task';

import './TaskList.scss';

function TaskList({ className, tasks, categories, onClick, onDelClick }) {
    const classes = classNames(
        'taskList',
        className,
    );

    return (
        <div className={classes}>
            {tasks.map(({ id, text, category, isCompleted, time }) => (
                <Task
                    key={id}
                    id={id}
                    text={text}
                    category={categories.find(ctg => ctg.id === category)}
                    isCompleted={isCompleted}
                    time={time}
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
    className: '',
    tasks: [],
    categories: [],
    onClick: () => { },
}

export default TaskList;