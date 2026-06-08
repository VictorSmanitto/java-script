test("Primeiro teste", () =>{
    expect(1+1).toBe(2);
})

const request = require("supertest");
const app = require("../app")