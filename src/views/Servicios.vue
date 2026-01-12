<template>
    <div class="container-fluid servicios-wrapper">
        <div class="row pt-2 px-3 px-md-5 g-0 justify-content-between align-items-center fijo"
            style="height: 70px; padding-right: 1rem !important;">
            <div class="col col-md-auto d-flex align-items-center empresas-header">
                <div class="d-flex flex-row align-items-center justify-content-start w-100 empresas-strip-inner">
                    <router-link to="/" class="escala me-2">
                        <img src="@/assets/pluslogistics.svg" height="35" alt="Pluslogistics grupo"
                            data-toggle="tooltip" data-placement="top" title="Pluslogistics grupo" />
                    </router-link>
                    <router-link to="/almaplus" class="escala me-2">
                        <img src="@/assets/alma.svg" height="40" alt="Alma Plus" data-toggle="tooltip"
                            data-placement="top" title="Alma Plus" />
                    </router-link>
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
                        <router-link to="/empresa" class="text-decoration-none menu-link">Empresa</router-link>
                    </li>
                    <li class="mx-3 derecho">
                        <router-link to="/" class="text-decoration-none menu-link">Inicio</router-link>
                    </li>
                    <li class="mx-3 derecho">Contactos</li>
                    <li class="derecho mx-2 d-flex justify-content-center align-items-center">
                        <img src="@/assets/user.svg" width="20" height="20" class="mx-auto" alt="" />
                    </li>
                    <li class="ps-3">
                        <a href="#" class="escala">
                            <img src="@/assets/siscal.svg" height="35" alt="Siscal+" class="mx-auto d-block"
                                data-toggle="tooltip" data-placement="top" title="Siscal+" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="isMenuOpen" class="row d-lg-none mobile-menu-wrapper">
            <div class="col-12">
                <ul class="list-unstyled mb-2 text-uppercase mobile-menu">
                    <li class="py-2 border-bottom">
                        <router-link to="/" class="text-decoration-none menu-link" @click="isMenuOpen = false">
                            Inicio
                        </router-link>
                    </li>
                    <li class="py-2 border-bottom">
                        <router-link to="/empresa" class="text-decoration-none menu-link" @click="isMenuOpen = false">
                            Empresa
                        </router-link>
                    </li>
                    <li class="py-2 border-bottom" @click="isMenuOpen = false">
                        Contactos
                    </li>
                    <li class="py-2 border-bottom d-flex align-items-center justify-content-center">
                        <img src="@/assets/user.svg" width="20" height="20" class="me-2" alt="" />
                        <span>Acceso</span>
                    </li>
                    <li class="py-2">
                        <a href="#" class="text-decoration-none menu-link d-flex justify-content-center">
                            <img src="@/assets/siscal.svg" height="30" alt="Siscal+" class="me-2" data-toggle="tooltip"
                                data-placement="top" title="Siscal+" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="content">
            <h1 class="text-center text-uppercase mb-5 title">Nuestros Servicios</h1>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(card, index) in services" :key="index">
                    <div class="flip-card" @click="handleCardClick(index)" :class="{ 'is-flipped': isFlipped(index) }">
                        <div class="flip-card-inner">
                            <!-- FRONT -->
                            <div class="flip-card-front">
                                <div class="card-image filtro" :style="{ backgroundImage: 'url(' + card.image + ')' }">
                                    <h3 class="text-uppercase text-center" style="width: 250px;">
                                        {{ card.title }}
                                    </h3>
                                    <div class="tap-hint">
                                        Presiona para más detalles →
                                    </div>
                                </div>
                            </div>

                            <!-- BACK -->
                            <div class="flip-card-back d-flex flex-column align-items-center justify-content-center">
                                <!-- Si description es array => bullets -->
                                <ul v-if="Array.isArray(card.description)" class="desc-list text-start">
                                    <li v-for="(item, i) in card.description" :key="i">
                                        {{ item }}
                                    </li>
                                </ul>

                                <!-- Si es string => párrafo -->
                                <p v-else class="text-center text-justify">
                                    {{ card.description }}
                                </p>

                                <router-link :to="card.link" class="btn btn-light mt-3" v-if="card.link">
                                    Ver más
                                </router-link>
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
    name: "Servicios",
    data() {
        return {
            isMenuOpen: false,
            services: [
                {
                    title: "Almacenamiento Estratégico",
                    description:
                        "Diseñamos, implementamos y gestionamos almacenes optimizados para maximizar el uso del espacio y la eficiencia operativa. Ofrecemos soluciones de almacenamiento temporal y permanente, adaptadas a las necesidades específicas de cada cliente, asegurando un flujo eficiente en su cadena de suministro.",
                    image: new URL("@/assets/servicios/almacen.png", import.meta.url).href,
                    link: "",
                },
                {
                    title: "Gestión de Inventarios",
                    description:
                        "Servicios de control y monitoreo inteligente de inventarios con visibilidad en tiempo real. Nos enfocamos en la optimización del stock mediante el uso de análisis predictivo, reducción de excesos y mejoras en la rotación de productos.",
                    image: new URL("@/assets/servicios/almacenamiento.jpg", import.meta.url).href,
                    link: "",
                },
                {
                    title: "Administración de Centros Logísticos",
                    description:
                        "Ofrecemos planificación y gestión de operaciones en centros de distribución, con soluciones de cross-docking, manejo de SKU y distribución just-in-time que optimizan costos y aceleran tiempos de entrega, maximizando la eficiencia logística.",
                    image: new URL("@/assets/servicios/centroLogistico.png", import.meta.url).href,
                    link: "",
                },
                {
                    title: "Optimización de Procesos Logísticos",
                    description:
                        "Consultoría en re-diseño de procesos logísticos enfocada en aumentar la eficiencia y reducir costos, aplicando metodologías ágiles y Lean para maximizar la productividad operativa.",
                    image: new URL("@/assets/servicios/optimizacionProcesos.jpeg", import.meta.url).href,
                    link: "",
                },
                {
                    title: "Gestión de Compras",
                    description:
                        "Optimización del proceso de compras a través de análisis de proveedores, negociación estratégica y mejora continua,  para asegurar los mejores términos comerciales.",
                    image: new URL("@/assets/servicios/gestionCompras.jpg", import.meta.url).href,
                    link: "",
                },
            ],
            flipped: [],
        };
    },
    mounted() {
        this.flipped = this.services.map(() => false);
    },
    methods: {
        handleCardClick(idx) {
            if (window.innerWidth <= 992) {
                this.flipped[idx] = !this.flipped[idx];
            }
        },
        isFlipped(idx) {
            return this.flipped[idx];
        },
    },
};
</script>

<style>
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

.servicios-wrapper {
    padding-top: 80px;
}

.escala {
    transition: transform 0.3s;
}

.escala:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
}

.empresas-header {
    overflow: hidden;
}

.empresas-strip-inner {
    gap: 0.5rem;
}

.hamburger-line {
    display: block;
    width: 22px;
    height: 2px;
    background-color: #3d3d3f;
    margin: 4px 0;
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

.derecho {
    border-right: 2px solid #e1001a;
    padding-right: 20px;
    height: 15px;
}

.menuderecho {
    position: static;
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

.mobile-menu {
    text-align: center;
}

.mobile-menu li {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    padding: 2rem;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-transform: uppercase;
}

.flip-card {
    background-color: transparent;
    perspective: 1000px;
    height: 320px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner,
.flip-card.is-flipped .flip-card-inner {
    transform: rotateY(180deg);
}


.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.flip-card-front {
    background-color: #f8f9fa;
    color: #000;
    border: 2px solid #606060;
}

.flip-card-back {
    background-color: #f8f9fa;
    color: #000000;
    transform: rotateY(180deg);
    padding: 0 35px;
    border: 2px solid #606060;
}

.card-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
}

.card-image h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    background-color: rgba(0, 0, 0, 0.5);
}

h3 {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.4;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1rem;
    line-height: 1.4;
    text-align: center;
    margin: 0;
}

.filtro {
    filter: grayscale(40%);
}

.text-justify {
    text-align: justify !important;
}

.tap-hint {
    display: none;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    color: #f1f1f1;
    background: rgba(0, 0, 0, 0.6);
    padding: 4px 8px;
    border-radius: 999px;
    text-transform: none;
    letter-spacing: 0.5px;
}

@media (max-width: 576px) {
    .servicios-wrapper {
        padding-top: 75px;
    }

    .content {
        padding: 1.25rem;
    }

    .title {
        font-size: 2rem;
        margin-top: 1rem;
    }

    .flip-card {
        height: 260px;
    }

    .card-image h3 {
        font-size: 1rem;
        padding: 6px 10px;
    }

    p {
        font-size: 0.9rem;
    }

    .flip-card:hover .flip-card-inner {
        transform: none;
    }

    .flip-card.is-flipped .flip-card-inner {
        transform: rotateY(180deg);
    }

    .empresas-header {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .empresas-strip-inner {
        white-space: nowrap;
    }

    .empresas-strip-inner img {
        max-height: 30px;
    }


    .tap-hint {
        display: block;
    }
}

@media (min-width: 577px) and (max-width: 992px) {
    .title {
        font-size: 2.3rem;
    }

    .flip-card {
        height: 300px;
    }

    .flip-card:hover .flip-card-inner {
        transform: none;
    }

    .flip-card.is-flipped .flip-card-inner {
        transform: rotateY(180deg);
    }

    .empresas-strip-inner img {
        max-height: 32px;
    }

    .tap-hint {
        display: block;
    }
}
</style>
