<template>
    <div id="Administracion">
        <div class="container">
            <div class="margen mt-5">
                <h1 id="parrafoIngrese">Para ver la información ingresa tus datos</h1>
                <div v-if="mostrarBtn" class="mt-4">
                    <button class="btn btn-success" v-on:click="mostrarFormulario">Ingresar Datos</button>
                </div>
            </div>
            <div v-if="mostrarForm" class="container margen">
                <form>
                    <div class="mb-3">
                        <label for="txtNombre" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="txtNombre" v-model="nombreForm">
                    </div>
                    <div class="mb-3">
                        <label for="txtApellido" class="form-label">Apellido:</label>
                        <input type="text" class="form-control" id="txtApellido" v-model="apellidoForm">
                    </div>
                    <p id="pError">¡Los campos no pueden estar vacíos!</p>
                    <button type="submit" v-on:click.prevent="enviarDatos()" class="btn btn-success">Enviar</button>
                </form>
            </div>

            <div v-if="mostrarResumen" class="container mt-5">
                <div class="row">
                    <div id="seccionNombre" class="col-md-3">
                        <img src="../assets/usuario.png" alt="Logo usuario" class="imgLogo">
                        <p>Bienvenid@</p>
                        <p>{{ nombreForm }} {{ apellidoForm }}</p>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-8">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 margen">
                                    <h2>Resumen de tu cuenta</h2>
                                    <h4>Le diste me gusta al juego: <strong>{{ nombre }}</strong></h4>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <div id="divCoins" class="container margen">
                                        <h5 class="fwParrafos">¿Deseas Comprar Coins para este Juego?</h5>
                                        <div class="centro">
                                            <button id="btnCoins" class="btn btn-warning" v-on:click="agregarCoins"><i
                                                    class="bi bi-cash-coin"></i> Agregar
                                                Coins</button>
                                        </div>
                                        <hr>
                                        <h4 class="fwParrafos">Cantidad de Coins Comprados</h4>
                                        <div class="progress" role="progressbar" aria-label="Example with label"
                                            v-bind:aria-valuenow="cantidadCoins" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-success" style="">${{ cantidadCoins }}</div>
                                        </div>
                                        <div v-if="mostrarMaximo">
                                            <p id="limiteCoins">Llegaste al maximo de tu credito</p>
                                        </div>
                                        <br><br>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-5">

                                <div class="col-md-4 bg-warning">
                                    <p>% de finalizacion de juego</p>
                                    <hr>
                                    <p>50% <i class="bi bi-star-half"></i></p>
                                </div>
                                <div class="col-md-4 bg-success">
                                    <p class="cWhite">Logros en el juego</p>
                                    <hr>
                                    <p class="cWhite">166 <i class="bi bi-trophy-fill"></i></p>
                                </div>
                                <div class="col-md-4 bg-info">
                                    <p>Recompensas</p>
                                    <hr>
                                    <p>200 <i class="bi bi-patch-check-fill"></i></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Administracion',
    props: ['nombre'],
    data: function () {
        return {
            mostrarBtn: true,
            mostrarForm: false,
            mostrarResumen: false,
            mostrarMaximo: false,
            nombreForm: '',
            apellidoForm: '',
            cantidadCoins: 0,
        }
    },
    methods: {
        mostrarFormulario: function () {
            this.mostrarBtn = false;
            this.mostrarForm = true;
            $("#parrafoIngrese").css("display", "none");
        },
        enviarDatos: function () {
            if (this.nombreForm != '' && this.apellidoForm != '') {
                $("#pError").css("display", "none");
                this.mostrarForm = false;
                this.mostrarResumen = true;
            } else {
                $("#pError").css("display", "block");
            }
        },
        agregarCoins: function () {
            this.cantidadCoins++;
            let barraProgress = $('.progress-bar');
            let valorPorCiento = '';
            if (this.cantidadCoins < 50) {
                valorPorCiento = `${this.cantidadCoins}%`;
                barraProgress[0].style.width = valorPorCiento;
                if (this.cantidadCoins > 20 && this.cantidadCoins <= 30) {
                    barraProgress[0].classList.remove('bg-success');
                    barraProgress[0].classList.add('bg-warning');
                }
                else if (this.cantidadCoins > 30) {
                    barraProgress[0].classList.remove('bg-warning');
                    barraProgress[0].classList.add('bg-danger');
                }
            } else {
                this.mostrarMaximo = true;
                $('#btnCoins').prop('disabled', true);
            }

        },
    }
}
</script>

<style scoped>
.margen {
    text-align: left;
}

.centro {
    text-align: center;
}

#seccionNombre {
    background-color: rgba(0, 0, 0, 0.92);
    color: rgb(162, 162, 162);
    font-size: 25px;
}

#divCoins {
    border: 0.5px solid rgba(128, 128, 128, 0.683);
}

.imgLogo {
    margin-top: 50px;
}

#btnCoins {
    margin-top: 50px;
}

.fwParrafos {
    font-weight: 500;
}

.cWhite {
    color: white;
}

#limiteCoins {
    color: rgb(117, 116, 116);
    font-size: 20px;
}

#pError {
    color: rgb(208, 0, 0);
    display: none;
}
</style>
