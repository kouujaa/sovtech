import { loadFilesSync } from "@graphql-tools/load-files";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import fs from "fs";
import path from "path";

const createImports = async (pathName: string) => {
  const normalizedPath = path.join(__dirname, pathName);
  const files = await fs.promises.readdir(normalizedPath);
  const paths = await Promise.all(
    files.map(async (file) => {
      const content = await import(`./${pathName}/${file}`);
      return content.default;
    })
  );
  return paths;
};

export const createApolloServer = async () => {
  const resolvers = await createImports("resolvers");
  const typeDefs = loadFilesSync(path.join(__dirname, "./schemas"));
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  return server;
};
