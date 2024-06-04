<template>
  <section className="Repo">
    <div className="Heading">
      <h1>Popular Repositories</h1>
    </div>
    <!-- <div className="form">
      <form onSubmit="{handleSubmit}">
        <input type="text" placeholder="Search..." value="{value}" onChange="{(e)" ="" />
        setValue(e.target.value)} />
        <button><FaSearch /></button>
      </form>
      <button onClick="{handleReset}">reset</button>
    </div> -->
    <div class="wrapper">
      <div className="repo" v-for="repo in github.repos" :key="repo.id">
        <div class="repo-head">
          <RouterLink :to="{name: 'SingleRepo', params: {username: github.username, id: repo.name}}">
            <h1>{{ repo.name }}</h1>
          </RouterLink>
          <p>{{ repo.visibility }}</p>
        </div>
        <p>{{ repo.language }}</p>
        <p>{{ repo.created_at }}</p>
      </div>
    </div>
    <div className="button">
      <button @click="handlePrev">prev</button>
      <button @click="handleNext">Next</button>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { reactive } from 'vue'
const github = reactive({
  repos: [],
  currentPage: 1,
  perPage: 4,
  totalPage: 0,
  username: 'ayoyinkaaaa'
})



onMounted(() => {
  fetchTotalPage()
})

function fetchTotalPage() {
  if (github.username) {
    fetch(`https://api.github.com/users/${github.username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        github.totalPage = Math.ceil(data.length / github.perPage)
        fetchdata()
      })
      .catch((error) => console.log(error.message))
  }
}

function fetchdata() {
  if (github.username) {
    fetch(
      `https://api.github.com/users/${github.username}/repos?per_page=${github.perPage}&page=${github.currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        github.repos = data
      })
      .catch((error) => console.log(error.message))
  }
}

function handleNext() {
    if(github.currentPage < github.totalPage){
        github.currentPage++
    }else{
    github.currentPage = 1
    }
    fetchdata()
}
function handlePrev() {
    if(github.currentPage > 1){
        github.currentPage--
    }else{
        github.currentPage = github.totalPage
    }
    fetchdata()
}
</script>

<style scoped>
section.Repo {
  padding-inline: 5%;
}

section .Heading h1 {
  text-align: center;
  margin-top: 20px;
  color: #007bff;
  font-size: 40px;
}

div.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 80%;
  margin-inline: auto;
}

div.wrapper .repo {
  width: 400px;
  border: 2px solid #a6cefa;
  margin-top: 10px;
  padding: 10px 10px;
  border-radius: 5px;
  box-shadow: 2px 4px 4px #ffffff;
}
div.wrapper .repo .repo-head {
  display: flex;
  justify-content: space-between;
}

div.wrapper .repo .repo-head h1 {
  font-size: 1.2rem;
}

div.wrapper .repo .repo-head p {
  border: 1.5px solid #a6cefa;
  padding: 3px 10px;
  border-radius: 15px;
}

.repo p {
  padding-block: 10px;
  font-weight: 400;
}

.button {
  display: flex;
   justify-content: center; 
  margin-top: 20px; 
}

.button :first-child {
  margin-right: 15px;
}
</style>
