<script setup>
import {ref} from 'vue'

const email = ref('pelda@gmail.com')
const password = ref('')
const error = ref('')

const login = () => {
    if(!email.value || !password.value){
        error.value = "Toltsd ki mindket mezot!"
    }
    console.log(email.value, password.value);
}
  
</script>

<template>
  <div class="container bg-crimson round border padding">
    <div class="display-flex flex-row">
      <h1 class="title">task$</h1>
      <h2>Meow Meow Blyat</h2>
      <img src="../assets/fat_cat.png" class="logo vue" alt="Vue logo" />
    </div>

    <form class="display-flex flex-column gap" @submit.prevent="login">
        <p v-if="error">{{ error }}</p>
        <font-awesome-icon class="font-bigger" :icon="['fas', 'fist-raised']" />
        <input class='round' type="email" placeholder="Email" v-model="email" />
        <input class='round' type = "password" placeholder="Jelszo" v-model="password"/>
        <button>Login</button>
    </form>
  </div>
</template>
  
<style scoped>
/* h1 {
    background-color: var(--background-light);
} */
</style>
