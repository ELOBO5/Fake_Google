const request = require('supertest') 
const server = require('../app')

describe('API endpoints', () => {
    let api;
    beforeAll(() => {
        api = server.listen(5000, () => console.log('Test server running on port 5000'));
    });

    afterAll(done => {
        console.log('Gracefully stopping test server');
        api.close(done)
    })

    it('responds to /', done => {
        request(api)
            .get('/')
            .expect(200, done);
    });

    it('responds to GET /cat', done => {
        request(api)
            .get('/cat')
            .expect(200, done);
    });

    it('responds to GET /dog', done => {
        request(api)
            .get('/dog')
            .expect(200, done);
    });

    it('responds to GET /random', done => {
        request(api)
            .get('/random')
            .expect(200, done);
    });

    it('404 error for other', done => {
        request(api)
            .get('/other')
            .expect(404, done);
    });

});