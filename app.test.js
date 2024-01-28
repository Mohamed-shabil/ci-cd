const request = require('supertest');
const app = require('./app');

it("respond with 200 statusCode for the get request",async ()=>{
    await request(app)
        .get('/get')
        .expect(200)
})


it("respond with 400 statusCode for post req if name is missing",async ()=>{
    await request(app)
        .post('/post')
        .send({
            age:20  
        })
        .expect(400);
})

it("respond with 200 statusCode for post req if all fields are given",async ()=>{
    await request(app)
        .post('/post')
        .send({
            name:'shabil',
            age:20  
        })
        .expect(200);
})