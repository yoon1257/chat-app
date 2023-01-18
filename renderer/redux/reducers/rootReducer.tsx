// reducer들을 하나로 결합해주는 역할
import { combineReducers } from "redux";

const rootReducer = combineReducers({});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
