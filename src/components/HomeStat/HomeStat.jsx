import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { declOfNum } from '../../services.js';

import './HomeStat.scss';

function HomeStat({ className, dayOfLastTask, ComletedTasksCount, lastTasks, firstTasks }) {
    const classes = classNames(
        'home',
        className
    );

    return (
        <div className={classes}>
            <div className='home__lastTask'>
                {dayOfLastTask > 0 ?
                    dayOfLastTask > 365 ?
                        `Вы давно не выполняли задачи` :
                        `Вы ${dayOfLastTask} ${declOfNum(dayOfLastTask, ['день', 'дня', 'дней'])} не выполняли задач` :
                    `Сегодня вы выполнили ${ComletedTasksCount} ${declOfNum(ComletedTasksCount, ['задачу', 'задачи', 'задач'])}`}
            </div>
            <div className='home__stat stat'>
                <div className='stat__lastTasks'>
                    <div className='stat__title'>Последние выполненные задачи</div>
                    {lastTasks.map(({ id, text }) => (
                        <div key={id} className='stat__item'>
                            {text}
                        </div>))}
                </div>
                <div className='stat__firstTasks'>
                    <div className='stat__title'>Самые ранние задачи</div>
                    {firstTasks.map(({ id, text }) => (
                        <div key={id} className='stat__item'>
                            {text}
                        </div>))}
                </div>
            </div>
        </div>
    );
}

HomeStat.propTypes = {
    className: PropTypes.string,
    dayOfLastTask: PropTypes.number.isRequired,
    ComletedTasksCount: PropTypes.number,
    lastTasks: PropTypes.array,
    firstTasks: PropTypes.array,
}

HomeStat.defaultProps = {
    className: '',
    ComletedTasksCount: 0,
    lastTasks: [],
    firstTasks: [],
}

export default HomeStat;