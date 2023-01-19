import { AnyAction } from "redux";
import * as t from "../types";

const initialUserState = {
  currentUser: null,
};
export default function (state = initialUserState, action: AnyAction) {
  switch (action.type) {
    case t.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case t.CLEAR_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return { ...state };
  }
}
