import { UPDATE_STAT } from '../constants';
import { load } from 'redux-localstorage-simple';

let STAT = load({ namespace: 'todo' });

if (!STAT || !STAT.statistic) {
    STAT = {
        statistic: {
            allTime: 0,
            lastUpdate: (new Date()).toDateString(),
            year: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            week: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ]
        },
    }
}

const stat = (state = STAT.statistic, { type, time }) => {
    switch (type) {
        case UPDATE_STAT: {
            if (time) {
                const TIME = new Date(time);
                const LastUpdate = new Date(state.lastUpdate);
                const Sunday = new Date(LastUpdate.setDate(LastUpdate.getDate() +
                    (LastUpdate.getDay() - 1 === -1 ? 6 : LastUpdate.getDay() - 1)));
                if (TIME > Sunday) {
                    return {
                        ...state,
                        allTime: state.allTime + 1,
                        lastUpdate: (new Date()).toDateString(),
                        year: TIME.getFullYear() > LastUpdate.getFullYear() ?
                            state.year.map(() => (0)) :
                            state.year.map((month, index) =>
                                (index === LastUpdate.getMonth() ? month + state.week.reduce((a, b) => a + b, 0) : month)),
                        week: state.week.map((day, index) =>
                            (index === (TIME.getDay() - 1 === -1 ? 6 : TIME.getDay() - 1) ? 1 : 0))
                    };
                } else {
                    return {
                        ...state, allTime: state.allTime + 1,
                        lastUpdate: (new Date()).toDateString(),
                        week: state.week.map((day, index) =>
                            (index === (TIME.getDay() - 1 === -1 ? 6 : TIME.getDay() - 1) ? day + 1 : day))
                    };
                }
            } else {
                return state;
            }
        }
        default:
            return state;
    }
}

export default stat;