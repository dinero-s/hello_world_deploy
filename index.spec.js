const request = require('supertest')
const app = require('./index')

describe('/hello endpoint', () => {
  it('should return a 200 status and a message', async () => {
    const response = await request(app).get('/helloWorld')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello, world!' })
  })
  it('should return a 200 status and a message', async () => {
    const response = await request(app).get('/byebyeWorld')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Bye Bye, World!' })
  })
})