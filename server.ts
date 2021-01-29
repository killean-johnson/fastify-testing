import Fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = Fastify({
    logger: true,
});

import appService from "./src/app";

app.register(appService);

// Run the server
app.listen(3000, function(err:any, address:any) {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }

    app.log.info(`server listening on ${address}`);
});