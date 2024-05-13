import backendRoute from "./backend/index.js";

const registerRoute = (app) => {
    app.use('/api/be', backendRoute);
}

export default registerRoute;