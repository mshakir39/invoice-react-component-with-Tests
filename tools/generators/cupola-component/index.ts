import { Tree, generateFiles, joinPathFragments, names } from "@nrwl/devkit";

const dashboardDir = "./libs/dashboard/components/src/lib";

export enum ComponentType {
  Page = "page",
  Complex = "complex"
}

const directories = {
  page: `${dashboardDir}/pages`,
  complex: `${dashboardDir}/complex`,
};

const suffixes = {
  page: "-page",
  complex: "",
}

export interface ICupolaComponent {
  type: ComponentType;
  name: string;
}

export default async function (tree: Tree, schema: ICupolaComponent) {
  const suffix: string = suffixes[schema.type] || "";

  await generateFiles(
    tree,
    joinPathFragments(__dirname, "./files", schema.type),
    joinPathFragments(directories[schema.type], `${schema.name}${suffix}`),
    names(schema.name)
  );
  return () => {};
}
