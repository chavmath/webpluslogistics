<template>
    <div class="vh-100 text-center container-fluid">
        <div class="row pt-2 px-5 g-0 justify-content-between fijo" style="height: 70px">
            <div class="col-auto align-items-center d-flex justify-content-center">
                <div class="d-flex flex-row align-items-center justify-content-between" style="width: 100%">
                    <a href="#" class="escala"><img src="@/assets/pluslogistics.svg" height="35" alt=""
                            data-toggle="tooltip" data-placement="top" title="Pluslogistics grupo" /></a>
                    <a href="#" class="escala">
                        <img src="@/assets/alma.svg" height="35" class="px-3" alt="" data-toggle="tooltip"
                            data-placement="top" title="Alma Plus" /></a>
                    <a href="#" class="escala"><img src="@/assets/bodega.svg" height="40" class="px-3" alt=""
                            data-toggle="tooltip" data-placement="top" title="Bodega+" /></a>

                    <a href="mailto:info@easycargo.com.ec" class="escala">
                        <img src="@/assets/logistic.svg" height="35" alt="" data-toggle="tooltip" data-placement="top"
                            title="Logistic Planet" />
                    </a>
                </div>
            </div>
            <div class="col-auto align-items-center d-flex justify-content-center menuderecho absoluto">
                <ul class="d-flex flex-row list-unstyled text-uppercase align-items-center menu" style="height: 100%">
                    <li class="mx-3 derecho">
                        <router-link to="/empresa" class="text-decoration-none menu-link">Empresa</router-link>
                    </li>
                    <li class="mx-3 derecho">
                        <router-link to="/servicios" class="text-decoration-none menu-link">Servicios</router-link>
                    </li>
                    <li class="mx-3 derecho">contactos</li>
                    <li class="derecho mx-2 d-flex justify-content-center align-items-center">
                        <img src="@/assets/user.svg" width="20" height="20" class="mx-auto" alt="" />
                    </li>
                    <li class="ps-3">
                        <a href="#" class="escala"><img src="@/assets/siscal.svg" height="35" alt=""
                                class="mx-auto d-block" data-toggle="tooltip" data-placement="top"
                                title="Siscal+" /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row sizing" style="margin-top: 50px; height: 400px;">
            <div id="carouselExampleIndicators" class="carousel slide g-0" style="height: 400px;">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div style="padding:32% 0 0 0;position:relative;">
                            <iframe ref="vimeoIframe" :src="iframeSrc" frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; margin-top: -40px;"
                                title="Presentación comercial Pluslogistics (1)">
                            </iframe>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/slider/pluslogistics_cover.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/slider/10.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/slider/4.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon absoluto flechaizq" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon absoluto flechader" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="row mt-4 align-items-center">
            <div class="col">
                <img src="@/assets/mockup.png" height="500" alt="" />
            </div>
            <div class="col-4 d-flex flex-column align-items-center text-center">
                <p class="h1 text-uppercase encabezado mx-auto w-75 my-5">
                    <strong>PROPÓSITO</strong>
                </p>

                <p class="text-justify w-75">
                    Revolucionamos la forma en que las empresas gestionan su
                    <strong>cadena de valor</strong>, conectando y optimizando sus
                    <strong>operaciones críticas</strong>. Con un enfoque en
                    <strong>innovación, eficiencia y tecnología avanzada</strong>.
                </p>
                <p class="text-justify w-75">
                    Nuestro equipo impulsa la competitividad de nuestros clientes,
                    optimizando recursos y garantizando su éxito a largo plazo.
                </p>
                <input type="button" value="PRODUCTOS" class="btn btn-outline-secondary text-uppercase mt-3" />
            </div>
        </div>
        <div class="row bg60 text-white text-center mt-5">
            <div class="col-4 mt-5">
                <img src="@/assets/grupo-blanco.svg" height="30" alt="" />
                <p class="text-justify mt-4 w-80 mx-auto" style="margin-left: 60px !important;">
                    "Transformamos el presente, aseguramos el futuro."
                </p>
            </div>
            <div class="col-4 mt-5 d-flex flex-column align-items-center contacto">
                <p class="h3 text-start text-uppercase">
                    CONTACTO
                </p>
                <ul class="list-unstyled mt-4 servicio" style="text-align: left; padding-left: 40px">
                    <li class="d-flex align-items-center mb-2">
                        <div class="me-2 d-flex align-items-center justify-content-center" style="width: 30px">
                            <img src="@/assets/ubicacion.svg" height="30" alt="" />
                        </div>
                        <a href="https://maps.app.goo.gl/ZeEjGjPxPeQPzpAp9" target="_blank">Av. 12 de Octubre y Av.
                            Coruña <br />
                            Edificio Urban Plaza, Oficina 17</a>
                    </li>
                    <li class="d-flex align-items-center mb-2">
                        <div class="me-2 d-flex align-items-center justify-content-center" style="width: 30px">
                            <img src="@/assets/mail.svg" height="30" alt="" />
                        </div>
                        <a href="mailto:info@pluslogistics.com.ec" class="text-white">info@pluslogistics.com.ec</a>
                    </li>
                </ul>
            </div>
            <div class="col-4 mt-5 d-flex flex-column align-items-center">
                <p class="h3 text-start text-uppercase">
                    síguenos en:
                </p>
                <ul class="list-unstyled mt-4 servicio">
                    <li>
                        <a href="https://www.linkedin.com/company/pluslogistics/" target="_blank"
                            rel="noopener noreferrer"><img src="@/assets/linkedin1.svg" height="35" alt=""
                                class="px-2" />@pluslogistics</a>
                    </li>
                    <li class="mt-1">
                        <a href="https://www.instagram.com/pluslogisticsec?igsh=MWV4Zzh0d2Jxa2ljNQ==" target="_blank"
                            rel="noopener noreferrer"><img src="@/assets/instagram1.svg" height="35" alt=""
                                class="px-2" />@pluslogistics</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Player from '@vimeo/player';
export default {
    data() {
        return {
            iframeSrc: "https://player.vimeo.com/video/1035428270?h=0907f9ae48&badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&loop=1&autoplay=1&muted=1",
        };
    },
    mounted() {
        this.sendPlayCommand();
    },
    methods: {
        // Enviar un mensaje para iniciar la reproducción del video
        sendPlayCommand() {
            const iframe = this.$refs.vimeoIframe;
            const player = new Player(iframe);
        }
    }
};
</script>

<style>
.absoluto {
    position: absolute;
    transform: translate(-50%, -50%);
}

.relativo {
    position: relative;
}

body {
    color: #3d3d3f;
}

ul {
    font-size: 12px;
}

.derecho {
    border-right: 2px solid #e1001a;
    padding-right: 20px;
    height: 15px;
}

.sizing {
    height: 500px;
    overflow: hidden;
}

.text-justify {
    text-align: justify;
}

.encabezado {
    font-size: 50px !important;
}

.bg60 {
    background-color: #606060;
}

.servicio li {
    position: relative;
    padding-bottom: 5px;
}

.servicio a {
    text-decoration: none;
    color: white;
}

.servicio a::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s;
}

.servicio li:hover a::after {
    transform: scaleX(1);
}

.encabezado-underline {
    text-decoration: underline;
    text-decoration-color: white;
    text-decoration-thickness: 2px;
}

.contacto {
    background-image: url("@/assets/mapa.svg");
    background-size: 85%;
    background-position: center;
    background-repeat: no-repeat;
}

.menu li {
    cursor: pointer;
}

.menu-link {
    color: inherit;
    /* Usa el color del contenedor padre */
    text-decoration: none;
    /* Quita el subrayado */
}

.menu li:hover .menu-link {
    color: #e1001a;
    /* Color al pasar el cursor */
}

.fijo {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
    box-shadow: #3d3d3f 0px -30px 55px;
    /* border-bottom: 2px solid #5a5a5a13; */
}

.flechaizq {
    top: 50%;
    left: 20%;
}

.flechader {
    top: 50%;
    right: 5%;
}

.escala {
    transition: transform 0.3s;
}

.escala:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
}

li a img {
    transition: transform 0.3s;
}

li a img:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
}

.menuderecho {
    top: 60%;
    right: -230px;
}

.blanco {
    background-color: white;
    color: #3d3d3f;
}

.carousel-item img {
    margin-top: 0px;
    object-fit: fill;
    /* Ajusta la imagen para que llene el contenedor sin distorsión */
    width: 100%;
    /* La imagen ocupará todo el ancho del contenedor */
    height: 400px;
    /* Ajusta la altura del slider (puedes cambiar este valor según tus necesidades) */
}
</style>