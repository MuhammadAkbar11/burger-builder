import { AppActionTypes } from "../actions/types";
import AppActionsHandler from "../actions/handlers/application";

const initialState = {
  isOpenDrawer: false,
};

const { openDrawer, closeDrawer } = AppActionsHandler;

const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.OPEN_MOBILE_DRAWER:
      return openDrawer(state);
    case AppActionTypes.CLOSE_MOBILE_DRAWER:
      return closeDrawer(state);
    default:
      return state;
  }
};

export default ApplicationReducer;