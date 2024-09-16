<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="nav-container">
    <div class="logo">
      <router-link to="/"
        ><img src="/header/Logo_imi_horizontal.png" alt="logo" /></router-link to="/">
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/">Форма</router-link>
      </li>
      <li>
        <router-link to="/preview">Превью</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-container {
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(241, 241, 241, 1);
  height: 76px;
}

.logo {
  position: absolute;
  margin-left: 51px;
  width: 175px;
  height: 32px;
}

.nav-links {
  display: flex;
  margin: auto;
  padding: 0;
  gap: 24px;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
  font-weight: 400;
  font-size: 14px;
}

.nav-links a:hover {
  color: rgba(17, 17, 17, 1);
}
</style>
