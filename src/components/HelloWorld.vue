<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

defineProps<{ msg: string }>();

const store = useStore();
const count = computed(() => store.state.CounterModule.count);

function setDispatch() {
  store.dispatch("incrementCounter");
}
</script>

<template>
  <h1 class="flex items-center justify-center text-3xl text-white my-5">
    {{ msg }}
  </h1>

  <div class="flex items-center justify-center">
    <button type="button" @click="setDispatch">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p>Click on the Vite and Vue logos to learn more</p>
</template>
