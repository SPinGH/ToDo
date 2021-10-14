import { Week, Year } from './constants';

export function declOfNum(n, textForms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) { return textForms[2]; }
    if (n1 > 1 && n1 < 5) { return textForms[1]; }
    if (n1 === 1) { return textForms[0]; }
    return textForms[2];
}

export function getDay(index) { return index - 1 === -1 ? 6 : index - 1 };

export function getStatistic(tasks, statistic) {
    const today = new Date();
    const TASKS = tasks.filter(task => task.isCompleted === true);

    const Monday = today.setDate(today.getDate() - getDay(today.getDay()));
    const Sunday = today.setDate(today.getDate() + 6 - getDay(today.getDay()));

    const weekDay = TASKS.filter(task => task.time > Monday && task.time <= Sunday);
    const weekCount = statistic.week.reduce((a, b) => a + b, 0);

    const allTaskWeek = tasks.length + weekCount;
    const completedTaskWeek = weekDay.length + weekCount;
    const completedTaskYear = TASKS.length + statistic.allTime;

    const WEEK = Week.map((day, i) => ({ ...day, count: statistic.week[i] }));

    weekDay.forEach(task => {
        WEEK[getDay((new Date(task.time)).getDay())].count += 1;
    });

    let maxWeek = Math.max(...WEEK.map(day => day.count));
    maxWeek = maxWeek === 0 ? 1 : maxWeek;

    WEEK.forEach(day => {
        day.width = day.count / maxWeek * 100;
    });

    const YEAR = Year.map((month, i) => ({ ...month, count: statistic.year[i] }));

    TASKS.forEach(task => {
        YEAR[(new Date(task.time)).getMonth()].count += 1;
    });

    let maxYear = Math.max(...YEAR.map(month => month.count));
    maxYear = maxYear === 0 ? 1 : maxYear;

    YEAR.forEach(month => {
        month.width = month.count / maxYear * 100;
    });
    return [completedTaskWeek, allTaskWeek, WEEK, completedTaskYear, YEAR];
}