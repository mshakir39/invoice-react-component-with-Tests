## Install dependencies

Your NodeJs should be v16 or higher.

```bash
npm install
npm install -g @nrwl/cli
```


## The main example component in this repo "Account Settings"

[libs/dashboard/components/src/lib/complex/account-settings/](libs/dashboard/components/src/lib/complex/account-settings/) is the component's source directory

* `account-settings.tsx` - the component itself
* `account-settings.spec.tsx` - the Jest tests for the component
* `aaccount-settings.stories.tsx` - the Storybook presentation of the component (see this standalone for yourself but know that Cypress tests use this too)

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
