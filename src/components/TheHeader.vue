<script setup>
 import { RouterLink } from 'vue-router'
 import { Icon } from "@iconify/vue";
</script>

<template>
  <header>
    <h2>
      <Icon icon="carbon:logo-github" width="1.1em" height="1.1em" />
      Ayoyinkaaaa
    </h2>

    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/Repos">Repositories</RouterLink>
        </li>
        <li>
          <RouterLink to="/404Error">404 pagenpm install -g serve</RouterLink>
        </li>
      </ul>
    </nav>

    <button className="Nav-button">Follow</button>
  </header>
</template>

<style scoped>

header {
    padding-block: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#b6dffc;
    padding-inline: 5%;
}

nav ul{
    display: flex;
    justify-content: space-between;
   
}

nav ul li{
    margin-left: 10px;
    font-size: 1.2rem;
    list-style: none;
    padding-left: 25px;
    font-weight: 700;
   
}
header nav ul li a{
   text-decoration: none;
}

</style>
