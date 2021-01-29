async function firstRoute(fastify:any, options:any) {
    fastify.get('/', async(request:any, reply:any) => {
        return {hello: 'world'};
    });
}

module.exports = firstRoute