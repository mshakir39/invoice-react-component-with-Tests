## Install dependencies

Your NodeJs should be v16 or higher.

```bash
npm install
npm install -g @nrwl/cli
```

## The main example component in this repo "Accept Button" (simple button)

[libs/dashboard/components/src/lib/simple/accept-button](libs/dashboard/components/src/lib/simple/accept-button/) is the button's source directory

* `accept-button.tsx` - the button itself
* `accept-button.spec.tsx` - the Jest tests for the button
* `accept-button.stories.tsx` - the Storybook presentation of the button (see this standalone for yourself but know that Cypress tests use this too)

## Running the Jest tests for the three existing components

```bash
nx test dashboard-components
```

## Seeing the three existing components in Storybook

```
nx run dashboard-components:storybook
```

Once that is up, go to:

* [Simple button on localhost:4400](http://localhost:4400/?path=/story/simple-accept-button--primary) ('Basic' within here has visible evidence of button press that is tested in the cypress test - see below)
* [Date Picker on localhost:4400](http://localhost:4400/?path=/story/simple-date-input--primary)
* [Text input on locahost:4400](http://localhost:4400/?path=/story/simple-text-input--primary)

## Running the Cypress tests

```bash
nx e2e components-e2e
```

[apps/components-e2e/src/integration/accept-button.cy.ts](apps/components-e2e/src/integration/accept-button.cy.ts) is the Cypress test source (Cypress uses Mocha)

Only simple 'accept button' has Cypress tests. Date-picker and text-input do not and there is no need for you to write them.

## Linting the source before completion

```bash
nx run-many --target=lint --all
```
