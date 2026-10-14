# Ummadisetty Charan Sai — Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

Live portfolio: [View on Vercel](https://my-portfolio-six-omega-82.vercel.app/)

## Local development

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

## GitHub Pages

Push this project to the repository's main branch. In Settings → Pages,
select GitHub Actions as the deployment source. The workflow in
.github/workflows/deploy.yml builds and publishes dist on every push to
main, or when run manually from the Actions tab.

Relative asset paths support both account and repository Pages URLs.
Dependencies, build output, environment files, and the Python virtual
environment are excluded from Git.
