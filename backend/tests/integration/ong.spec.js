const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
//testando rotas
describe('ONG', () => {
    beforeEach(async () => {
        //async: a próxima parte do código (funções) só é executada quando essa for concluída
        await connection.migrate.rollback(); //desfaz todas as migrations criadas anteriormente em outros testes
        await connection.migrate.latest(); //roda as migration no banco de testes
    }); //antes de executar cada teste

    afterAll(async () => {
        await connection.destroy(); //desfaz a conexão do teste com o banco de dados
    }); //depois de executar todo o teste

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
         .post('/ongs')
        //  .set('Authorization', 'isjdiojsd') //em caso de testes que precisa de headers
         .send({
            name: "APAD 2",
            email: "apad@apad.com",
            whatsapp: "85986115388",
            city: "fortaleza",
            uf: "ce"
         });

        // console.log(response.body);
        expect(response.body).toHaveProperty('id'); //se o teste der certo é esperado que o body receba um id (da ong)
        expect(response.body.id).toHaveLength(8); //é esperado que o id tenha 8 caracteres
    });
});