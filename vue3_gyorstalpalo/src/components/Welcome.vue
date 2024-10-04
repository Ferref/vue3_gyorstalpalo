<script setup>
  
</script>

<template>
  <div class="container bg-crimson round border padding">
    <div class="display-flex flex-row">
      <h1 class="title">task$</h1>
      <h2>Meow Meow Blyat</h2>
      <img src="../assets/fat_cat.png" class="logo vue" alt="Vue logo" />
    </div>

    <form class="display-flex flex-column gap">
        <font-awesome-icon :icon="['fas', 'fist-raised']" />
        <input class='round' type="email" placeholder="Email" />
        <input class='round' type = "password" placeholder="Jelszo"/>
        <button>Login</button>
    </form>
  </div>
</template>
  
<style scoped>
/* h1 {
    background-color: var(--background-light);
} */
</style>
