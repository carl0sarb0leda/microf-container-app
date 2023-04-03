# Med App

Frontend application which displays global medical dashboards and gives access
to a clinical portal for health personnel. The main purpose of this application
is to demonstrate a use case of
[micro-frontend](https://martinfowler.com/articles/micro-frontends.html)
architectures. For more details on the conceptualisation used in this sample,
please have a look at
[Building Micro-Frontends](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/)
concepts.

For this sample, we are using
[Vercel deployment](https://vercel.com/docs/concepts/deployments/overview) for
the container app while [GitHub pages](https://docs.github.com/en/pages) is
enabling a public host that serves the files needed from the micro-apps to be
mounted in the client side.

However, the application can be built and placed in any storage service like
[AWS S3](https://aws.amazon.com/s3/) or
[Google storage](https://cloud.google.com/storage/docs/introduction) and be
served through any CDN.

## Micro-apps

This application can serve and route multiple micro-apps, for this sample the
following has been defined:

- [Portal app](https://github.com/carl0sarb0leda/microf-ca-app) ( App to handle
  clinicians and patients).

Author: Carlos Arboleda carlosaepn@gmail.com

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [Styled Components](https://styled-components.com/)
- [Chart JS](https://www.chartjs.org/)
- [Fontawesome](https://fontawesome.com/v5/docs/web/use-with/react)
- [Yarn](https://yarnpkg.com/)

Other micro-apps mounted thrown this application are independent and have
different tech stacks.

## Structure

- `/api` contains the handlers to fetch api

- `/components` folder contains presentational components with styles

- `/containers` folder contains components with more focus on handling data and
  behavior

- `/lib` folder contains app enums

- `/router` folder contains the routing logic for protected paths

## Running the App

```shell
yarn start
```

This should start up your browser listen on PORT: 3301.

## Production Build

```shell
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Architecture v1.0.0

![Blog Dapp architecture](./src/assets/microapps.png)

## Flow

1. As design type we use a
   [vertical split](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/ch04.html)
   approach where each micro-app (or dev team) is responsible for a business
   domain. These are stored in any storage service and distributed through a
   CDN. For this sample, we have the `/dashboard` and `/portal` sections where
   the user can check data analytics and login into the clinical portal
   respectively.
2. Composition of apps is handled on the client side, pulling and mounting JS,
   and CSS from the remote
   [manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest).
3. Routing is client side as well, in this case, handled by
   [React Router](https://reactrouter.com/en/main) in the container app and each
   micro-app
4. Finally communication can be done through web storage or using custom events
   dispatched via the
   [window interface](https://developer.mozilla.org/en-US/docs/Web/API/Window)
