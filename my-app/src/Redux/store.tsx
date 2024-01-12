import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/CounterSlices';
import RightSlideBarSlice from './Slices/RightSlideBarSlices';



const rootReducer = combineReducers({
    counter: counterReducer,
    rightsidebar: RightSlideBarSlice,


});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
