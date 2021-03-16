import { Tree, formatFiles, updateJson } from '@nrwl/devkit';

function sortObjectKeys(obj: any) {
  const sorted = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sorted[key] = obj[key];
    });
  return sorted;
}

function sortKeys(host: Tree, file: string) {
  updateJson(host, file, (json) => {
    json.projects = sortObjectKeys(json.projects);
    return json;
  });
}

export default async function (host: Tree) {
  // updateJson(host, "workspace.json", (json) => {
  //   json.version = json.version + 1;
  //   return json;
  // });
  sortKeys(host, 'workspace.json');
  sortKeys(host, 'nx.json');
  await formatFiles(host);
}
