import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import "reflect-metadata";
import "./utils/connections";

import CategoryResolver from "./graphql/category/CategoryResolver";
import VideoResolver from "./graphql/video/VideoResolver";

async function bootsttrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver],
  });

  const server = new ApolloServer({ schema });
  server.listen({ port: 4100 }, () => console.log("running at 4100..."));
}

bootsttrap();
