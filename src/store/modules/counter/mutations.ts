import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import type { State } from "./state";

// Zabezpiecza przed nie uwzględnionymi mutacjami, przez co kod jest bardziej spójny i bezpieczny
export type Mutations<S = State> = {
  [MutationTypes.SET_COUNTER](state: S, payload: number): void;
};

// Przechowuje domyślnie wszystkie możliwe mutacje dla wybranego modułu
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COUNTER](state, payload: number) {
    state.counter = payload;
  },
};
