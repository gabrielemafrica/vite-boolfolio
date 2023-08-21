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
          projects:[],
          pages: []
        };
    },
  methods: {
    callProjects(urlApi){
      axios.get(urlApi)
      .then(response=>{
        const data = response.data;
        console.log(data);

        this.projects = data.projects.data;
        this.pages = data.projects.links;
        })
      .catch(error=>{
        console.log(error);
      })
    },
    loadPage(url){
      this.callProjects(url);
    }
  },
  mounted() {
    this.callProjects('http://127.0.0.1:8000/api/v1/projects');
  }
};
  
</script>

<template>
  <div class="container text-center my-5">
    <h1>Progetti</h1>

    <div class="container d-flex justify-content-center gap-2 my-4">
    
      <div v-for="project in projects" :key="project.id">
        <SingleProject :projectObj="project" />
      </div>
  
    </div>

    <div class="container d-flex justify-content-center gap-2">
      <div v-for="(page, index) in pages" :key="index">
        <!-- class con sintassi ad oggetto -->
        <button
          :class="{
            'btn': true,
            'btn-warning': page.active,
            'btn-primary': !page.active,
            'disabled': page.url == null,
          }"
          v-html="page.label"
          @click="loadPage(page.url)"
          >
        </button>
      </div>
    </div>

  </div>

  
</template>

<style  lang="scss">

@use '../styles/general.scss' as *;
</style>
