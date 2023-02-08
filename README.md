## Install dependencies

Your NodeJs should be v16 or higher.

```bash
npm install
npm install -g @nrwl/cli
```

## The main example component in this repo "Timesheets"

## Running the Jest tests for the three existing components

```bash
nx test dashboard-components
```

## Seeing the existing components in Storybook

```
nx run dashboard-components:storybook
```

## Running the Cypress tests

```bash
nx e2e components-e2e
```

## Linting the source before completion

```bash
nx run-many --target=lint --all
```
