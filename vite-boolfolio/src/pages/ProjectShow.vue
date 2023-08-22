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
    <h5 class="card-title">{{ projectObj.nome}}</h5>
    <p class="card-text">{{ projectObj.descrizione}}</p>
    <a href="#" class="btn btn-primary">{{ projectObj.link}}</a>
  </div>
  <div class="card-footer text-muted">
    {{ projectObj.data}}
  </div>
</div>


</template>

<style  lang="scss">

@use '../styles/general.scss' as *;
</style>
