<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="Welcome">
    <div class="Hello">
      <h1>
        Hi, I am a<br />
        <span class="job-title">Front end developer</span>
      </h1>

      <h3>Welcome to my GitHub repository.</h3>
      <p>
        Here you can find projects I&apos;ve worked on. and view existing repositories and go to my
        github profile
      </p>
    </div>
    <div class="button-container">
      <button>Go to GitHub</button>

      <RouterLink to="/Repos">
        <button class="cta-button">See Repositories</button>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
section.Welcome {
    padding-inline: 5%;
}
div.Hello{
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1;
    margin-top: 60px;

}
div.Hello h1 {
    font-size: 3rem;
    color: #007bff;
}
div.Hello h3 {
    font-size: 20px;
    margin-top: 20px;
    font-weight: 200;
}

div.Hello p{
    font-size: 20px;
    font-weight: 100;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.button-container :first-child{
    margin-right: 20px;
}

</style>
