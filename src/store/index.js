import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/index.js';

const store = createStore(rootReducer, {});
console.log(store);

export default store;
