import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '2923541bd55137a7754d9243e4b94ac3e3c1267c', queries });
export default client;
  