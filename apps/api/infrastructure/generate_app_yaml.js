const writeYamlFile = require("write-yaml-file");
const myArgs = process.argv.slice(2);
writeYamlFile("./apps/api/src/app.yaml", {
  runtime: "nodejs14",
  manual_scaling: {
    instances: 1,
  },
  vpc_access_connector: {
    name: `projects/${myArgs[0]}/locations/us-east1/connectors/db-connector`,
  },
}).then(() => {
  console.log("done");
});
