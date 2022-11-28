npx nx workspace-lint
nx run-many --target=lint --all
nx test dashboard-components
nx e2e components-e2e
