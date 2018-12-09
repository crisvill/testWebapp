import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string = environment.version;
  userData = {
    name: 'Cristopher',
    imgUrl: 'assets/img/hero-2.jpg',
    lastName: 'Villegas',
    quote: 'Amo la tecnología, la ciencia y la creatividad',
    description:
      'Soy Ingeniero de Sistemas, me dedico al desarrollo front y backend de aplicaciones web, ' +
      'desde su diseño, maquetación hasta el desarrollo. Me especializo en: Angular ( 2,4,5,6,7), ' +
      'NodeJs, jasmine, Html5, CSS3, Diseño vectorial y edición fotográfica.',
    birthdate: '01-09-1988',
    email: 'alejandro201@gmail.com',
    address: 'Av 31 Diag. #57-115. Sector Niquia. Bello - Antioquia',
    phone: '+57 300 445 88 47',
    yearsExperience: 8,
    workExperience: [
      {
        initialDate: 'Febrero-2018',
        finalDate: 'Present',
        position: 'Desarrollador de aplicaciones Web',
        company: 'Ingeniería Aplicaciones y Software (IAS)',
        description: 'Desarrollo Frontend: HTML5, CSS3, Angular 5+, ES6. \n' + 'Desarrollo Backend: Scala'
      },
      {
        initialDate: 'Julio-2017',
        finalDate: 'Diciembre-2017',
        position: 'Desarrollador Sr. FullStack',
        company: 'Acorde Internacional',
        description:
          'Desarrollo Frontend: HTML5, CSS3, Angular 2+, ES6. ' +
          'Desarrollo Backend: PHP/Laravel. ' +
          'Diseño e implementación de Arquitecturas aplicando. ' +
          'Patrones de Diseño de Software.'
      },
      {
        initialDate: 'Enero-2016',
        finalDate: 'Julio-2017',
        position: 'Desarrollador FullStack',
        company: 'Geopbyte, CA',
        description:
          'Desarrollo Frontend: HTML5, CSS3, Angular 2+, ES6, jQuery. ' +
          'Desarrollo Backend: PHP/Laravel, NodeJs/Express. ' +
          'Diseño UI/UX : Photoshop/GIMP, Illustrator/InkScape.'
      },
      {
        initialDate: 'Septiembre-2014)',
        finalDate: 'Diciembre-2015',
        position: 'Desarrollador Web',
        company: 'Freelancer',
        description:
          'Web Front end Developer (angularjs - jQuery). ' +
          'Web Back end Developer (nodejs+expressjs). ' +
          'HTML5, CSS3.'
      },
      {
        initialDate: 'Febrero-2011)',
        finalDate: 'Septiembre-2014',
        position: 'Analista de Sistemas',
        company: 'Consorcio Oleaginoso Portuguesa',
        description:
          'Analista funcional del Sistema Oracle E-business Suite R12 en los ' +
          'módulos de Order Management y Application Receivables.' +
          'Desarrollador de Bases de Datos en PL/SQL. ' +
          'Diseñador y Desarrollador de Reportes en Oracle Reports 11g. ' +
          'Desarrollador de Aplicaciones Software. ' +
          'Backup de Administrador de Sistemas Oracle Solaris 10 y Linux. ' +
          'Backup de Administrador de Bases de Datos.'
      }
    ],
    education: [
      {
        intitution: 'Universidad Nacional Experimental Politécnica de la Fuerza Armada',
        degree: 'Ingeniero de Sistemas',
        initialDate: 'Enero-2006',
        finalDate: 'Diciembre-2010',
        description:
          'Profesional integral, con sólidos conocimientos básicos utilizar ' +
          ' modelos matemáticos para aplicarlos al diseño y simulación de sistemas de ' +
          'información. Asimismo planificar, coordinar, desarrollar y controlar sistemas ' +
          'administrativos dentro de una organización, verificando e instrumentando ' +
          'controles y/o rutinas de auditoría y seguridad de Informática. Egresados con ' +
          'capacidad emprendedora, de liderazgo, de trabajo en equipo para la ' +
          'resolución de problemas, con pensamiento creativo, crítico, reflexivo; con ' +
          'conocimientos en el uso de nuevas tecnologías para su autoformación y como ' +
          'herramienta en su desarrollo profesional y con habilidades intelectuales para ' +
          'incorporar adecuadamente nuevos conocimientos'
      }
    ],
    skills: [
      {
        name: 'Javascript (ES5-ES6)',
        level: '80'
      },
      {
        name: 'Angular (2, 4, 5, 6, 7+)',
        level: '85'
      },
      {
        name: 'Typescript',
        level: '80'
      },
      {
        name: 'Jasmine / Karma',
        level: '80'
      },
      {
        name: 'Nodejs',
        level: '55'
      },
      {
        name: 'PHP/Laravel',
        level: '80'
      },
      {
        name: 'ExpressJs',
        level: '60'
      },
      {
        name: 'Patrones de Software',
        level: '80'
      },
      {
        name: 'Scala',
        level: '60'
      },
      {
        name: 'JQuery',
        level: '75'
      },
      {
        name: 'Programación',
        level: '90'
      },
      {
        name: 'Git - Git/Flow',
        level: '80'
      },
      {
        name: 'HTML5',
        level: '95'
      },
      {
        name: 'Diseño Gráfico',
        level: '85'
      },
      {
        name: 'CSS3',
        level: '75'
      },
      {
        name: 'SCRUM',
        level: '75'
      },
      {
        name: 'Jenkins',
        level: '70'
      },
      {
        name: 'PL/SQL',
        level: '75'
      },
      {
        name: 'Linux',
        level: '80'
      }
    ],
    languages: [
      {
        name: 'Español',
        level: '100'
      },
      {
        name: 'Inglés',
        level: '50'
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
