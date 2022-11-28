npx nx workspace-lint --all
nx run-many --target=lint --all
npx nx run-many --target=test --all
npx nx run-many --target=e2e --all
