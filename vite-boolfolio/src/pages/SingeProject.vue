<script>


export default {
    name: 'SingleProject',
    props:{
        projectObj: Object
    },
};
  
</script>

<template>

<div class="card text-center">
  <div class="card-header">
    ID del progetto: {{ projectObj.id}}
  </div>
  <div class="card-body">

    <router-link
      class="btn btn-success mb-3"
      :to="{ 
          name: 'ProjectShow',
          params: { id: projectObj.id }
      }"
    >
      {{ projectObj.nome }}
    </router-link>
    <div class="container-img">
      <img :src="'http://localhost:8000/storage/' + projectObj.main_picture" :alt="projectObj.nome">
    </div>
  </div>
  <div class="card-footer text-muted">
    {{ projectObj.data}}
  </div>
</div>




</template>

<style  lang="scss">

@use '../styles/general.scss' as *;

.container-img{
  // circle
  width: 200px;
  height: 200px;
  border-radius: 50%;
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
