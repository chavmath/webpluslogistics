<template>
    <div class="container-fluid py-5">
        <!-- Barra de navegación -->
        <div class="row pt-2 px-5 g-0 justify-content-between fijo" style="height: 70px">
            <div class="col-auto align-items-center d-flex justify-content-center">
                <div class="d-flex flex-row align-items-center justify-content-between" style="width: 100%">
                    <router-link to="/" class="escala">
                        <img src="@/assets/pluslogistics.svg" height="35" alt="" data-toggle="tooltip"
                            data-placement="top" title="Pluslogistics grupo" />
                    </router-link>
                    <a href="#" class="escala">
                        <img src="@/assets/alma.svg" height="35" class="px-3" alt="" data-toggle="tooltip"
                            data-placement="top" title="Alma Plus" />
                    </a>
                    <a href="#" class="escala">
                        <img src="@/assets/bodega.svg" height="40" class="px-3" alt="" data-toggle="tooltip"
                            data-placement="top" title="Bodega+" />
                    </a>
                    <a href="mailto:info@easycargo.com.ec" class="escala">
                        <img src="@/assets/logistic.svg" height="35" alt="" data-toggle="tooltip" data-placement="top"
                            title="Logistic Planet" />
                    </a>
                </div>
            </div>
            <div class="col-auto align-items-center d-flex justify-content-center menuderecho absoluto">
                <ul class="d-flex flex-row list-unstyled text-uppercase align-items-center menu"
                    style="height: 100%; margin-right: 10px;">
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
                        <a href="#" class="escala"><img src="@/assets/siscal.svg" height="35" alt=""
                                class="mx-auto d-block" data-toggle="tooltip" data-placement="top"
                                title="Siscal+" /></a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="content mt-5 pt-5"></div>
        <h1 class="text-center text-uppercase mb-5 title">Nuestros Servicios</h1>
        <div class="row justify-content-center">
            <!-- Primera fila con 3 cards -->
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(card, index) in services.slice(0, 3)" :key="index">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <!-- Front Side -->
                        <div class="flip-card-front">
                            <div class="card-image filtro" :style="{ backgroundImage: 'url(' + card.image + ')' }">
                                <h3 class="text-uppercase text-center" style="width: 250px;">{{ card.title }}</h3>
                            </div>
                        </div>
                        <!-- Back Side -->
                        <div class="flip-card-back d-flex flex-column align-items-center justify-content-center">
                            <p class="text-center text-justify">{{ card.description }}</p>
                            <router-link :to="card.link" class="btn btn-light mt-3" v-if="card.link">
                                Ver más
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <!-- Segunda fila con 2 cards centradas -->
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(card, index) in services.slice(3, 5)"
                :key="index + 3">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <!-- Front Side -->
                        <div class="flip-card-front">
                            <div class="card-image filtro" :style="{ backgroundImage: 'url(' + card.image + ')' }">
                                <h3 class="text-uppercase text-center" style="width: 250px;">{{ card.title }}</h3>
                            </div>
                        </div>
                        <!-- Back Side -->
                        <div class="flip-card-back d-flex flex-column align-items-center justify-content-center">
                            <p class="text-center text-justify">{{ card.description }}</p>
                            <router-link :to="card.link" class="btn btn-light mt-3" v-if="card.link">
                                Ver más
                            </router-link>
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
            services: [
                {
                    title: "Almacenamiento Estratégico",
                    description: "Diseñamos, implementamos y gestionamos almacenes optimizados para maximizar el uso del espacio y la eficiencia operativa. Ofrecemos soluciones de almacenamiento temporal y permanente, adaptadas a las necesidades específicas de cada cliente, asegurando un flujo eficiente en su cadena de suministro.",
                    image: new URL('@/assets/servicios/almacen.png', import.meta.url).href,
                    link: ""
                },
                {
                    title: "Gestión de Inventarios",
                    description: "Servicios de control y monitoreo inteligente de inventarios con visibilidad en tiempo real. Nos enfocamos en la optimización del stock mediante el uso de análisis predictivo, reducción de excesos y mejoras en la rotación de productos.",
                    image: new URL('@/assets/servicios/almacenamiento.jpg', import.meta.url).href,
                    link: ""
                },
                {
                    title: "Administración de Centros Logísticos",
                    description: "Ofrecemos planificación y gestión de operaciones en centros de distribución, con soluciones de cross-docking, manejo de SKU y distribución just-in-time que optimizan costos y aceleran tiempos de entrega, maximizando la eficiencia logística.",
                    image: new URL('@/assets/servicios/centroLogistico.png', import.meta.url).href,
                    link: ""
                },
                {
                    title: "Optimización de Procesos Logísticos",
                    description: "Consultoría en re-diseño de procesos logísticos enfocada en aumentar la eficiencia y reducir costos, aplicando metodologías ágiles y Lean para maximizar la productividad operativa.",
                    image: new URL('@/assets/servicios/optimizacionProcesos.jpeg', import.meta.url).href,
                    link: ""
                },
                /* {
                    title: "Desarrollos Tecnológicos Especializados en Logística", //Pendiente descripcion correcta
                    description: "Desarrollamos soluciones tecnológicas personalizadas para optimizar las operaciones logísticas. Implementamos sistemas avanzados de automatización, seguimiento en tiempo real y análisis de datos que mejoran la eficiencia, reducen errores y optimizan la toma de decisiones en la cadena de suministro.",
                    image: new URL('@/assets/servicios/desarrollosLogistica.jpg', import.meta.url).href,
                    link: ""
                }, */
                {
                    title: "Gestión de Compras",
                    description: "Optimización del proceso de compras a través de análisis de proveedores, negociación estratégica y mejora continua,  para asegurar los mejores términos comerciales.",
                    image: new URL('@/assets/servicios/gestionCompras.jpg', import.meta.url).href,
                    link: ""
                },
                /* {
                    title: "Capacitaciones Técnicas", //Pendiente descripcion correcta
                    description: "Ofrecemos programas de capacitación especializada para equipos logísticos, cubriendo desde el uso de herramientas tecnológicas hasta la optimización de procesos. Nuestras capacitaciones están diseñadas para mejorar las habilidades técnicas y operativas, asegurando la excelencia en la ejecución de las funciones logísticas.",
                    image: new URL('@/assets/servicios/capacitacion.jpg', import.meta.url).href,
                    link: ""
                },
                {
                    title: "Administración de Flotas",//Pendiente descripcion correcta
                    description: "Gestionamos flotas optimizando rutas, reduciendo tiempos de entrega y maximizando la eficiencia operativa. Con monitoreo en tiempo real y mantenimiento preventivo, aseguramos disponibilidad y confiabilidad en cada operación.",
                    image: new URL('@/assets/servicios/flotaVehicular.jpg', import.meta.url).href,
                    link: ""
                }, */
            ],
        };
    },
};
</script>

<style scoped>
.flip-card {
    background-color: transparent;
    perspective: 1000px;
    height: 320px;
    /* Aumenta la altura para títulos largos */
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
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
    border: 2px solid #606060
}

.card-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    /* La imagen cubre todo el card */
    background-position: center;
    /* Centra la imagen */
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

.title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-transform: uppercase;
}

.filtro {
    filter: grayscale(40%);

}

.text-justify {
    text-align: justify !important;

}
</style>
