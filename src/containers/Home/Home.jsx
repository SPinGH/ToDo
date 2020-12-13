import React from 'react';
import { connect } from 'react-redux';

import { UpdateStat } from '../../actions/actionCreator';
import FirstTime from '../../components/FirstTime/FirstTime.jsx'
import HomeStat from '../../components/HomeStat/HomeStat.jsx'

import "./Home.scss";

function Home({ tasks, statistic, UpdateStat }) {
    React.useEffect(() => {
        UpdateStat();
    }, [UpdateStat])

    const today = new Date();
    const ComletedTasksCount = tasks.filter(({ time }) => time).filter(({ time }) => (Math.floor(Math.abs(today.getTime() - time) / 86400000) === 0)).length;
    const dayOfLastTask = Math.floor(Math.abs(today.getTime() - Math.max(...tasks.map(({ time }) => (time ? time : 0)))) / 86400000);

    return (
        <>
            {statistic.allTime === 0 && tasks.length === 0 ?
                <FirstTime /> : <HomeStat
                    dayOfLastTask={dayOfLastTask}
                    ComletedTasksCount={ComletedTasksCount}
                    lastTasks={tasks.filter(({ time }) => time)}
                    firstTasks={tasks.filter(({ time }) => !time).sort((a, b) => { return a.id - b.id }).slice(0, 5)} />}
        </>
    );
}

export default connect(({ tasks, statistic }) => ({
    tasks,
    statistic,
}), { UpdateStat })(Home);