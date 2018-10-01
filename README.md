# TdUx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

TdUX is my submission for the Teradata UX project, developed with Angular 5 + Teradata's Covalent. Majority of the application was developed using the covalent libraries and design.

The main application consists of an Analyst and Consumer page, which can be toggled in the side-nav bar. The dashboard contains a ngx chart, visualization for a typical stock market trending graph with random values (exaggerated for effect), signifying changes in the market. Also 2 cards, 1 with potential metadata, and 1 with related news articles for the selected stock asset. 

Each stock asset can be viewed as an individual item and the graph will randomize for effect.

## Analyst Component

Main difference between the consumer page is the addition of a form, potentially used as an "Article Submitter" Form has a wizard-like stepper to ensure user inputs all the correct fields.

## Consumer Component

Page with the same data, just a different color and no additional buttons. Meant for a "View-Only" experience. The page also defaults to the consumer page first. 


# Running and Building

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# td-ux
