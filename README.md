# TODO app

This is a repository for a coding challenge.

---

## Criteria/Minimum viable product:

A User should

- [x] be able to add a new TODO item to a list

- [x] be able to delete any item from a list

- [x] see the list of items they have added

## Look and feel?

Be creative, but should have at least 1 color(that is not defined as white or black) that can be found on the www.crosskey.io website

- [x] Color used `#00b0b9`. (The Sign up button)

### Extras/Nice to have? (can pick 1, 2 or none)

- [x] Ex. Drag and drop list items order
- [x] Ex. Locally store list item in browser

### Project should include

- [x] HTML
- [x] CSS
- [x] JS (any flavor of the month framework or vanilla/jQuery)

### Project should be

- [x] Uploaded to a git repo

---

## Developer notes

Technologies used:

Framework: Angular, AngularCDK
Unit test framework: Jest
e2d testing framework: Cypress

- As a starter, I used [Nx](https://nx.dev), because it gives an almost-zero-config setup for testing on unit and e2e level with cypress.
- You can run the unit tests via `npm run test`
- I used the @angular/cdk for drag and drop support
- In order to comply with WCAG guidelines, I added keyboard support for reordering as well.
- I added cypress tests to test the functionality, you can run them with `npm run e2e` or if you'd like to check the cypress debugger, run `npm run e2e:watch`
- I use `Gherkin` for my cypress tests, although it does not support tagging properly, I do not believe it is an issue for debugging in the test runner.
- I have noted, that the `drag` cypress command implementation is not my code, I have found it on stackoverflow.

---

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@cbs-todo/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
