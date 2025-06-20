<template>
    <div class="container-fluid p-5">
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
                        <router-link to="/" class="text-decoration-none menu-link">Inicio</router-link>
                    </li>
                    <li class="mx-3 derecho">
                        <router-link to="/servicios" class="text-decoration-none menu-link">Servicios</router-link>
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
        <div class="content mt-5 pt-5">
            <h1 class="title">Nuestra Empresa</h1>

            <div class="row mt-4">
                <div class="col-md-6">
                    <section class="section bg-light shadow-sm p-4 rounded">
                        <div class="section-header">
                            <h2 class="section-title d-flex align-items-center">
                                <img src="@/assets/mision.svg" alt="Misión Icon" height="30" class="me-2" />
                                Misión
                            </h2>
                        </div>
                        <p class="section-text text-justify">
                            <strong>Impulsar el éxito de nuestros clientes</strong> transformando su cadena de valor con
                            soluciones innovadoras, tecnología avanzada y un <strong>equipo profesional y
                                comprometido, optimizando recursos</strong> para enfrentar un entorno dinámico.
                        </p>
                    </section>
                </div>
                <div class="col-md-6">
                    <section class="section bg-light shadow-sm p-4 rounded">
                        <div class="section-header">
                            <h2 class="section-title d-flex align-items-center">
                                <img src="@/assets/vision.svg" alt="Visión Icon" height="30" class="me-2" />
                                Visión
                            </h2>
                        </div>
                        <p class="section-text text-justify">
                            Ser el líder regional en <strong>soluciones estratégicas</strong> para la <strong>cadena de
                                valor</strong>,
                            impulsando operaciones <strong>eficientes, innovadoras y adaptables,</strong> que
                            fortalezcan el <strong>futuro</strong> de nuestros <strong>clientes</strong> en un entorno
                            empresarial <strong>dinámico.</strong>
                        </p>
                    </section>
                </div>
            </div>

            <section class="section mt-4 bg-light shadow-sm p-4 rounded">
                <div class="section-header">
                    <h2 class="section-title d-flex align-items-center">
                        <img src="@/assets/valores.svg" alt="Valores Icon" height="30" class="me-2" />
                        Valores
                    </h2>
                </div>
                <div class="valores-cards">
                    <div class="valor-card shadow-sm">
                        <strong>Innovación</strong> <br>
                        Representa el compromiso constante de crear soluciones novedosas y avanzar hacia la mejora
                        continua.
                    </div>
                    <div class="valor-card shadow-sm">
                        <strong>Compromiso con el cliente</strong> <br>
                        Nuestro centro, lo que implica estar siempre al servicio de sus necesidades, escucharlos
                        activamente y adaptar las soluciones a su contexto particular.
                    </div>
                    <div class="valor-card shadow-sm">
                        <strong>Eficiencia</strong> <br>
                        La importancia de hacer más con menos, asegurando que todas las operaciones internas y externas
                        sean gestionadas de manera eficiente, minimizando los costos y maximizando los beneficios.
                    </div>
                    <div class="valor-card shadow-sm">
                        <strong>Adaptabilidad</strong> <br>
                        La flexibilidad para ajustar las soluciones a las necesidades emergentes del cliente y del
                        mercado, permitiendo a la empresa mantenerse competitiva.
                    </div>
                    <div class="valor-card shadow-sm">
                        <strong>Excelencia operativa</strong> <br>
                        Implica que cada miembro del equipo trabaja para alcanzar los más altos estándares de calidad y
                        desempeño en todos los aspectos del negocio.
                    </div>
                    <div class="valor-card shadow-sm">
                        <strong>Colaboración y equipo</strong> <br>
                        Se fomenta el trabajo en equipo, el respeto mutuo y el crecimiento conjunto.
                    </div>
                </div>
            </section>
            <section class="section section-calidad mt-4 bg-light shadow-sm p-4 rounded mx-auto">
                <div class="section-header">
                    <h2 class="section-title d-flex align-items-center">
                        <img src="@/assets/politica_calidad.svg" alt="Calidad Icon" height="30" class="me-2" />
                        Política de Calidad
                    </h2>
                </div>
                <p class="section-text text-justify">
                    En <strong>Pluslogistics S.A.</strong> brindamos servicios logísticos especializados mediante el uso
                    de
                    tecnologías de la información para dar cumplimiento a nuestros <strong>objetivos de
                        calidad</strong>,
                    requerimientos de nuestros clientes, requisitos legales y reglamentarios. Efectuamos revisiones
                    periódicas
                    de nuestro <strong>Sistema de Gestión de Calidad</strong> y sus componentes para garantizar la
                    <strong>mejora continua</strong>.
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "Empresa",
};
</script>

<style scoped>
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

.escala {
    transition: transform 0.3s;
}

.escala:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
}

.content {
    padding: 2rem;
    text-align: center;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-transform: uppercase;
}

.section {
    margin-top: 2rem;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-height: 210px;
}

.section-calidad {
    max-width: 800px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.section-title {
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    color: #e1001a;
}

.section-title i {
    margin-right: 0.5rem;
    color: #e1001a;
}

.section-text {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    color: #333;
}

.valores-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.valor-card {
    background-color: #858585;
    color: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    text-align: left;
    line-height: 1.5;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
}

.valor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.valor-card strong {
    display: block;
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    min-height: 1.4rem;
}
</style>
