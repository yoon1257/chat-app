// reducer들을 하나로 결합해주는 역할
import { combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  user,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
