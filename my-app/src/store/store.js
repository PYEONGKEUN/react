import { createStore, applyMiddleware } from 'redux';

import loggerMiddleware from '../middleware/loggerMiddleware';

const store = createStore(modules, applyMiddleware(loggerMiddleware));

export default store;