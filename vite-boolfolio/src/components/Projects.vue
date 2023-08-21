<script>
import axios from 'axios';
import SingleProject from './SingeProject.vue';

export default {
    name: 'Projects',
    components: {
      SingleProject
    },
    data: function() {
        return {
          projects:[]
        };
    },
  methods: {
    
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/v1/projects')
      .then (response => {
        const data = response.data;
        console.log(data);

        this.projects = data.projects;
        console.log('ecco cosa esce');
        console.log(this.projects);
        console.log('ecco cosa esce 2');
        console.log(this.projects[0].nome);
      })
      .catch(error => {
        console.log(error);
      })
  }
};
  
</script>

<template>
  <div class="container text-center my-5">
  <h1>Progetti</h1>

  <div class="container d-flex justify-content-center gap-2">
    
    <div v-for="project in projects" :key="project.id">
      <SingleProject :projectObj="project" />
    </div>
  
  </div>
  </div>

  
</template>

<style  lang="scss">

@use '../styles/general.scss' as *;
</style>
