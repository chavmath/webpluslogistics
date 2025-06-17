<template>
  <div class="container-fluid relativo g-0">
    <div class="vh-100 wh-100 sup absoluto">
      <SyncLoader :color="color" :size="size" :loading="loading" />
    </div>
 
    <div class="row">
      <div class="col-2 d-flex align-items-center justify-content-center">
        <NombreCliente />
      </div>

      <div class="col-1">
        <router-link :to="empresaId === '5' ? '/cliente' : '/clientes'">
          <img src="@/assets/siscal.svg" class="logo" alt="" style="margin-top: 20px" />
        </router-link>
      </div>
      <div class="col row mt-2 g-0">
        <div class="col-1 derecha">
          <div class="row">
            <img src="@/assets/menutop/casa.svg" style="height: 45px" alt="" />
          </div>
          <div class="row mt-1">
            <img src="@/assets/menutop/back.svg" style="height: 45px" alt="" />
          </div>
        </div>
        <div class="col-5 derecha relativo" style="width: 300px">
          <div class="row mx-2">
            <span class="col g-0">
              <div class="text-center">
                <img v-if="cambiomarcas" src="@/assets/menutop/marcasrojo.svg" alt="" class="col cursor"
                  @click="btnmarcas" />
                <img v-else src="@/assets/menutop/marcas.svg" alt="" class="col cursor" @click="btnmarcas" />
                <span class="absoluto select col-1">
                  <select v-model="marcaSeleccionada" v-if="selectmarca" class="form-select form-select-sm">
                    <option :value="item.valor" v-for="(item, index) in marcas" :key="index">
                      {{ item.descripcion }}
                    </option>
                  </select>
                </span>
              </div>
            </span>
            <span class="col g-0">
              <div class="text-center">
                <img v-if="cambiolocalidad" src="@/assets/menutop/localidadrojo.svg" alt="" class="col cursor"
                  @click="btnlocalidad" />
                <img v-else src="@/assets/menutop/localidad.svg" alt="" class="col cursor" @click="btnlocalidad" />
                <!-- <span class="absoluto select col-1"><v-select :options="condicion" v-model="selectcondicion"
                    v-if="condicionoption"></v-select></span> -->
                <!-- span class="absoluto select2 col-1"><v-select :options="localidades" v-if="selectoption"
                    v-model="selectlocalidad"></v-select></span> -->
                <span class="absoluto select col-1">
                  <select v-model="selectlocalidad" v-if="selectoption" class="form-select form-select-sm">
                    <option :value="item" v-for="(item, index) in localidades" :key="index">
                      {{ item }}
                    </option>
                  </select>
                </span>
              </div>
            </span>
            <span class="col g-0">
              <div class="text-center">
                <img v-if="cambiofechainicial" src="@/assets/menutop/inicialrojo.svg" @click="btncalendarioin" />
                <img v-else src="@/assets/menutop/inicial.svg" @click="btncalendarioin" />
                <span class="calendarioin absoluto" @change="calendarioincall"><input type="date" v-model="fechainicial"
                    v-if="fechainif" /></span>
              </div>
            </span>
            <span class="col g-0">
              <div class="text-center">
                <img v-if="cambiofechafinal" src="@/assets/menutop/finalrojo.svg" @click="btncalendarioout" />
                <img v-else src="@/assets/menutop/final.svg" @click="btncalendarioout" />
                <span class="calendarioout absoluto"><input type="date" v-if="fechaoutif" @change="calendariooutcall"
                    v-model="fechafinal" /></span>
              </div>
            </span>
            <span class="col g-0">
              <div class="text-center">
                <img v-if="cambioconsultar" src="@/assets/menutop/consultarrojo.svg" @click="btnconsulta"
                  class="col cursor" />
                <img v-else src="@/assets/menutop/consultar.svg" @click="btnconsulta" />
              </div>
            </span>
          </div>
          <div class="row mt-1 in mx-auto" style="width: 300px">
            <input @input="btnpedido" type="search" placeholder="" class="text-center text-uppercase" v-model="pedido"
              @keyup.enter="btnconsulta" />
          </div>
        </div>
        <div class="col-1 derecha" style="width: 60px">
          <div class="row">
            <img src="@/assets/menutop/pdf.svg" style="height: 45px" alt="" />
          </div>
          <div class="row mt-1 text-center" @click="exportarExcel" :class="[datos.length === 0 ? 'disabled' : '']">
            <download-excel :data="datos" type="xlsx" :name="`Reporte de Combustible -
              ${this.selectcondicion} ${this.selectlocalidad} ${this.fechainicial} ${this.fechafinal}.xlsx`
              " worksheet="SISCAL+">
              <img v-if="cambioexcel" src="@/assets/menutop/excelrojo.svg" height="45" alt="" />
              <img v-else src="@/assets/menutop/excel.svg" height="45" alt="" />
            </download-excel>
          </div>
        </div>
        <div class="col-1 derecha" style="margin-left: -5px; margin-right: -5px; width: 75px">
          <div class="row">
            <img src="@/assets/menutop/alerta.svg" style="height: 45px" alt="" />
          </div>
          <div class="row mt-1">
            <img src="@/assets/menutop/actualizar.svg" style="height: 45px" alt="" />
          </div>
        </div>
        <div class="col-3" style="margin-left: 15px; margin-right: 5px; width: 115px">
          <div class="row">
            <div class="col">
              <div class="file-select" id="src-file1">
                <input type="file" name="src-file1" aria-label="Archivo" />
              </div>
            </div>
          </div>
          <div class="row mt-1">
            <img src="@/assets/menutop/cargar.svg" style="height: 55px; margin-left: -2px; margin-right: -20px" alt=""
              class="col" />
            <img src="@/assets/menutop/registrar.svg" style="height: 55px; margin-left: -5px; margin-right: -5px" alt=""
              class="col" />
          </div>
        </div>
      </div>
      <div class="col-3 d-flex justify-content-end">
        <usuarioData />
      </div>
    </div>
    <!-- <div class="row"><MenuTop1 /></div> -->
    <div class="row">
      <div class="col-2">
        <perfect-scrollbar class="scroll-area" v-once :settings="settings" :wheelPropagation="true">
          <MenuLateral />
        </perfect-scrollbar>
      </div>
      <div class="col-10 recuadro mt-2">
        <p style="font-size: 12px;" class="text-center">Reporte: Carga de Combustible</p>
        <div class="row w-75 mx-auto text-center text-uppercase" style="font-size: 10px; width: 95%">
          <div class="col my-1">
          </div>
          <div class="col-2 my-1 separador">
            <span>
              Marca: <br />
              <strong :class="marcaSeleccionada === '%' ? 'd-none' : ''"> {{ marcaSeleccionada }}</strong>
              <strong :class="marcaSeleccionada != '%' ? 'd-none' : ''"> TODAS LAS MARCAS</strong>
            </span>
          </div>

          <div class="col-5 separador my-1" :class="selectlocalidad.length === 0 ? 'd-none' : ''">
            <span>
              Localidad seleccionada: <br />

              <strong>{{ selectlocalidad }}</strong></span>
          </div>
          <div class="col-2 separador my-1" :class="fechainicial.length === 0 ? 'd-none' : ''">
            <span>
              Fecha inicial: <br />
              <strong>{{ fechainicial }}</strong></span>
          </div>
          <div class="col-2 separador my-1" :class="fechafinal.length === 0 ? 'd-none' : ''">
            <span>
              Fecha final: <br />
              <strong>{{ fechafinal }}</strong>
            </span>
          </div>
          <div class="col-2 my-1" :class="datos.length === 0 ? 'd-none' : ''">
            <span>
              Total vines: <br />
              <strong>{{ datos.length }}</strong>
            </span>
          </div>
          <div class="col-2 my-1" :class="datos.length === 0 ? 'd-none' : ''">
            <input type="button" value="LIMPIAR" class="btn btn-sm btn-outline-danger" @click="btnlimpiar" />
          </div>
        </div>
        <div>
          <perfect-scrollbar class="scroll-area" v-once :settings="settings" :wheelPropagation="true"><!--  -->            
            <table class="table table-hover table-striped text-center align-middle"
              >
              <thead style="position: sticky; top: 0px">
                <tr>
                  <th v-for="(titulo, i) in titulos" :key="i" class="text-uppercase titles" style="font-size: 11px"
                    @click="btnordenar(titulo)">
                    <strong>{{ titulo }}</strong>
                    <span v-if="orden === titulo" class="cursor mx-1">
                      <img v-if="ascendente" src="@/assets/arrow-up.svg" alt="Ascendente" height="5" />
                      <img v-else src="@/assets/arrow-down.svg" alt="Descendente" height="5" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody class="align-middle">
                <tr v-for="(dato, indexx) in datos" :key="indexx">
                  <td v-for=" (item) in dato" :key="item">                               
                     <span v-if="item.includes('https://')">
                      <img :src="item" alt="" class="mx-auto rounded" style="transform: rotate(-90deg);" height="40" @click="verImagenEnModal(item)">
                     </span>
                     <span v-else>{{ item }}</span>
                  </td>
                </tr>
                <div v-if="modalVisible" class="modal">
                  <div class="modal-content">
                    <span class="close" @click="cerrarModal">&times;</span>
                    <img :src="imagenActual" :alt="danoActual" class="imagen-modal" />
                  </div>
                </div>
              </tbody>
            </table>
          </perfect-scrollbar>
        </div>
      </div>
    </div>
    <div id="miDiv" class="absoluto pictograma cursor" @click="cerrarimagen"></div>
    <div v-if="modalVisible" class="modal">
      <div class="modal-content">
        <span class="close" @click="cerrarModal">&times;</span>
        <img :src="imagenActual" :alt="danoActual" class="imagen-modal" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuTop1 from "@/components/MenuTop1.vue";
import MenuLateral from "@/components/MenuLateral.vue";
import { SyncLoader } from "vue3-spinner";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import NombreCliente from "@/components/NombreCliente.vue";
import usuarioData from "@/components/usuarioData.vue";
import VueJsonExcel from "vue-json-excel3";
import Swal from "sweetalert2";

export default {
  name: "R_InspeccionView",
  components: {
    MenuTop1,
    SyncLoader,
    MenuLateral,
    PerfectScrollbar,
    NombreCliente,
    usuarioData,
    VueJsonExcel,
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60,
      },
      vacio: "",
      orden: "",
      ascendente: true,
      pedido: "",
      marcaSeleccionada: null,
      empresaId: localStorage.getItem("id empresa"),
      cambiomarcas: false,
      selectmarca: false,
      cambiolocalidad: false,
      cambiofechainicial: false,
      cambiofechafinal: false,
      cambioconsultar: false,
      condicionoption: false,
      cambioexcel: false,
      selectcondicion: "",
      selectlocalidad: "",
      fechainif: false,
      fechaoutif: false,
      fechainicial: "",
      fechafinal: "",
      selectoption: false,
      condicionseleccionado: "",
      condicion: ["INGRESO", "SALIDA"],
      loading: false,
      marcas: [],
      localidades: [],
      campos: {
        CHASIS: "chasis",
        MODELO: "modelo",
        COLOR: "color",
        PARTE: "parte",
        DAÑO: "dano",
        ZONA: "zona",
        MEDIDA: "tamano",
        INSPECTOR: "usuario",
        CAPTURA: "captura",
        IMAGEN: "foto",
      },
      captura: "",
      evidenciafotos: true,
      color: "#FF0000",
      size: "20px",
      loading: true,
      campos: {
        CHASIS: "chasis",
        DESCRIPCIÓN: "descripcion",
        LOCALIDAD: "localidad",
        FECHA: "fecha",
        PARTE: "parte",
        DAÑO: "dano",
        ZONA: "zona",
        MEDIDA: "medida",
        INSPECTOR: "usuario",
        CAPTURA: "pictograma",
        FOTO: "foto",
      },
      titulos: [],
      datos: [],
      datosOriginales: [],
      datosFiltrados: [],

      datosexcel: [],
      modalVisible: false,
      imagenActual: "",
      danoActual: "",
      showModal: false,
    };
  },
  mounted() {
    let url = `${this.$url}/filtroscombustiblevwe`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let marcas = data.marca;
        for (let i = 0; i < marcas.length; i++) {
          this.marcas.push(marcas[i]);
        }
        let localidades = data.localidad;
        for (let i = 0; i < localidades.length; i++) {
          this.localidades.push(localidades[i].descripcion);
        }
      });
    this.loading = false;


  },
  watch: {
    marcaSeleccionada() {
      this.filtrarPorMarca();
      this.selectmarca = false;

    },
    selectcondicion() {
      this.condicionoption = false;

    },
    selectlocalidad() {
      this.selectoption = false;
    }

  },
  methods: {

    localidadcall() {
      if (this.selectcondicion.length > 0) {
        this.condicionoption = false;
      } else {
        this.condicionoption = true;
      }
      alert(this.selectcondicion);
    }
    ,
    btnmarcas() {
      this.cambiomarcas = !this.cambiomarcas;
      this.selectmarca = !this.selectmarca;
    },
    filtrarPorMarca() {
      if (this.marcaSeleccionada) {
        const marcaNormalizada = this.marcaSeleccionada.trim().toLowerCase();
        this.datosFiltrados = this.datosOriginales.filter(
          (item) => item.marca.trim().toLowerCase() === marcaNormalizada
        );
      } else {
        this.datosFiltrados = this.datosOriginales;
      }
    },


    btnordenar(titulo) {
      if (this.orden === titulo) {
        this.ascendente = !this.ascendente;
      } else {
        this.orden = titulo;
        this.ascendente = true;
      }


      const campo = this.campos[titulo.trim()];

      this.datos.sort((a, b) => {
        if (!campo) return 0;

        const valA = a[campo];
        const valB = b[campo];

        if (valA == null || valB == null) return 0;

        if (this.ascendente) {
          return valA > valB ? 1 : valA < valB ? -1 : 0;
        } else {
          return valA < valB ? 1 : valA > valB ? -1 : 0;
        }
      });
    },


    btnlocalidad() {
      this.cambiolocalidad = true;
      this.condicionoption = true;
      this.selectoption = true;
    },
    btncalendarioin() {
      this.fechainif = true;
    },
    btncalendarioout() {
      this.fechaoutif = true;
      console.log("ss");
    },
    calendarioincall() {
      this.fechainif = false;
      this.fechaoutif = true;
      this.cambiofechafinal = true;
    },
    calendariooutcall() {
      this.fechaoutif = false;
    },
    btnlimpiar() {
      this.selectcondicion = "";
      this.selectlocalidad = "";
      this.fechainicial = "";
      this.fechafinal = "";
      this.condicionoption = false;
      this.selectoption = false;
      this.fechainif = false;
      this.fechaoutif = false;
      this.cambiolocalidad = false;
      this.cambiofechainicial = false;
      this.cambiofechafinal = false;
      this.cambioconsultar = false;
      this.pedido = "";
      this.datos = [];
    },
    btnpedido() {
      this.cambiolocalidad = false;
      this.cambiofechainicial = false;
      this.cambiofechafinal = false;
      this.condicionoption = false;
      this.selectoption = false;
      this.selectlocalidad = "";
      this.selectcondicion = "";
      this.fechainicial = "";
      this.fechafinal = "";
    },

    btnconsulta() {
      const url = `${this.$url}/repcombustiblevwe`;
      const consulta = {
        empresa: this.empresaId,
        localidad: this.selectlocalidad,
        fecha1: this.fechainicial,
        fecha2: this.fechafinal,
        marca: this.marcaSeleccionada
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(consulta),
      })
        .then((res) => res.json())
        .then((data) => {
          this.titulos = Object.keys(data[0]);
          this.datos = data;
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            icon: "error",
            text: error.message || "Error al subir el archivo.",
          });
        });

    }
    ,


    verimagen(imagen, dano) {
      if (imagen !== "") {
        var miDiv = document.getElementById("miDiv");
        miDiv.innerHTML = "<img src='" + imagen + "' alt='" + dano + "'>";
        miDiv.style.width = "550px";
        miDiv.style.height = "300px";
        miDiv.style.display = "block";
      }
    },
    verImagenEnModal(imagen, dano) {
      if (imagen !== "") {
        this.imagenActual = imagen;
        this.danoActual = dano;
        this.modalVisible = true; // Mostrar el modal
      }
    },
    closeModal() {
      this.showModal = false;
    },
    cerrarModal() {
      this.modalVisible = false; // Ocultar el modal
    },
    cerrarimagen() {
      var miDiv = document.getElementById("miDiv");
      miDiv.innerHTML = "";
      miDiv.style.display = "none";
    },
    exportarExcel() {
      this.cambioexcel = true;
      const datosExcel = this.datos.map((item) => {
        return {
          CHASIS: item.chasis,
          DESCRIPCIÓN: item.descripcion,
          LOCALIDAD: item.localidad,
          FECHA: item.fecha.split("T")[0],
          PARTE: item.parte,
          DAÑO: item.dano,
          ZONA: item.zona,
          MEDIDA: item.medida,
          CAPTURA: item.pictograma
            ? `<a href="${item.pictograma}" target="_blank">${item.pictograma}</a>`
            : "",
          FOTO: item.foto
            ? `<a href="${item.foto}" target="_blank">${item.foto}</a>`
            : "",
        };
      });
      this.datosexcel = datosExcel;
    },
  },
};
</script>

<style scoped>
table {
  font-size: 11px;
}

td {
  width: 100px;
}

.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  height: 450px !important;
  overflow-x: auto;
}

.pictograma {
  top: 50%;
  left: 50%;
  background: white;
  z-index: 500;
}

.cerrar {
  z-index: 800;
  top: 25%;
  right: 30%;
}

.select {
  z-index: 1000;
  top: 80%;
  left: 25%;
  background: white;
  width: 250px;
  font-size: 12px;
}

.select2 {
  z-index: 500;
  top: 120%;
  left: 25%;
  background: white;
  width: 250px;
  font-size: 12px;
}

.calendarioin {
  top: 80%;
  left: 35%;
}

.calendarioout {
  top: 80%;
  left: 65%;
}

.separador {
  border-right: 1px solid rgb(237, 4, 4);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  max-width: 30%;
  max-height: 80%;
  text-align: center;
  position: relative;
}

.imagen-modal {
  margin-top: 30px;
  max-width: 500px;
  max-height: 500px;
}

.close {
  position: absolute;
  top: 10px;
  right: 25px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content-consulta {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  width: 20%;
}

.modal-content-consulta button {
  padding: 5px 10px;
  background: #606060;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
  align-self: center;
}

.modal-content-consulta button:hover {
  background: #df030d;
}

.modal-content {
  max-width: 350px;
  max-height: 550px;
  overflow: hidden;
  /* Evita que el contenido exceda el modal */
  padding: 10px;
  border-radius: 8px;
  background: white;
  margin: 0 auto;
  position: relative;
}

.girol {
  transform: rotate(90deg);
}

.giratablero {
  transform: rotate(-90deg);
}
</style>
