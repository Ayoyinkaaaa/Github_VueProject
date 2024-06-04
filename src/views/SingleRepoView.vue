<template>
  <section>
    <div className="repo_details" v-if="repo">
      <div className="details__name">
        <h1>{{ repo.name }}</h1>
        <p>{{ repo.description }}</p>
      </div>
      <div className="details__info">
        <div className="details__info__item">
          <p>Stars</p>
          <p>{{ repo.stargazers_count }}</p>
        </div>
        <div className="details__info__item">
          <p>Watchers</p>
          <p>{{ repo.watchers }}</p>
        </div>
        <div className="details__info__item">
          <p>Forks</p>
          <p>{{ repo.forks }}</p>
        </div>
        <div className="details__info__item">
          <p>Open Issues</p>
          <p>{{ repo.open_issues }}</p>
        </div>
      </div>

      <div class="repo_url">
        <a :href="repo.html_url" target="_blank"> View on GitHub </a>
      </div>
    </div>

    <div className="button-control">
      <button @click="back">Back to Repositories</button>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'

const props = defineProps({
  username: {
    type: String,
    required: true
  },
  id: {
    type: [String, Number],
    required: true
  }
})

const repo = ref(null)
const username = computed(() => props.username)
const id = computed(() => props.id)

fetchRepo()

function fetchRepo() {
  fetch(`https://api.github.com/repos/${username.value}/${id.value}`)
    .then((response) => response.json())
    .then((data) => {
      repo.value = data
    })
}
</script>

<style scoped>

.singlerepo-button {
    background-color: #007bff; 
    border: none;
    padding: 10px 10px;
    border-radius: 5px;

}
.repo_url {
    margin-bottom: 20px;
    margin-inline: auto;
    width: 300px;
    margin-top: 50px;
}
.repo_url a {
    border-radius: 5px;
    padding: 10px 10px;
    background-color: #007bff;
    color: #ffffff;
    text-decoration: none;
}

.repo_details .details__name{
text-align: center;
margin-top: 30px;
color: #007bff;
font-size: 1.5rem ;
}
.repo_details .details__info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;  
}

.repo_details .details__info .details__info__item {
    width: 150px;
    border: 1px solid #007bff;
    border-radius: 5px;
    text-align: center;

}

.button-control{
    margin-inline: auto;
    width: 300px;
}
</style>
