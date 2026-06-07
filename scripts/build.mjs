import { mkdir, writeFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });

await writeFile(
  "dist/index.html",
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mentovate Admin</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #f6f7fb;
        color: #172033;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
      }

      main {
        width: min(92vw, 640px);
        padding: 40px;
        background: #ffffff;
        border: 1px solid #dfe3ed;
        border-radius: 8px;
        box-shadow: 0 18px 45px rgb(22 31 48 / 8%);
      }

      h1 {
        margin: 0 0 12px;
        font-size: clamp(2rem, 6vw, 3.5rem);
        line-height: 1;
        letter-spacing: 0;
      }

      p {
        margin: 0;
        color: #526078;
        font-size: 1rem;
        line-height: 1.6;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Mentovate Admin</h1>
      <p>The Netlify project now has a root package manifest and build output directory. Add the admin application source here when it is ready to deploy.</p>
    </main>
  </body>
</html>
`,
);
