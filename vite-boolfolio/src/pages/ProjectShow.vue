<script>

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
    name: 'ProjectShow',
    data() {
        return {
            projectObj: {}
        }
    },
    mounted() {

      const projectId = this.$route.params.id;

      axios.get(API_URL + '/projects/' + projectId)
            .then(result => {
              console.log(result.data.project);
              console.log(result);

              this.projectObj = result.data.project;
            })
            .catch(error => {console.log(error);})
    },
};
  
</script>

<template>

<div class="card text-center">
  <div class="card-header">
    ID del progetto: {{ projectObj.id }}
  </div>
  <div class="container-img">
    <img :src="'http://localhost:8000/storage/' + projectObj.main_picture" :alt="projectObj.nome">
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ projectObj.nome }}</h5>
    <p class="card-text">{{ projectObj.descrizione }}</p>
    <a href="#" class="btn btn-primary">{{ projectObj.link }}</a>
    <!-- <h5 class="card-title">{{ projectObj.type.type }}</h5> -->

  </div>
  <div class="card-footer text-muted">
    {{ projectObj.link }}
  </div>
</div>


</template>

<style  lang="scss">

@use '../styles/general.scss' as *;

.container-img{
  max-width: 300px;
  max-height: 200px;
  overflow: hidden;
  margin: 0 auto;
  background-color: gray;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

</style>
