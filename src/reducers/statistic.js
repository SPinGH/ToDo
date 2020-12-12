import { UPDATE_STAT } from '../constants';
import { load } from 'redux-localstorage-simple';

let STAT = load({ namespace: 'todo' });

if (!STAT || !STAT.statistic) {
    STAT = {
        statistic: {
            allTime: 0,
            lastUpdate: (new Date()).toDateString(),
            year: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            week: [0, 0, 0, 0, 0, 0, 0]
        },
    }
}

function getDay(date) {
    return date.getDay() - 1 === -1 ? 6 : date.getDay() - 1;
}

const stat = (state = STAT.statistic, { type, time }) => {
    switch (type) {
        case UPDATE_STAT: {
            const TIME = time ? new Date(time) : new Date();
            const LastUpdate = new Date(state.lastUpdate);

            const Monday = new Date(LastUpdate.setDate(LastUpdate.getDate() - getDay(LastUpdate)));
            const Sunday = new Date(LastUpdate.setDate(LastUpdate.getDate() + 6 - getDay(LastUpdate)));

            return {
                ...state,
                allTime: time ? state.allTime + 1 : state.allTime,
                lastUpdate: (new Date()).toDateString(),
                year: TIME.getFullYear() > LastUpdate.getFullYear() ?
                    state.year.map(() => (0)) :
                    state.year.map((month, index) => (time && index === TIME.getMonth() ? month + 1 : month)),
                week: TIME > Sunday ?
                    state.week.map((day, index) => (time && index === getDay(TIME) ? 1 : 0)) :
                    TIME > Monday ?
                        state.week.map((day, index) => (time && index === getDay(TIME) ? day + 1 : day)) :
                        state.week
            };
        }
        default:
            return state;
    }
}

export default stat;