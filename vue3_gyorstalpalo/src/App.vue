<script setup>import Welcome from './components/Welcome.vue';</script>

<template>
  <div class="container">
    <header></header>
    <main>
      <Welcome></Welcome>
    </main>
    <footer></footer>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

:root {
  /* Primary Colors */
  --primary-color: #3498db;
  --primary-dark: #2980b9;
  --primary-light: #5dade2;
  
  /* Secondary Colors */
  --secondary-color: #e74c3c;
  --secondary-dark: #c0392b;
  --secondary-light: #ec7063;
  
  /* Accent Colors */
  --accent-color: #f1c40f;
  --accent-dark: #f39c12;
  --accent-light: #f7dc6f;

  /* Neutral Colors */
  --white: #ffffff;
  --black: #000000;
  --grey-light: #bdc3c7;
  --grey-dark: #7f8c8d;

  /* Background Colors */
  --background-light: #ecf0f1;
  --background-dark: #2c3e50;

  /* Text Colors */
  --text-primary: #2c3e50;
  --text-secondary: #7f8c8d;
}

* {
  margin: 0;
  padding: 0;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#app{
  /* Pass */
}

body{
  background-color: var(--background-dark);
  font-family: Oswald;
}

.display-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-center{
  justify-content: center;
  align-items: center;
}

.title{
  font-size: 3rem;
}

.bg-crimson{
  background-color: crimson;
}

.round {
  border-radius: 0.5rem;
}

.border{
  border: 3px solid black;
}

.padding{
  padding: 1rem;
}
.gap{
  gap: 1rem;
}

.font-bigger {
  font-size: 3rem;
}
input {
  border: none;
  padding: 0.5rem;
}
</style>
