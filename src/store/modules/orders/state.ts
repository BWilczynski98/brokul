import { DUMMY_ORDERS } from "./helpers";

export const state = {
  orders: [...DUMMY_ORDERS],
};
export type TOrdersState = typeof state;
