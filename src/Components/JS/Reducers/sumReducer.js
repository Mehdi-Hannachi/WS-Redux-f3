import { ADDITION } from "../ActionsTypes/actionsTypes";

const initialState = {
  sum: 0,
};

const sumRedcuer = (state = initialState, { type, val1, val2 }) => {
  switch (type) {
    case ADDITION:
      return {
        ...state,
        sum: val1 + val2,
      };
    default:
      return state;
  }
};

export default sumRedcuer;
