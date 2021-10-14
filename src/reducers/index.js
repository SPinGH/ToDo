import { combineReducers } from 'redux';

import tasks from './tasks';
import categories from './categories';
import activeCategory from './activeCategory';
import activeFilter from './activeFilter';
import statistic from './statistic';

const rootReducer = combineReducers({ tasks, categories, activeCategory, activeFilter, statistic });

export default rootReducer;