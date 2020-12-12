import React from 'react';
import { connect } from 'react-redux';

import './Statistic.scss';

import { UpdateStat } from '../../actions/actionCreator';

import Title from '../../components/Title/Title';
import CircleGraph from '../../components/CircleGraph/CircleGraph';
import InlineGraphs from '../../components/InlineGraphs/InlineGraphs';
import Graph from '../../components/Graph/Graph';

function getDay(index) {
    return index - 1 === -1 ? 6 : index - 1;
}

function Statistic({ tasks, statistic, UpdateStat }) {
    React.useEffect(() => {
        UpdateStat();
    }, [UpdateStat])

    const today = new Date();
    const TASKS = tasks.filter(task => task.isCompleted === true);

    const Monday = today.setDate(today.getDate() - getDay(today.getDay()));
    const Sunday = today.setDate(today.getDate() + 6 - getDay(today.getDay()));

    const weekDay = TASKS.filter(task => task.time > Monday && task.time <= Sunday);
    const weekCount = statistic.week.reduce((a, b) => a + b, 0);

    const allTaskWeek = tasks.length + weekCount;
    const completedTaskWeek = weekDay.length + weekCount;
    const completedTaskYear = TASKS.length + statistic.allTime;

    const WEEK = [
        {
            name: "Понедельник",
            color: "#C36EF4",
            width: 0,
            count: 0,
        },
        {
            name: "Вторник",
            color: "#6E85D5",
            width: 0,
            count: 0,
        },
        {
            name: "Среда",
            color: "#F9BB73",
            width: 0,
            count: 0,
        },
        {
            name: "Четверг",
            color: "#70BFEA",
            width: 0,
            count: 0,
        },
        {
            name: "Пятница",
            color: "#F97891",
            width: 0,
            count: 0,
        },
        {
            name: "Суббота",
            color: "#94ec6c",
            width: 0,
            count: 0,
        },
        {
            name: "Воскресенье",
            color: "#e4e26a",
            width: 0,
            count: 0,
        },
    ]
    const WEEKDAY = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

    for (let i = 0; i < 7; i++) {
        WEEK[i].count = statistic.week[i];
    }
    weekDay.forEach(task => {
        WEEK[getDay((new Date(task.time)).getDay())].count += 1;
    });
    let maxWeek = Math.max(...WEEK.map(day => day.count));
    maxWeek = maxWeek === 0 ? 1 : maxWeek;
    WEEK.forEach(day => {
        day.width = day.count / maxWeek * 100;
    });


    const YEAR = [
        {
            name: "Январь",
            color: "#4887C6",
            width: 0,
            count: 0,
        },
        {
            name: "Февраль",
            color: "#B64066",
            width: 0,
            count: 0,
        },
        {
            name: "Март",
            color: "#8AA2B5",
            width: 0,
            count: 0,
        },
        {
            name: "Апрель",
            color: "#D88F93",
            width: 0,
            count: 0,
        },
        {
            name: "Май",
            color: "#B5C79C",
            width: 0,
            count: 0,
        },
        {
            name: "Июнь",
            color: "#7F84B7",
            width: 0,
            count: 0,
        },
        {
            name: "Июль",
            color: "#C76390",
            width: 0,
            count: 0,
        },

        {
            name: "Август",
            color: "#7BAC79",
            width: 0,
            count: 0,
        },
        {
            name: "Сентябрь",
            color: "#E7C632",
            width: 0,
            count: 0,
        },
        {
            name: "Октябрь",
            color: "#C76733",
            width: 0,
            count: 0,
        },

        {
            name: "Ноябрь",
            color: "#54643D",
            width: 0,
            count: 0,
        },
        {
            name: "Декабрь",
            color: "#8D8D8D",
            width: 0,
            count: 0,
        },
    ]
    const MONTHNAME = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
    for (let i = 0; i < 12; i++) {
        YEAR[i].count = statistic.year[i];
    }
    TASKS.forEach(task => {
        YEAR[(new Date(task.time)).getMonth()].count += 1;
    });
    let maxYear = Math.max(...YEAR.map(month => month.count));
    maxYear = maxYear === 0 ? 1 : maxYear;
    YEAR.forEach(month => {
        month.width = month.count / maxYear * 100;
    });
    return (
        <>
            <div className="week-statistic">
                <div className="week-statistic__header ws-header">
                    <Title className="ws-title">Задачи за неделю</Title>
                    <div className="ws-header__completed">Завершенные задачи</div>
                    <div className="ws-header__number">{`${completedTaskWeek}/${allTaskWeek}`}</div>
                    <CircleGraph className="ws-header__graph" procent={completedTaskWeek / allTaskWeek * 100} />
                </div>
                <Graph className="week-statistic__graph" title="Прогресс" data={WEEK} sign={WEEKDAY} />
                <InlineGraphs className="week-statistic__inline" title="Недавно выполненные" data={WEEK} />
            </div>
            <div className="week-statistic">
                <div className="week-statistic__header ws-header">
                    <Title className="ws-title">Задачи за год</Title>
                    <div className="ws-header__completed">Завершенные задачи</div>
                    <div className="ws-header__number">{`${completedTaskYear}/${tasks.length + statistic.allTime}`}</div>
                </div>
                <Graph className="week-statistic__graph" title="Прогресс" data={YEAR} sign={MONTHNAME} />
                <InlineGraphs className="week-statistic__inline" title="Недавно выполненные" data={YEAR} />
            </div>
        </>
    )
}

export default connect(({ tasks, statistic }) => ({
    tasks,
    statistic,
}), { UpdateStat })(Statistic);