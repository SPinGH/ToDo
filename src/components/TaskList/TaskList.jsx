import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TaskList.scss';

import Task from '../../components/Task/Task';

function TaskList({ className, tasks, onClick }) {
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
                    color="red"
                    isCompleted={isCompleted}
                    onClick={onClick} />
            ))}
        </div>
    );
}

TaskList.propTypes = {
    className: PropTypes.string,
    tasks: PropTypes.array,
    onClick: PropTypes.func,
}

TaskList.defaultProps = {
    className: "",
    tasks: [],
    onClick: () => { },
}

export default TaskList;