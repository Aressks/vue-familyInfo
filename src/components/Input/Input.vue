<template>
  <div class="input-wrapper">
    <input
      :value="modelValue"
      @input="updateValue"
      type="text"
      :placeholder="placeholderText"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: "",
    },
    label: {
      type: String as PropType<string>,
      default: "",
    },
    placeholderText: {
      type: String,
      default: " ",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(event: Event) {
      const input = event.target as HTMLInputElement;
      this.$emit("update:modelValue", input.value);
    },
  },
});
</script>

<style scoped>
.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 28px;
  padding-bottom: 6px;
  border: 1px solid rgba(241, 241, 241, 1);
  border-radius: 4px;
  font-size: 14px;

  font-family: Montserrat;
  box-sizing: border-box;
}

.input-wrapper input:focus {
  outline: none;
  box-shadow: none;
}

.input-wrapper label {
  position: absolute;
  top: 16px;
  bottom: 16px;
  right: 16px;
  left: 16px;

  font-size: 14px;
  color: rgba(17, 17, 17, 0.48);
  transition: all 0.3s ease;
  pointer-events: none;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  position: absolute;
  top: 8px;
  left: 16px;
  bottom: 32px;
  font-size: 13px;
  color: rgba(17, 17, 17, 0.48);
  transition: all 0.3s ease;
  pointer-events: none;
}
</style>
