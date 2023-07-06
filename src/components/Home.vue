<template>
  <div class="home">
    <div class="container mt-5">
      <h1 class="margen">Lista de Juegos Disponibles</h1>
      <div class="grid_juegos mt-5">
      <div v-for="(juego, index) in arrayJuegos" v-bind:key="index" class="card m-2" style="width: 22rem;">
        <img v-bind:src="juego.background_image" class="card-img-top" alt="logo">
        <div class="card-body">
          <h5 class="card-title">{{ juego.name }}</h5>
        </div>
        <ul class="list-group list-group-flush margen">
          <li class="list-group-item">Rating: {{ juego.rating }}</li>
          <li class="list-group-item">Released: {{ juego.released }}</li>
          <li class="list-group-item">Updated: {{ juego.updated }}</li>
        </ul>
        <div class="card-body margen">
          <a v-on:click="detalleOpiniones(juego.name)" class="btn btn-primary">Opinar</a>
          <a v-on:click="like(juego.name)" class="likes"><i class="bi bi-heart-fill"></i></a>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data: function () {
    return {
      cantidadJuegos: 0,
      arrayJuegos: [],
    }
  },
  methods: {
    getDataApi: function () {
      let url = 'https://api.rawg.io/api/games?key=548ac8fcc5ad4b3780b81ed0b0a992c6';
      axios(url)
        .then(respuesta => {
          this.cantidadJuegos = respuesta.data.results.length;
          for (let i = 0; i < this.cantidadJuegos; i++) {
            this.arrayJuegos.push(respuesta.data.results[i]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    detalleOpiniones: function (nombreJuego) {
      this.$router.push(`/opiniones/${nombreJuego}`);
    },
    like: function (nombreJuego) {
      this.$router.push(`/administracion/${nombreJuego}`);
    }
  },
  created() {
    this.getDataApi();
  }
}
</script>

<style scoped>
.grid_juegos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.card-img-top{
  height: 200px;
}
.margen{
  text-align: left;
}
.likes{
  color: red;
  margin-left: 10px;
}
</style>
