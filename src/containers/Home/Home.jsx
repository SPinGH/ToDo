import React from 'react';
import { connect } from 'react-redux';

import { UpdateStat } from '../../actions/actionCreator';
import FirstTime from '../../components/FirstTime/FirstTime.jsx'

import "./Home.scss";

function Home({ tasks, statistic, UpdateStat }) {
    React.useEffect(() => {
        UpdateStat();
    }, [UpdateStat])

    return (
        <>
            {statistic.allTime === 0 && tasks.length === 0 ?
                <FirstTime /> : <div>Home</div>}
        </>
    );
}

export default connect(({ tasks, statistic }) => ({
    tasks,
    statistic,
}), { UpdateStat })(Home);