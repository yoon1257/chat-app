import { AnyAction } from "redux";
import * as t from "../types";

const initialChatState = {
  currentChatRoom: "",
};
export default function (state = initialChatState, action: AnyAction) {
  switch (action.type) {
    case t.SET_CURRENT_CHAT_ROOM:
      return {
        ...state,
        currentChatRoom: action.payload,
      };

    default:
      return { ...state };
  }
}
