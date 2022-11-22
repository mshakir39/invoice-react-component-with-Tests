import { Tree, generateFiles, joinPathFragments, names } from "@nrwl/devkit";

const dashboardDir = "./libs/dashboard/components/src/lib";

export enum ComponentType {
  Page = "page",
}

export interface ICupolaComponent {
  type: ComponentType;
  name: string;
}

export default async function (tree: Tree, schema: ICupolaComponent) {
  await generateFiles(
    tree,
    joinPathFragments(__dirname, "./files", schema.type),
    joinPathFragments(dashboardDir, `${schema.name}-page`),
    names(schema.name)
  );
  return () => {};
}
