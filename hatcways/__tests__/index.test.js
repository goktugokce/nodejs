const supertest = require('supertest');
const app = require("../src/app");

describe('test block',  () => {
  
  it("Should return 200 with tech tag", async () => {
    await supertest(app).get("/api/posts")
      .query(({ tags: 'tech' }))
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeTruthy();
      });
  });
  
  it("Should return 200 with multiple tags", async () => {
    await supertest(app).get("/api/posts")
      .query(({ tags: 'tech,culture'}))
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeTruthy();
      });
  });
  
  it("Should return 404 with incorrect tags", async () => {
    await supertest(app).get("/api/posts")
      .query({ tags: 'asd' })
      .expect(404)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeFalsy();
        expect(response.body.error).toBe('Cannot found any post related to the tag');
      });
  });
  
  it("Should return 400 with no tag", async () => {
    await supertest(app).get("/api/posts")
      .expect(400)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeFalsy();
        expect(response.body.error).toBe("Tags parameter is required");
      });
  });
  
  it("Should return 200 with valid sortBy paramater ", async () => {
    await supertest(app).get("/api/posts")
      .query({ tags: 'tech', sortBy: 'id' })
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeTruthy();
      });
  });
  
  it("Should return 400 with invalid sortBy paramater ", async () => {
    await supertest(app).get("/api/posts")
      .query({ tags: 'tech', sortBy: 'xx' })
      .expect(400)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeFalsy();
        expect(response.body.error).toBe('sortBy parameter is invalid');
      });
  });
  
  it("Should return 200 with valid direction paramater ", async () => {
    await supertest(app).get("/api/posts")
      .query({ tags: 'tech', direction: 'asc' })
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeTruthy();
      });
  });
  
  it("Should return 400 with invalid sortBy paramater ", async () => {
    await supertest(app).get("/api/posts")
      .query({ tags: 'tech', direction: 'xx' })
      .expect(400)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeFalsy();
        expect(response.body.error).toBe('direction parameter is invalid');
      });
  });
  
  it("Should return 200 with valid tag,sortBy and direction paramaters ", async () => {
    await supertest(app).get("/api/posts")
      .query({ tags: 'tech', sortBy: 'id', direction: 'desc' })
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body.posts)).toBeTruthy();
      });
  });
  
  it("Should return 200 ping ", async () => {
    await supertest(app).get("/api/ping").expect(200)
  });
})