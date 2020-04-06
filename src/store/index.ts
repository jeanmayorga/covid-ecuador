import { combineReducers } from 'redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { loadingReducer } from './modules/loading';
import { userReducer } from './modules/user';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  user: userReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
