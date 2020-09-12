import { combineReducers } from "redux";

import tasks from './tasks';
import categories from './categories';
import activeCategory from './activeCategory';
import activeFilter from './activeFilter';

const rootReducer = combineReducers({ tasks, categories, activeCategory, activeFilter });

export default rootReducer;