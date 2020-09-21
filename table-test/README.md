# TableTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Explanation:

This app contains one root model and the four components.

    1. header component:
            contains the nav-bar and related navigations.
            
    2. table component: 
            table will render and all the necessary logics (table actions, ex: delete edit)  contains here

    3. footer component: 
            contains the footer details.
            
    4. main component: 
            It is the parent component which holds above 3 components

Service:
	One common service is created in which Http request for the API is called. 

Router:
	basic route module which routes to '/data-table' and wildcard for the route is pointing to the '/data-table' page






