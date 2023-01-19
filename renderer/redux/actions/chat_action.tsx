import * as t from "../types";

export function setCurrentChatRoom(room) {
  return {
    type: t.SET_CURRENT_CHAT_ROOM,
    payload: room,
  };
}
