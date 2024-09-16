<template>
  <div class="input-container">
    <Input v-model="localName" label="Имя" />
    <Input v-model="localAge" label="Возраст" />
    <button type="button" @click="deleteChild">Удалить</button>
  </div>
</template>

<script lang="ts">
import Input from "./Input.vue";
import { PropType, ref, watch } from "vue";

export default {
  name: "ChildInput",
  components: {
    Input,
  },
  props: {
    index: {
      type: [String, Number] as PropType<string | number>,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    const localName = ref(props.name);
    const localAge = ref(props.age);

    watch(localName, (newVal) => emit("update:name", newVal));
    watch(localAge, (newVal) => emit("update:age", newVal));

    const deleteChild = () => {
      emit("delete", props.index);
    };

    return {
      localName,
      localAge,
      deleteChild,
    };
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  width: 100%;
  gap: 18px;
  color: antiquewhite;
  margin-bottom: 10px;
}

.input-container button {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-size: 14px;
  font-family: Montserrat;
  color: rgba(1, 167, 253, 1);
  margin: auto;
  margin-right: auto;

  cursor: pointer;
}
</style>
