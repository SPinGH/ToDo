import { CHANGE_ACTIVEFILTER } from '../constants';

const activeFilter = (state = "all", { id, type }) => {
    switch (type) {
        case CHANGE_ACTIVEFILTER:
            return state !== id ? id : state;
        default:
            return state;
    }
}

export default activeFilter;