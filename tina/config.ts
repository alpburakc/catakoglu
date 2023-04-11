import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "e5717c0d-03d6-48e9-aff6-88540ee1c37b", // Get this from tina.io
  token: "7804ee905e780392597aefa9b027572ed95052e3", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "posttr",
        label: "Post (Tr)",
        path: "content/turkish/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "url",
            label: "url",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
