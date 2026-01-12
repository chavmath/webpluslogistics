<template>
    <div class="vh-100 text-center container-fluid landing-wrapper">
        <div class="row pt-2 px-3 px-md-5 g-0 justify-content-between align-items-center fijo"
            style="height: 70px; padding-right: 1rem !important;">
            <div class="col col-md-auto d-flex align-items-center empresas-header">
                <div class="d-flex flex-row align-items-center justify-content-start w-100 empresas-strip-inner">
                    <a href="#" class="escala me-2">
                        <img src="@/assets/pluslogistics.svg" height="35" alt="Pluslogistics grupo"
                            data-toggle="tooltip" data-placement="top" title="Pluslogistics grupo" />
                    </a>
                    <router-link to="/almaplus" class="escala me-2">
                        <img src="@/assets/alma.svg" height="40" alt="Alma Plus" data-toggle="tooltip"
                            data-placement="top" title="Alma Plus" />
                    </router-link>
                   <!--  <a href="#" class="escala me-2">
                        <img src="@/assets/alma.svg" height="35" alt="Alma Plus" data-toggle="tooltip"
                            data-placement="top" title="Alma Plus" />
                    </a> -->
                    <router-link to="/bodegaplus" class="escala me-2">
                        <img src="@/assets/bodega.svg" height="40" alt="Bodega+" data-toggle="tooltip"
                            data-placement="top" title="Bodega+" />
                    </router-link>
                    <a href="mailto:info@easycargo.com.ec" class="escala">
                        <img src="@/assets/logistic.svg" height="35" alt="Logistic Planet" data-toggle="tooltip"
                            data-placement="top" title="Logistic Planet" />
                    </a>
                </div>
            </div>

            <div class="col-2 d-lg-none text-end">
                <button class="btn btn-link p-0 border-0 shadow-none" type="button" @click="isMenuOpen = !isMenuOpen"
                    aria-label="Menú">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>

            <div class="col-auto d-none d-lg-flex align-items-center justify-content-center menuderecho">
                <ul class="d-flex flex-row list-unstyled text-uppercase align-items-center menu" style="height: 100%">
                    <li class="mx-3 derecho">
                        <router-link to="/empresa" class="text-decoration-none menu-link">
                            Empresa
                        </router-link>
                    </li>
                    <li class="mx-3 derecho">
                        <router-link to="/servicios" class="text-decoration-none menu-link">
                            Servicios
                        </router-link>
                    </li>
                    <li class="mx-3 derecho">contactos</li>
                    <li class="derecho mx-2 d-flex justify-content-center align-items-center">
                        <img src="@/assets/user.svg" width="20" height="20" class="mx-auto" alt="" />
                    </li>
                    <li class="ps-3">
                        <a href="#" class="escala">
                            <img src="@/assets/siscal.svg" height="30" alt="Siscal+" class="mx-auto d-block"
                                data-toggle="tooltip" data-placement="top" title="Siscal+" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="isMenuOpen" class="row d-lg-none bg-white shadow-sm mobile-menu-wrapper">
            <div class="col-12">
                <ul class="list-unstyled mb-2 text-uppercase mobile-menu">
                    <li class="py-2 border-bottom">
                        <router-link to="/empresa" class="text-decoration-none menu-link" @click="isMenuOpen = false">
                            Empresa
                        </router-link>
                    </li>
                    <li class="py-2 border-bottom">
                        <router-link to="/servicios" class="text-decoration-none menu-link" @click="isMenuOpen = false">
                            Servicios
                        </router-link>
                    </li>
                    <li class="py-2 border-bottom" @click="isMenuOpen = false">
                        Contactos
                    </li>
                    <li class="py-2 border-bottom">
                        <img src="@/assets/user.svg" width="20" height="20" class="me-2" alt="" />
                        <span>Acceso</span>
                    </li>
                    <li class="py-2">
                        <a href="#" class="text-decoration-none menu-link">
                            <img src="@/assets/siscal.svg" height="30" alt="Siscal+" class="me-2" data-toggle="tooltip"
                                data-placement="top" title="Siscal+" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="row sizing">
            <div id="carouselExampleIndicators" class="carousel slide g-0">
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
                        <div class="carousel-media">
                            <iframe ref="vimeoIframe" :src="iframeSrc"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                title="Presentación comercial Pluslogistics (1)"></iframe>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-media">
                            <img src="@/assets/slider/pluslogistics_cover.jpg" alt="..."
                                class="carousel-img img-fill" />
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="carousel-media">
                            <img src="@/assets/slider/10.png" alt="..." class="carousel-img img-cover" />
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="carousel-media">
                            <img src="@/assets/slider/4.png" alt="..." class="carousel-img img-fill" />
                        </div>
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

        <div class="row align-items-center gx-4 gy-4 mb-lg-5">
            <div class="col-12 col-lg mb-3">
                <img src="@/assets/mockup.png" class="img-fluid" alt="" />
            </div>
            <div class="col-12 col-lg-4 d-flex flex-column align-items-center text-center">
                <p class="h1 text-uppercase encabezado mx-auto w-75 my-4 my-lg-5">
                    <strong>PROPÓSITO</strong>
                </p>

                <p class="text-justify w-75">
                    Revolucionamos la forma en que las empresas gestionan su
                    <strong>cadena de valor</strong>, conectando y optimizando sus
                    <strong>operaciones críticas</strong>. Con un enfoque en
                    <strong>innovación, eficiencia y tecnología avanzada</strong>.
                </p>
                <p class="text-justify w-75">
                    Nuestro equipo impulsa la competitividad de nuestros clientes, optimizando recursos
                    y garantizando su éxito a largo plazo.
                </p>
                <input type="button" value="PRODUCTOS" class="btn btn-outline-secondary text-uppercase mt-3" />
            </div>
        </div>

        <div class="row bg60 text-white text-center py-4 footer">
            <div class="col-12 col-md-4 mt-3 mt-md-5">
                <img src="@/assets/grupo-blanco.svg" height="30" alt="" />
                <p class="text-justify mt-4 w-80 mx-auto frase-footer">
                    "Transformamos el presente, aseguramos el futuro."
                </p>
            </div>
            <div class="col-12 col-md-4 mt-4 mt-md-5 d-flex flex-column align-items-center contacto order-3 order-md-2">
                <p class="h3 text-start text-uppercase w-100 text-center">
                    CONTACTO
                </p>
                <ul class="list-unstyled mt-4 servicio" style="text-align: left; padding-left: 40px">
                    <li class="d-flex align-items-center mb-2">
                        <div class="me-2 d-flex align-items-center justify-content-center" style="width: 30px">
                            <img src="@/assets/ubicacion.svg" height="30" alt="" />
                        </div>
                        <a href="https://maps.app.goo.gl/ZeEjGjPxPeQPzpAp9" target="_blank">
                            Av. 12 de Octubre y Av. Coruña <br />
                            Edificio Urban Plaza, Oficina 17
                        </a>
                    </li>
                    <li class="d-flex align-items-center mb-2">
                        <div class="me-2 d-flex align-items-center justify-content-center" style="width: 30px">
                            <img src="@/assets/mail.svg" height="30" alt="" />
                        </div>
                        <a href="mailto:info@pluslogistics.com.ec" class="text-white">
                            info@pluslogistics.com.ec
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-4 mt-4 mt-md-5 d-flex flex-column align-items-center order-2 order-md-3">
                <p class="h3 text-start text-uppercase w-100 text-center">
                    síguenos en:
                </p>
                <ul class="list-unstyled mt-4 servicio">
                    <li>
                        <a href="https://www.linkedin.com/company/pluslogistics/" target="_blank"
                            rel="noopener noreferrer">
                            <img src="@/assets/linkedin1.svg" height="35" alt="" class="px-2" />@pluslogistics
                        </a>
                    </li>
                    <li class="mt-1">
                        <a href="https://www.instagram.com/pluslogisticsec?igsh=MWV4Zzh0d2Jxa2ljNQ==" target="_blank"
                            rel="noopener noreferrer">
                            <img src="@/assets/instagram1.svg" height="35" alt="" class="px-2" />@pluslogistics
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Player from "@vimeo/player";

export default {
    data() {
        return {
            iframeSrc:
                "https://player.vimeo.com/video/1035428270?h=0907f9ae48" +
                "&badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0" +
                "&loop=1&autoplay=1&muted=1&background=1",
            isMenuOpen: false,
        };
    },
    mounted() {
        this.sendPlayCommand();
        this.$nextTick(() => {
            this.adjustVideoScale();
            window.addEventListener("resize", this.adjustVideoScale);
        });
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.adjustVideoScale);
    },
    methods: {
        sendPlayCommand() {
            const iframe = this.$refs.vimeoIframe;
            if (!iframe) return;

            const player = new Player(iframe);

            player.getVideoWidth().then(w => {
                player.getVideoHeight().then(h => {
                    console.log("Vimeo video ratio:", w / h);
                });
            });
        },
        adjustVideoScale() {
            const container = this.$refs.videoContainer;
            const iframe = this.$refs.vimeoIframe;
            if (!container || !iframe) return;

            const cw = container.clientWidth;
            const ch = container.clientHeight;
            if (!cw || !ch) return;

            const containerRatio = cw / ch;
            const videoRatio = 3.2;

            let scaleX = 1;
            let scaleY = 1;

            if (containerRatio > videoRatio) {
                scaleY = containerRatio / videoRatio;
            } else {
                scaleX = videoRatio / containerRatio;
            }

            iframe.style.transform = `scale(${scaleX}, ${scaleY})`;
        },
    },
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

.landing-wrapper {
    padding-top: 70px;
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
    overflow: hidden;
    min-height: 220px;
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
    text-decoration: none;
}

.menu li:hover .menu-link {
    color: #e1001a;
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
    position: static;
}

.hamburger-line {
    display: block;
    width: 22px;
    height: 2px;
    background-color: #3d3d3f;
    margin: 4px 0;
}

.mobile-menu li {
    padding-left: 1rem;
}

.empresas-strip {
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    white-space: nowrap;
}

.empresas-strip img {
    max-height: 30px;
}

.frase-footer {
    max-width: 260px;
}

.empresas-header {
    overflow: hidden;
}

.empresas-strip-inner {
    gap: 0.5rem;
}

#carouselExampleIndicators {
    position: relative;
}

.carousel-indicators {
    z-index: 5;
    bottom: 10px;
}

.carousel-media {
    position: relative;
    width: 100%;
    aspect-ratio: 3.2 / 1;
    overflow: hidden;
}

.carousel-media iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

.carousel-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.img-contain {
    object-fit: contain;
}

.img-cover {
    object-fit: cover;
}

.img-fill {
    object-fit: fill;
}

.img-fluid {
    max-height: 500px;
    height: auto;
}

.mobile-menu-wrapper {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 1100;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 576px) {
    .encabezado {
        font-size: 32px !important;
    }


    .carousel-media {
        height: 220px;
    }

    /* .carousel-media img {
        object-fit: cover;
    } */

    .contacto {
        background-size: 120%;
        background-position: center;
    }

    .derecho {
        border-right: none;
        padding-right: 0;
    }

    .empresas-header {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .empresas-strip-inner {
        white-space: nowrap;
    }

    .empresas-strip-inner a img {
        max-height: 26px;
    }

    .footer {
        margin-top: 40px !important;
    }
}

@media (min-width: 577px) and (max-width: 992px) {
    .encabezado {
        font-size: 40px !important;
    }

    .carousel-media {
        height: 320px;
    }

    .fijo img {
        max-height: 30px;
    }

    .menu li {
        font-size: 11px;
        margin: 0 6px;
    }

    .empresas-strip-inner a img {
        max-height: 28px;
    }

    .footer {
        margin-top: 60px !important;
    }
}
</style>
