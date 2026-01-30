<script setup>

</script>

<template>
  <header class="header">
    <div class="logo">翻译应用</div>
    <nav class="nav">
      <router-link to="/trans" class="nav-link">翻译</router-link>
      <router-link to="/" class="nav-link">HelloWorld</router-link>
      <router-link to="/hello2" class="nav-link">HelloWorld2</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: #409eff;
}
</style>