const request = require("supertest");
const app = require("../app");

// questão 1
// test("Listar jogos", async () =>{
//     const response = await request(app).get("/api/games");
//     expect(response.statusCode).toBe(200);
// })

// questão 2
test("Listar array de jogos", async () =>{
    const response = await response(app).get("/api/games");
    
})












// // GET do site

// const Test = require("supertest/lib/test");
// test("Listar jogos mostrando apenas o codigo 200", async () =>{
//     const response = await request(app).get("/api/games");
//     expect(response.statusCode).toBe(200);
// })


// test("Retornando se é uma lista de jogos", async () => {
//     const response = await request(app).get("/api/games");
//     expect(Array.isArray(response.body)).toBe(true);
//     expect(response.body.length).toBeGreaterThan(0);
// })


// //Post do site

// test("Criar um novo jogo", async () =>{
//     const response = await request(app).post("/api/games")
//     .send({
//         id: 11,
//         title: "monster",
//         genre: "Blob",
//         release_year: 3020
//     })
    
//     expect(response.statusCode).toBe(200);
//     expect(response.body.title).toBe("monster");
//     // expect(response.body.id).toBe(1);
//     expect(response.body.genre).toBe("Blob");
//     expect(response.body.release_year).toBe(3020);
// })


// test("Criar um outro novo jogo", async () =>{
//     const response = await request(app).post("/api/games")
//     .send({
//         id: 2,
//         title: "new game",
//         genre: "mmo",
//         release_year: 1984
//     })
//     expect(response.body).toHaveProperty("title");
//     expect(response.body).toHaveProperty("genre");
//     expect(response.body).toHaveProperty("release_year");
// })

// // Post com retorno de erros
// test("Criar um novo jogo", async () =>{
//     const response = await request(app).post("/api/games")
//     expect(response.statusCode).toBe(500);
// })