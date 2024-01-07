import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/CounterSlices';


const rootReducer = combineReducers({
    counter: counterReducer,

});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
