import React from 'react';
import { connect } from 'react-redux';

import './Statistic.scss';

import Title from '../../components/Title/Title'
import InlineGraph from '../../components/InlineGraph/InlineGraph'

function indexToDay(index) {
    return index - 1 === -1 ? 6 : index - 1;
}

function Statistic({ tasks, statistic }) {
    const today = new Date();
    const TASKS = tasks.filter(task => task.isCompleted === true);
    const week = TASKS.filter(task => task.time > (new Date()).setDate(today.getDate() - indexToDay(today.getDay())));
    const weekCount = statistic.week.reduce((a, b) => a + b, 0);
    const allTask = tasks.length + weekCount;
    const completedTask = week.length + weekCount
    const getCount = (index) => {
        return statistic.week[indexToDay(index)] +
            week.filter(task => { const date = (new Date(task.time)); return date.getDay() === index && date.getMonth() === today.getMonth() })?.length
    }
    const Mon = getCount(1),
        Tue = getCount(2),
        Wed = getCount(3),
        Thu = getCount(4),
        Fri = getCount(5),
        Sat = getCount(6),
        Sun = getCount(0),
        max = Math.max(...[Mon, Tue, Wed, Thu, Fri, Sat, Sun]),
        Monp = Mon / max * 100,
        Tuep = Tue / max * 100,
        Wedp = Wed / max * 100,
        Thup = Thu / max * 100,
        Frip = Fri / max * 100,
        Satp = Sat / max * 100,
        Sunp = Sun / max * 100;
    const path = `5,${105 - Monp} 75,${105 - Tuep} 145,${105 - Wedp} 215,${105 - Thup} 285,${105 - Frip} 355,${105 - Satp} 425,${105 - Sunp}`
    return (
        <div className="week-statistic">
            <div className="week-statistic__header ws-header">
                <Title className="ws-title">Задачи</Title>
                <div className="ws-header__completed">Завершенные задачи</div>
                <div className="ws-header__number">{`${completedTask}/${allTask}`}</div>
                <div className="ws-header__graph">
                    <svg width="98px" height="98px" viewBox="0 0 42 42">
                        <circle cx="21" cy="21" r="15.91549430918954" fill="#f3f3f3"></circle>
                        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ccc" strokeWidth="3">
                        </circle>
                        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#4BD7C3"
                            strokeWidth="3" strokeDasharray="100" strokeDashoffset={100 - completedTask / allTask * 100}></circle>
                    </svg>
                </div>
            </div>
            <div className="week-statistic__graph ws-graph">
                <Title className="ws-title">Прогресс</Title>
                <div className="ws-graph__graph">
                    <svg width="100%" height="100%" viewBox="0 0 430 110" xmlns="http://www.w3.org/2000/svg">

                        <line y2="105" x2="5" y1="5" x1="5" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="75" y1="5" x1="75" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="145" y1="5" x1="145" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="215" y1="5" x1="215" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="285" y1="5" x1="285" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="355" y1="5" x1="355" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="425" y1="5" x1="425" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="425" y1="105" x1="5" strokeWidth="2" stroke="#ccc" />

                        <linearGradient id="linear-gradient" x1="100%" y1="100%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="100%" stopColor="#8799ED99" />
                        </linearGradient>

                        <path id="svg_7" d={`M ${path} 425,105 5,105`}
                            fill="url(#linear-gradient)" />
                        <path id="svg_7" d={`M ${path}`} fillOpacity="null"
                            strokeOpacity="null" strokeWidth="2" stroke="#8799ED" fill="none" />

                        <ellipse stroke="#8799ED" ry="4" rx="4" cy={105 - Monp} cx="5" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy={105 - Tuep} cx="75" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy={105 - Wedp} cx="145" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy={105 - Thup} cx="215" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy={105 - Frip} cx="285" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy={105 - Satp} cx="355" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy={105 - Sunp} cx="425" fill="#fff" strokeWidth="2" />
                    </svg>
                </div>
                <div className="ws-graph__colnames">
                    <div className="ws-graph__colname">Пн</div>
                    <div className="ws-graph__colname">Вт</div>
                    <div className="ws-graph__colname">Ср</div>
                    <div className="ws-graph__colname">Чт</div>
                    <div className="ws-graph__colname">Пт</div>
                    <div className="ws-graph__colname">Сб</div>
                    <div className="ws-graph__colname">Вс</div>
                </div>
            </div>
            <div className="week-statistic__inline ws-inline">
                <Title className="ws-title">Недавно выполненные</Title>
                <div className="ws-inline__graph">
                    <InlineGraph
                        className="ws-inline__item"
                        name="Понедельник"
                        color="#C36EF4"
                        width={`${Monp}%`}
                        count={Mon} />
                    <InlineGraph
                        className="ws-inline__item"
                        name="Вторник"
                        color="#6E85D5"
                        width={`${Tuep}%`}
                        count={Tue} />
                    <InlineGraph
                        className="ws-inline__item"
                        name="Среда"
                        color="#F9BB73"
                        width={`${Wedp}%`}
                        count={Wed} />
                    <InlineGraph
                        className="ws-inline__item"
                        name="Четверг"
                        color="#70BFEA"
                        width={`${Thup}%`}
                        count={Thu} />
                    <InlineGraph
                        className="ws-inline__item"
                        name="Пятница"
                        color="#F97891"
                        width={`${Frip}%`}
                        count={Fri} />
                    <InlineGraph
                        className="ws-inline__item"
                        name="Суббота"
                        color="#94ec6c"
                        width={`${Satp}%`}
                        count={Sat} />
                    <InlineGraph
                        className="ws-inline__item"
                        name="Воскресенье"
                        color="#e4e26a"
                        width={`${Sunp}%`}
                        count={Sun} />
                </div>
            </div>
        </div>
    )
}

export default connect(({ tasks, statistic }) => ({
    tasks,
    statistic,
}))(Statistic);