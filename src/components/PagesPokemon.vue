<template>
  <h1>JUEGO CASINO</h1>
  <table>
    <tr>
        <td><h2 class="espacio" v-if="contenidoVisible">Puntaje: {{ puntos }}</h2></td>
        <td><h2 class="espacio"></h2></td>
        <td><h2 class="espacio" v-if="contenidoVisible">Intento: {{ Intentos }}</h2></td>
    </tr>
  </table>
  <table v-if="contenidoVisible">
    <tr>
        <td><img class="imgM" :src="imagen1" alt="Primera"></td>
        <td><img class="imgM" :src="imagen2" alt="segunda"></td>
        <td><img class="imgM" :src="imagen3" alt="tercera"></td>
    </tr>
    <tr>
        <td><h2>{{nombre1}}</h2></td>
        <td><h2>{{nombre2}}</h2></td>
        <td><h2>{{nombre3}}</h2></td>
    </tr>
  </table>
  
  <br>
  <p class="victoriaM" v-if="victoriaVisible">Tu puntaje final fue de: {{ puntos }}</p>
  <br>
  <img class="imgV" v-if="victoriaVisible"  src="../assets/congratulations.gif" alt="">
  <br>
  <p class="derrotaM" v-if="derrotaVisible">Haz utilizados tus 5 intentos y tu puntaje fue de: {{ puntos }}</p>
  <br>
  <p class="victoriaM" v-if="victoriaVisible">Felicitaciones has ganado un premio de $10.000,00</p>
  <br>
  <p class="derrotaM" v-if="derrotaVisible">El juego ha terminado intentalo nuevamente</p>
  <br>
  <button v-if="contenidoVisible" v-on:click="obtenerPokemon">JUGAR</button>
  <button v-if="nuevoJuegoVisible" v-on:click="nuevoJuego">NUEVO JUEGO</button>

</template>

<script>
import obtenerPokemonsOpciones from "../JS/funcionalidadPokemon"
export default {
    data() {
    return {
      puntos: 0,
      Intentos: 0,
      imagen1:
        "https://crudotransparente.com/wp-content/uploads/2017/02/Cuadro-Negro.png",
      nombre1: "xxxxxxxxxx",
      imagen2:
        "https://crudotransparente.com/wp-content/uploads/2017/02/Cuadro-Negro.png",
      nombre2: "xxxxxxxxxx",
      imagen3:
        "https://crudotransparente.com/wp-content/uploads/2017/02/Cuadro-Negro.png",
      nombre3: "xxxxxxxxxx",
      contenidoVisible: true,
      derrotaVisible: false,
      nuevoJuegoVisible: false,
      victoriaVisible: false,
      mensaje: null,
    };
  },
  methods:{
    async obtenerPokemon(){
        const arrayP = await obtenerPokemonsOpciones();
      this.nombre1 = arrayP[0].nombre;
      this.imagen1 = arrayP[0].ima;
      this.nombre2 = arrayP[1].nombre;
      this.imagen2 = arrayP[1].ima;
      this.nombre3 = arrayP[2].nombre;
      this.imagen3 = arrayP[2].ima;

      if (this.Intentos <= 5) {
        if (arrayP[0].id == arrayP[1].id && arrayP[0].id == arrayP[2].id) {
          this.puntos = this.puntos + 5;
          this.Intentos += 1;
        } else if (
          arrayP[0].id == arrayP[1].id ||
          arrayP[0].id == arrayP[2].id ||
          arrayP[1].id == arrayP[2].id
        ) {
          this.puntos = this.puntos + 2;
          this.Intentos += 1;
        } else {
          this.Intentos += 1;
        }
        if (this.puntos >= 10) {
          this.contenidoVisible = false;
          this.nuevoJuegoVisible = true;
          this.victoriaVisible = true;
        }
      }

      if (this.Intentos == 5 && this.puntos < 10) {
        this.contenidoVisible = false;
        this.derrotaVisible = true;       
        this.nuevoJuegoVisible = true;
        this.victoriaVisible = false;
      }


    },
    nuevoJuego() {
      this.contenidoVisible = true;
      this.imagen1 =
        "https://crudotransparente.com/wp-content/uploads/2017/02/Cuadro-Negro.png";
      this.imagen2 =
        "https://crudotransparente.com/wp-content/uploads/2017/02/Cuadro-Negro.png";
      this.imagen3 =
        "https://crudotransparente.com/wp-content/uploads/2017/02/Cuadro-Negro.png";
      this.nombre1 = "xxxxxxxxxx";
      this.nombre2 = "xxxxxxxxxx";
      this.nombre3 = "xxxxxxxxxx";
      this.puntos = 0;
      this.Intentos = 0;
      this.nuevoJuegoVisible = false;
      this.victoriaVisible = false;
      this.derrotaVisible = false;
    }
  }
}
</script>

<style>
.imgM{
        width: 200px;
        height: 200px;
        margin-left: 20px;
        margin-right: 20px;
    }
table{
    margin: 0 auto;
}
.espacio{
    margin-left: 50px;
    margin-right: 50px;
}
button{
    border-radius: 15px;
    width: 200px;
    height: 50px;
    font-weight: bold;
    font-size: 15px;
}
.derrotaM{
    color: red;
    font-weight: bold;
    font-size: 25px;
}

.victoriaM{
    color: rgb(0, 140, 255);
    font-weight: bold;
    font-size: 25px;
}

.imgV{
    width: 400px;
    height: 300px;
}
</style>