import { ADDITION } from "../ActionsTypes/actionsTypes";

export const addition = (val1 , val2) => {
  return { type: ADDITION, val1, val2 };
};
