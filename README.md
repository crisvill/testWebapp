# Web app test

Proyecto web construído con angular 7 + bootstrap
[angular-cli](https://github.com/angular/angular-cli)

### Características

- Contruído con angular 7
- Diseño Responsive
- Uso de Observables, y rxjs operators
- Uso de Pipeables Oberators
- Los componentes siguen en lo posible el patrón "Stateless - statefull components" también conocido cómo "Presentación - Contenedor" o
  "Smart - dump component"
- Uso de Reactive Forms
- Uso Inputs y Outputs para pasar información entre componentes
- Uso de takeUntil para eliminar subscripciones (register.component)
- Uso de Validators y custom Validators en formularios

# Demo
Puedes ver éste proyecto desplegado en  [Heroku](https://webappibm.herokuapp.com/login)
- Para iniciar sesión basta llenar los campos con datos cualquiera y presionar el botón de "Inicio de sesión".
- Abrir el modal de resgitro de nuevo usuario hacer click en enlace "registrar usuario" en pantalla de login. 

# Inicio

1. Ir al proyecto e instalar las dependencias:
 ```bash
 npm install
 ```
 
2. Lanzar el servidor local, y abrir en el navegador `localhost:4200`:
 ```bash
 npm run start-local
 ```
 
# Estructura del Proyecto

```
dist/                        compiled version
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Tareas Principales

Tareas basadas en [NPM scripts](https://docs.npmjs.com/misc/scripts).

Tasks                         | Description
------------------------------|---------------------------------------------------------------------------------------
npm start-local               | Ejecuta el servidor local en `http://localhost:4200/`
npm run build [-- --env=prod] | Lint code and build app for production in `dist/` folder
npm test                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
npm run test:ci               | Lint code and run unit tests once for continuous integration
npm run e2e                   | Run e2e tests using [Protractor](http://www.protractortest.org)
npm run lint                  | Lint code
npm run translations:extract  | Extract strings from code and templates to `src/app/translations/template.json`
npm run docs                  | Display project documentation

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Servidor de desarrollo

Ejecuta `npm start-local` para lanzar el servidor de desarrollo. Navega a `http://localhost:4200/`. 

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootsrap](https://ng-bootstrap.github.io)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)
- [PrimeNg] (https://www.primefaces.org/primeng)

#### Guías de Código

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

# Licencia

The MIT License (MIT)

Copyright (c) 2016-2018 Thales Services SAS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
