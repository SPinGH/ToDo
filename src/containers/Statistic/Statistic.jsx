import React from 'react';
import { connect } from 'react-redux';

import { WeekDay, MonthName } from '../../constants';
import { getStatistic } from '../../services';
import Actions from '../../actions/actionCreator';

import Title from '../../components/Title/Title';
import CircleGraph from '../../components/CircleGraph/CircleGraph';
import InlineGraphs from '../../components/InlineGraphs/InlineGraphs';
import Graph from '../../components/Graph/Graph';

import './Statistic.scss';

function Statistic({ tasks, statistic, UpdateStat }) {
    React.useEffect(() => {
        UpdateStat();
    }, [UpdateStat])

    const [completedTaskWeek, allTaskWeek, WEEK, completedTaskYear, YEAR] = getStatistic(tasks, statistic);

    return (
        <>
            <div className='week-statistic'>
                <div className='week-statistic__header ws-header'>
                    <Title className='ws-title'>Задачи за неделю</Title>
                    <div className='ws-header__completed'>Завершенные задачи</div>
                    <div className='ws-header__number'>{`${completedTaskWeek}/${allTaskWeek}`}</div>
                    <CircleGraph className='ws-header__graph' procent={completedTaskWeek / allTaskWeek * 100} />
                </div>
                <Graph className='week-statistic__graph' title='Прогресс' data={WEEK} sign={WeekDay} />
                <InlineGraphs className='week-statistic__inline' title='Недавно выполненные' data={WEEK} />
            </div>
            <div className='week-statistic'>
                <div className='week-statistic__header ws-header'>
                    <Title className='ws-title'>Задачи за год</Title>
                    <div className='ws-header__completed'>Завершенные задачи</div>
                    <div className='ws-header__number'>{`${completedTaskYear}/${tasks.length + statistic.allTime}`}</div>
                </div>
                <Graph className='week-statistic__graph' title='Прогресс' data={YEAR} sign={MonthName} />
                <InlineGraphs className='week-statistic__inline' title='Недавно выполненные' data={YEAR} />
            </div>
        </>
    )
}

export default connect(({ tasks, statistic }) => ({
    tasks,
    statistic,
}), { UpdateStat: Actions.UpdateStat })(Statistic);