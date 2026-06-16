const request = require("supertest");
const app = require("../app");

// questão 1
// test("Listar jogos", async () =>{
//     const response = await request(app).get("/api/games");
//     expect(response.statusCode).toBe(200);
// })

// questão 2
// test("Listar array de jogos", async () =>{
//     const response = await request(app).get("/api/games");
//     expect(Array.isArray(response.body)).toBe(true);
//     expect(response.body.length).toBeGreaterThan(0);
// })


//questão 3:

 test("Criar um novo jogo", async () =>{
     const response = await request(app).post("/api/games")
     .send({
         id: 6,
         title: "sixSeven",
         genre: "numero",
         release_year: 6767
     })
    
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe("sixSeven");
    expect(response.body.id).toBe(9);
    expect(response.body.genre).toBe("numero");
    expect(response.body.release_year).toBe(6767);
 })


// ex 4 ver jogo vazio
test("Criar um outro novo jogo", async () =>{
   const response = await request(app).post("/api/games")
        .send({})
    expect(response.statusCode).toBe(500);
})

//ex 5
 test("Criar e buscar um novo jogo", async () => {
    const createResponse = await request(app)
      .post("/api/games")
      .send({
        title: "Abacatudo & Moranguete",
        genre: "RPG",
        release_year: 2026
      });
  
    expect(createResponse.statusCode).toBe(200);
  
    const idJogo = createResponse.body.id;
  
    const getResponse = await request(app)
      .get(`/api/games/${idJogo}`);
  
    expect(getResponse.statusCode).toBe(200);
  });

// ex 7:

/*
Está errado porque o status correto para criação de um recurso em uma API REST é 201 (Created), e não 200 (OK).
O 201 indica que o recurso foi criado com sucesso, enquanto o 200 é apenas uma resposta genérica de sucesso.
*/






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
