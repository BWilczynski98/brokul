import {
  CommitOptions,
  createStore,
  DispatchOptions,
  Store as VuexStore,
} from "vuex";
import { counter } from "./modules/counter";
import { orders } from "./modules/orders";
import type { State } from "./modules/counter/state";
import type { Mutations } from "./modules/counter/mutations";
import type { Actions } from "./modules/counter/actions";
import type { Getters } from "./modules/counter/getters";

export const store = createStore({
  modules: { counter, orders },
});

export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
