import { handleError } from "../helpers/error";

const Server = (middlewares, routes, http) => {
  const app = http();
  const initializeMiddlewares = (middlewares) => {
    for (let key in middlewares) {
      const mware = middlewares[key];
      app.use(mware);
    }
  };
  const initializeApplicationRouter = (routes) => {
    app.use(routes);
    app.use(handleError);
  };
  initializeApplicationRouter(routes);
  initializeMiddlewares(middlewares);

  return {
    listen: (port) => {
      app.listen(port, async () => {
        console.log(`server started on port ${port}`);
      });
    },
  };
};

export default Server;
