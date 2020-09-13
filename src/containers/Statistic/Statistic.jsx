import React from 'react';
import { connect } from 'react-redux';

import './Statistic.scss';

import Title from '../../components/Title/Title';
import CircleGraph from '../../components/CircleGraph/CircleGraph';
import InlineGraphs from '../../components/InlineGraphs/InlineGraphs';
import Graph from '../../components/Graph/Graph';

function indexToDay(index) {
    return index - 1 === -1 ? 6 : index - 1;
}

function Statistic({ tasks, statistic }) {
    const today = new Date();
    const TASKS = tasks.filter(task => task.isCompleted === true);

    const week = TASKS.filter(task => task.time > (new Date()).setDate(today.getDate() - indexToDay(today.getDay())));
    const weekCount = statistic.week.reduce((a, b) => a + b, 0);

    const allTask = tasks.length + weekCount;
    const completedTaskWeek = week.length + weekCount;
    const completedTaskYear = TASKS.length + statistic.allTime;

    const getCountWeek = (index) => {
        return statistic.week[indexToDay(index)] +
            week.filter(task => (new Date(task.time)).getDay() === index)?.length
    }
    const Mon = getCountWeek(1),
        Tue = getCountWeek(2),
        Wed = getCountWeek(3),
        Thu = getCountWeek(4),
        Fri = getCountWeek(5),
        Sat = getCountWeek(6),
        Sun = getCountWeek(0),
        max = Math.max(...[Mon, Tue, Wed, Thu, Fri, Sat, Sun]),
        Monp = Mon / max * 100,
        Tuep = Tue / max * 100,
        Wedp = Wed / max * 100,
        Thup = Thu / max * 100,
        Frip = Fri / max * 100,
        Satp = Sat / max * 100,
        Sunp = Sun / max * 100;

    const getCountYear = (index) => {
        return statistic.year[index] +
            (today.getMonth() === index ? completedTaskWeek : 0) +
            TASKS.filter(task => (new Date(task.time)).getMonth() === index)?.length
    }
    const Jan = getCountYear(0),
        Feb = getCountYear(1),
        Mar = getCountYear(2),
        Apr = getCountYear(3),
        May = getCountYear(4),
        Jun = getCountYear(5),
        Jul = getCountYear(6),
        Aug = getCountYear(7),
        Sep = getCountYear(8),
        Oct = getCountYear(9),
        Nov = getCountYear(10),
        Dec = getCountYear(11),
        maxYear = Math.max(...[Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec]),
        Janp = Jan / maxYear * 100,
        Febp = Feb / maxYear * 100,
        Marp = Mar / maxYear * 100,
        Aprp = Apr / maxYear * 100,
        Mayp = May / maxYear * 100,
        Junp = Jun / maxYear * 100,
        Julp = Jul / maxYear * 100,
        Augp = Aug / maxYear * 100,
        Sepp = Sep / maxYear * 100,
        Octp = Oct / maxYear * 100,
        Novp = Nov / maxYear * 100,
        Decp = Dec / maxYear * 100;

    const WEEK = [
        {
            name: "Понедельник",
            color: "#C36EF4",
            width: Monp,
            count: Mon,
        },
        {
            name: "Вторник",
            color: "#6E85D5",
            width: Tuep,
            count: Tue,
        },
        {
            name: "Среда",
            color: "#F9BB73",
            width: Wedp,
            count: Wed,
        },
        {
            name: "Четверг",
            color: "#70BFEA",
            width: Thup,
            count: Thu,
        },
        {
            name: "Пятница",
            color: "#F97891",
            width: Frip,
            count: Fri,
        },
        {
            name: "Суббота",
            color: "#94ec6c",
            width: Satp,
            count: Sat,
        },
        {
            name: "Воскресенье",
            color: "#e4e26a",
            width: Sunp,
            count: Sun,
        },
    ]
    const WEEKDAY = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const YEAR = [
        {
            name: "Январь",
            color: "#F2C9BE",
            width: Janp,
            count: Jan,
        },
        {
            name: "Февраль",
            color: "#EBBACB",
            width: Febp,
            count: Feb,
        },
        {
            name: "Март",
            color: "#D1A9B2",
            width: Marp,
            count: Mar,
        },
        {
            name: "Апрель",
            color: "#B39BBF",
            width: Aprp,
            count: Apr,
        },
        {
            name: "Май",
            color: "#ADACCC",
            width: Mayp,
            count: May,
        },
        {
            name: "Июнь",
            color: "#A1BFDB",
            width: Junp,
            count: Jun,
        },
        {
            name: "Июль",
            color: "#96CCDC",
            width: Julp,
            count: Jul,
        },

        {
            name: "Август",
            color: "#84C2B4",
            width: Augp,
            count: Aug,
        },
        {
            name: "Сентябрь",
            color: "#A9D193",
            width: Sepp,
            count: Sep,
        },
        {
            name: "Октябрь",
            color: "#D5E5AB",
            width: Octp,
            count: Oct,
        },

        {
            name: "Ноябрь",
            color: "#F8EEB0",
            width: Novp,
            count: Nov,
        },
        {
            name: "Декабрь",
            color: "#F6BD6A",
            width: Decp,
            count: Dec,
        },
    ]
    const MONTHNAME = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
    return (
        <>
            <div className="week-statistic">
                <div className="week-statistic__header ws-header">
                    <Title className="ws-title">Задачи за неделю</Title>
                    <div className="ws-header__completed">Завершенные задачи</div>
                    <div className="ws-header__number">{`${completedTaskWeek}/${allTask}`}</div>
                    <CircleGraph className="ws-header__graph" procent={100 - completedTaskWeek / allTask * 100} />
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
}))(Statistic);