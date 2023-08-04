import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "4qfwy1un",
  dataset: "production",
  apiVersion: "2023-07-31",
  useCdn: false,
};

const client = createClient(config);

export default client;