async function testRoute(fastify:any, options:any) {
    fastify.get('/testing', async(request:any, reply:any) => {
        return {hello: 'wasdasdorld'};
    });
}

module.exports = testRoute