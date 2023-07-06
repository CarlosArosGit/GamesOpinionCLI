<template>
    <div id="OpinionesView">
        <div class="container mt-5">
            <h3>Escribe tu opinión para el juego: {{ nombre }}</h3>

            <div class="container" id="divForm">
                <form>
                    <div class="mb-3">
                        <label for="txtNombre" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="txtNombre" v-model="nombreForm" placeholder="nombre">
                    </div>
                    <div class="mb-3">
                        <label for="txtOpinion" class="form-label">Opinión:</label>
                        <textarea class="form-control" id="txtOpinion" rows="3" v-model="opinionForm"
                            placeholder="Tú opinión debe ir aquí"></textarea>
                    </div>

                    <button type="submit" v-on:click.prevent="agregarOpinion()" class="btn btn-info">{{ textoBtn
                    }}</button>
                </form>
            </div>

            <h2 class="mt-5">A continuación podrás ver tu opinión</h2>
            <div id="sinOpiniones" v-if="cantidadOpiniones < 1">
                <div class="alert alert-danger margen" role="alert">
                    <p>No existen opiniones para mostrar</p>
                </div>
            </div>
            <div class="accordion mt-5" id="acordeonOpiniones" v-if="cantidadOpiniones > 0">
                <div class="accordion-item mt-3" v-for="(item, index) in opiniones" :key="index">
                    <h2 class="accordion-header" :id="'heading' + index">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#collapse' + index" :aria-controls="'collapse' + index">
                            Opinion creada por: {{ item.nombre }}
                        </button>
                    </h2>
                    <div :id="'collapse' + index" class="accordion-collapse collapse margen"
                        :aria-labelledby="'heading' + index" data-bs-parent="#acordeonOpiniones">
                        <div class="accordion-body">
                            <p><strong>Opinión. </strong>{{ item.opinion }}</p>
                        </div>
                        <button class="btn btn-danger" v-on:click="eliminarOpinion(index)">Eliminar</button>
                        <button class="btn btn-warning btnVolver" v-on:click="editarOpinion(index)">Editar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OpinionesView',
    props: ['nombre'],
    data: function () {
        return {
            cantidadOpiniones: 0,
            nombreForm: '',
            opinionForm: '',
            opiniones: [],
            textoBtn: 'Agregar',
            indiceActualizar: 0,
        }
    },
    methods: {
        agregarOpinion: function () {

            if (this.textoBtn == 'Agregar') {
                this.cantidadOpiniones++;
                let nuevaOpinion = {
                    nombre: this.nombreForm,
                    opinion: this.opinionForm,
                };
                this.opiniones.push(nuevaOpinion);
                this.nombreForm = '';
                this.opinionForm = '';
            }
            else if (this.textoBtn == 'Actualizar') {
                let opinionActualizada = {
                    nombre: this.nombreForm,
                    opinion: this.opinionForm,
                };
                this.opiniones.splice(this.indiceActualizar, 1, opinionActualizada);
                this.nombreForm = '';
                this.opinionForm = '';
                this.textoBtn = 'Agregar'
            }
        },
        eliminarOpinion: function (indice) {
            this.cantidadOpiniones--;
            this.opiniones.splice(indice, 1);
        },
        editarOpinion: function (indice) {
            this.nombreForm = this.opiniones[indice].nombre;
            this.opinionForm = this.opiniones[indice].opinion;
            this.textoBtn = 'Actualizar';
            this.indiceActualizar = indice;
        },
    }

}
</script>

<style scoped>
#divForm {
    text-align: start;
}

.margen {
    text-align: left;
}

.btnVolver {
    margin-left: 10px;
}
</style>