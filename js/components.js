function createServiceElement (imageURL, alt, title, description) {
  var serviceElement = document.createElement ('div');
  serviceElement.innerHTML = `<div class="feature-box media-box">
            <div class="fbox-media">
              <img
                src="${imageURL}"
                alt="${alt}"
              />
            </div>
            <div class="fbox-content center text-center px-0">
              <h2>${title}</h2>
              <p>${description}</p>
            </div>
          </div>`;
  serviceElement.className = 'col-sm-6 col-lg-4';
  return serviceElement;
}

var proyectos = [
  {
    imageURL: 'https://static.iexetec.com/mca/assets/clases-interactivas.png',
    alt: 'Sesiones en Vivo',
    title: 'Sesiones en vivo',
    description: 'Realizamos videoconferencias con nuestros estudiantes y oradores invitados, en las sesiones se hace uso de herramientas de ingeniería avanzadas y se platica sobre temas actuales en la industria de la tecnología.',
  },
  {
    imageURL: 'https://static.iexetec.com/mca/assets/colaboracion.png',
    alt: 'Proyectos Reales',
    title: 'Proyectos Reales',
    description: 'El alumno debe demostrar el dominio del material del curso completando proyectos mensuales y creando productos reales propuestos por empresas del sector.',
  },
  {
    imageURL: 'https://static.iexetec.com/mca/assets/1-mentores.png',
    alt: 'Mentoría y Asesoramiento',
    title: 'Mentoría y Asesoramiento',
    description: 'Todos nuestros mentores poseen amplios conocimientos en tecnologías actuales y una amplia experiencia laboral. Ellos proporcionan retroalimentación oportuna y clara sobre nuestro plan de estudios.',
  },
];

proyectos.forEach (function (proyecto) {
  document
    .getElementById ('proyecto')
    .appendChild (
      createServiceElement (
        proyecto.imageURL,
        proyecto.alt,
        proyecto.title,
        proyecto.description
      )
    );
});

var showcases = [
  {
    imageURL: 'https://static.iexetec.com/mca/assets/proyectos.png',
    alt: 'Proyectos',
    title: 'Showcase de proyectos reales',
    description: 'Presenta tus proyectos realizados en clases al mundo.',
  },
  {
    imageURL: 'https://static.iexetec.com/mca/assets/showcase-alumnos.png',
    alt: 'Showcase de Alumnos',
    title: 'Showcase de alumnos',
    description: 'Conecta directo con nuestros mentores, expertos y protagonistas y obtén mentorías personalizadas.',
  },
  {
    imageURL: 'https://static.iexetec.com/mca/assets/bolsa-trabajo.png',
    alt: 'Bolsa de Trabajo',
    title: 'Mentoría y asesoramiento',
    description: 'Busca vacantes, aplica y conecta directamente con empresas. Conecta directo con nuestros mentores, expertos y protagonistas y obtén mentorías personalizadas.',
  },
];

showcases.forEach (function (showcase) {
  document
    .getElementById ('showcase')
    .appendChild (
      createServiceElement (
        showcase.imageURL,
        showcase.alt,
        showcase.title,
        showcase.description
      )
    );
});

function createMaestroElement (imageURL, title, description, linkURL, alt){
  var fotoElement = document.createElement ('div');
  fotoElement.innerHTML = `<div class="portfolio-image">
    <a href="${linkURL}" target="_blank">
      <img src="${imageURL}" alt="${alt}">
    </a>
    <div class="bg-overlay" data-lightbox="gallery">
      <div class="bg-overlay-content dark" data-hover-animate="fadeIn">
        <a href="${imageURL}" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350" data-lightbox="gallery-item"><i class="icon-line-stack-2"></i></a>
      </div>
      <div class="bg-overlay-bg" data-hover-animate="fadeIn"></div>
    </div>
  </div>
  <div class="portfolio-desc">
    <h3><a href="${linkURL}" target="_blank">${title}</a></h3>
    <span><a href="${linkURL}" target="_blank">${description}</a></span>
  </div>`
  fotoElement.className = 'portfolio-item';
  return fotoElement;
}

var fotosMaestros = [
  {
    imageURL:'https://s3.us-east-2.amazonaws.com/static.iexetec/miaa/maestros/admer-valdivieso.png',
    alt: 'Admer Valdivieso',
    title: 'Admer Valdivieso',
    description: 'Especialista de Análitica e Ingeniería de Datos | Grupo Modelo',
    linkURL: 'https://static.iexetec.com/perfiles-maestros/admer-valdivieso.html',
  },
];

fotosMaestros.forEach(function (maestro){
  var divMaestros = document.getElementById ('oc-portfolio');
  divMaestros.appendChild(
    createMaestroElement(maestro.imageURL,maestro.title,maestro.description,maestro.linkURL,maestro.alt)
  );
});

