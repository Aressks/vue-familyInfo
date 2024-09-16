<template>
  <div class="container">
    <div class="personal-data-container">
      <p>Персональные данные</p>
      <div v-if="formData" class="personal-data">
        <p>
          {{ formData.personalData.name }}, {{ formData.personalData.age }} лет
        </p>
      </div>
      <div v-else>
        <p>Нет данных для отображения.</p>
      </div>
    </div>
    <div class="children-data-container">
      <p>Дети</p>
      <div v-if="formData">
        <div
          v-if="!Object.keys(formData.children).length"
          class="children-data"
        >
          <p>Детей нет</p>
        </div>
        <div
          class="children-data"
          v-for="(child, key) in formData.children"
          :key="key"
        >
          <p>{{ child.name }}, {{ child.age }} лет</p>
        </div>
      </div>
      <div v-else>
        <p>Нет данных для отображения.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  data() {
    return {
      formData: null,
    };
  },
  mounted() {
    const savedData = localStorage.getItem("personalData");
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
  },
};
</script>

<style scoped>
.container {
  margin-left: 375px;
  margin-top: 30px;
  width: 197px;
}
.personal-data-container {
  margin-bottom: 60px;
}

.personal-data-container p {
  font-weight: 500;
  font-size: 16px;
  font-family: Montserrat;
  color: rgba(17, 17, 17, 1);
}

.personal-data p {
  margin: 0;
  color: rgba(17, 17, 17, 1);
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
}
.children-data-container p {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  font-family: Montserrat;
  color: rgba(17, 17, 17, 1);
}
.children-data {
  display: inline-block;
  background-color: rgba(241, 241, 241, 1);
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;
}

.children-data p {
  text-align: center;
  margin: 0;
  color: rgba(17, 17, 17, 1);
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
}
</style>
