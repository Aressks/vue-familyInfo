<template>
  <div class="container">
    <form @submit.prevent="saveData">
      <div class="personal-data">
        <p>Персональные данные</p>
        <Input
          v-model="personalData.name"
          label="Имя"
          style="margin-bottom: 10px"
        />
        <Input v-model="personalData.age" label="Возраст" />
      </div>
      <div class="children-data">
        <div class="children-management">
          <p>Дети (макс. 5)</p>
          <button
            v-show="Object.keys(children).length < 5"
            type="button"
            class="add-child-button"
            @click="addInput"
          >
            <img src="/header/24px/plus.png" alt="plus" />Добавить ребенка
          </button>
        </div>
        <div v-for="(child, key) in children" :key="key" class="child-input">
          <ChildInput
            :index="key"
            :name="child.name"
            :age="child.age"
            @update:name="updateChildName(key, $event)"
            @update:age="updateChildAge(key, $event)"
            @delete="handleDelete"
          />
        </div>
      </div>
      <p v-if="errorData" class="error-message">{{ errorMessage }}</p>
      <button type="submit" class="save-button">Сохранить</button>
    </form>
  </div>
</template>

<script>
import Input from "../Input/Input.vue";
import ChildInput from "../Input/ChildInput.vue";

export default {
  name: "Form",
  components: {
    Input,
    ChildInput,
  },
  data() {
    return {
      personalData: {
        name: "",
        age: "",
      },
      children: {},
      errorData: false,
      errorMessage: "",
    };
  },
  methods: {
    addInput() {
      if (Object.keys(this.children).length < 5) {
        const newIndex = Date.now();
        this.children[newIndex] = { name: "", age: "" };
      }
    },
    updateChildName(index, newName) {
      if (this.children[index]) {
        this.children[index].name = newName;
      }
    },
    updateChildAge(index, newAge) {
      if (this.children[index]) {
        this.children[index].age = newAge;
      }
    },
    handleDelete(index) {
      delete this.children[index];
      this.errorData = false;
    },
    saveData() {
      this.errorData = false;

      if (!this.validateData()) return;

      const dataToSave = {
        personalData: this.personalData,
        children: this.children,
      };
      localStorage.setItem("personalData", JSON.stringify(dataToSave));
      console.log(localStorage.getItem("personalData"));
      this.$router.push("/preview");
    },

    validateData() {
      // Проверка персональных данных
      if (this.personalData.age === "" || this.personalData.name === "") {
        this.errorData = true;
        this.errorMessage = "Заполните персональные данные";
        return;
      }
      const age = parseInt(this.personalData.age, 10);
      if (isNaN(age) || age <= 0) {
        this.errorData = true;
        this.errorMessage = "Возраст должен быть числом";
        return false;
      }

      // Проверка полей детей
      for (const child of Object.values(this.children)) {
        if (child.name === "" || child.age === "") {
          this.errorData = true;
          this.errorMessage = "Заполните данные о детях или нажмите удалить";
          return;
        }
      }

      for (const child of Object.values(this.children)) {
        const childAge = parseInt(child.age, 10);
        if (isNaN(childAge) || childAge <= 0) {
          this.errorData = true;
          this.errorMessage = "Возраст должен быть числом";
          return false;
        }
      }

      return true;
    },
  },
};
</script>

<style scoped>
.container {
  width: 616px;
  margin: auto;
  margin-top: 30px;
}

.personal-data {
  margin-bottom: 33px;
}

.children-management {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11px;
}

.children-management p {
  font-weight: 500;
  font-size: 16px;
  color: rgba(17, 17, 17, 1);
}

.add-child-button {
  display: flex;
  align-items: center;

  padding: 10px 20px;

  font-family: Montserrat;
  font-size: 14px;
  color: rgba(1, 167, 253, 1);

  border: 2px solid rgba(1, 167, 253, 1);
  border-radius: 100px;
  background: none;

  cursor: pointer;
}

.add-child-button img {
  margin-right: 4px;
  width: 24px;
  height: 24px;
}

.save-button {
  font-size: 14px;
  font-family: Montserrat;
  background-color: rgba(1, 167, 253, 1);
  border: none;

  color: rgba(255, 255, 255, 1);
  padding: 10px 20px;
  margin-top: 30px;
  border-radius: 100px;

  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
}
</style>
