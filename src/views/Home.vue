<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { MutationTypes } from "@/store/modules/counter/mutation-types";
import { ActionTypes } from "@/store/modules/counter/action-types";
import { Button } from "@/components/ui/button";

const store = useStore();
const counter = computed(() => store.state.counter);
const doubledCounter = computed(() => store.getters.doubledCounter);

function resetCounter() {
  store.commit(MutationTypes.SET_COUNTER, 0);
}

async function getCounter() {
  const result = await store.dispatch(ActionTypes.GET_COUNTER);
  return result;
}
</script>
<template>
  <section class="container">
    <div class="text-center h-full items-center">
      <h1 class="text-primary">Its home page</h1>
      <p>{{ counter }}</p>
      <p>{{ doubledCounter }}</p>
      <Button @click="getCounter">Increment</Button>
      <Button @click="resetCounter">Reset</Button>
    </div>
  </section>
</template>
