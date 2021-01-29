import { FastifyPluginAsync } from "fastify";
import AutoLoad, { AutoloadPluginOptions } from "fastify-autoload";
import fastifyEnv from "fastify-env";
import cors from "fastify-cors";
import socketioServer from "fastify-socket.io";
import path from "path";

export type AppOptions = {

} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async(fastify, opts): Promise<void> => {
    const options = {
        schema: {type:"object"},
        dotenv: true,
    };
    
    fastify.register(fastifyEnv, options).ready((err) => {
        if (err) throw new Error(err.toString());
    });

    fastify.register(cors);

    fastify.register(socketioServer, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
        },
    });

    void fastify.register(AutoLoad, {
        dir: path.join(__dirname, "plugins"),
        options: opts,
    });

    void fastify.register(AutoLoad, {
        dir: path.join(__dirname, "routes"),
        options: opts,
    });
}

export default app;