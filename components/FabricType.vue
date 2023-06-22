<template>
  <div class="fabric">
    <div class="type" v-for="check of checkStore.check" :key="check.id">
      <input class="check" type="checkbox" :checked="check.checked" :on-change="check.checked = !check.checked">
      <div class="name">{{ check.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.fabric {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 260px;
  width: 235px;
  margin-top: 16px;
}
.fabric.closed {
  display: none;;
}
.check {
  appearance: none;
  width: 24px;
  height: 24px;
  background: #FBF7F4;
  border-radius: 4px;
  cursor: pointer;
}
.check:checked {
  background: url(/assets/checkbox.svg);
}
.type {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
}
.fabric::-webkit-scrollbar {
  appearance: none;
  width: 4px;
  background: #FBF7F4;
  border-radius: 6px;
}
.fabric::-webkit-scrollbar-thumb {
  width: 4px;
  background: #BF1E77;
  height: 112px;
  border-radius: 6px;
}
</style>
<script>
import { defineComponent } from 'vue';
export default defineComponent ({
  data() {
    return {

    }
  },
  methods: {
    checkChange() {
      
    }
  }
})
</script>
<script setup>
import { useCheckStore } from '/stores/CheckStore.js'
const checkStore = useCheckStore()
</script>