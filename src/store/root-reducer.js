import { combineReducers } from 'redux';

import {filterReducer} from './filters/filters-reducers';
import {positionReducer} from './positions/position-reducer';

export const rootReducer = combineReducers({
    filters: filterReducer,
    positions: positionReducer,
});