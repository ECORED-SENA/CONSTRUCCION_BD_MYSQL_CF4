"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  global: {
    componenteFormativo: 'El lenguaje SQL',
    descripcionCurso: 'Es a través del lenguaje estructurado de consulta SQL se puede acceder a la creación, gestión y administración de las bases de datos, a partir del uso de sentencias y comandos que nos facilitan la interacción con las bases de datos relacionales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png')
  },
  menuPrincipal: {
    menu: [{
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio'
    }, {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true
    }, {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Qué es SQL',
      desarrolloContenidos: true,
      subMenu: [{
        icono: 'far fa-file-alt',
        numero: '1.1',
        titulo: 'Conexión a la base de datos ',
        hash: 't_1_1'
      }, {
        icono: 'far fa-file-alt',
        numero: '1.2',
        titulo: 'Sentencias y comandos DDL',
        hash: 't_1_2'
      }, {
        icono: 'far fa-file-alt',
        numero: '1.3',
        titulo: 'Sentencias y comandos DML',
        hash: 't_1_3'
      }, {
        icono: 'far fa-file-alt',
        numero: '1.4',
        titulo: 'Sentencias y comandos DCL',
        hash: 't_1_4'
      }]
    }],
    subMenu: [{
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario'
    }, {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario'
    }, {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias'
    }, {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip'
    }, {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos'
    }]
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo'
    },
    contenidoInstruccional: [{
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander'
    }, {
      nombre: 'Tania Yaneth Ramírez Benítez',
      cargo: 'Soporte organizacional',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima'
    }, {
      nombre: 'Martha Isabel Martínez Vargas',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander'
    }],
    desarrolloProducto: [{
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo'
    }, {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional'
    }, {
      nombre: 'Jorge Leonardo Camacho Pardo',
      cargo: 'Desarrollo Front-End'
    }, {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander'
    }],
    gestoresRepositorio: [{
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: 'Validación de recursos',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima'
    }]
  },
  referencias: [{
    referencia: 'Axmark, D., Arno, K., & Widenius, M. (2002). MySQL reference manual: documentation from the source. O´Reilly Media, Inc. '
  }, {
    referencia: 'Cobo, Á. (2007). Diseño y programación de bases de datos. Visión Libros.'
  }, {
    referencia: 'Dev.mysql.com. (2020). Mysql: Mysql 8.0 Reference Manual. https://dev.mysql.com/doc/refman/8.0/en/'
  }, {
    referencia: 'MySQL AB. (2001). MySQL. Sun Microsystems Oracle Corporation.'
  }, {
    referencia: 'Pérez, D. (2010). Bases de datos línea. https://www.uoc.edu/pdf/masters/oficiales/img/913.pdf'
  }, {
    referencia: 'SE (2017). Curso MySQL - Structured Query Language (DDL, DML, DCL). ',
    link: 'https://youtu.be/4w_OD5OEgps'
  }],
  glosario: [{
    termino: 'DML',
    significado: 'lenguaje de manipulación de datos.'
  }, {
    termino: 'DDL',
    significado: 'lenguaje de definición de datos.'
  }, {
    termino: 'DCL',
    significado: 'lenguaje de control de datos.'
  }, {
    termino: 'Grant',
    significado: 'garantizar.'
  }, {
    termino: 'Remoke',
    significado: 'remover o quitar.'
  }, {
    termino: 'Workbench',
    significado: 'Herramienta visual para el diseño y administración de bases de datos MySQL.'
  }],
  complementario: [{
    texto: 'SE (2017, noviembre 24). Curso MySQL - Structured Query Language (DDL, DML, DCL)',
    tipo: 'Video',
    link: 'https://youtu.be/4w_OD5OEgps'
  }]
};
exports["default"] = _default;