const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

function generateId() {
    return checkId(generateUniqueId());
}

async function checkId(id) { //verifica se id criado randomicamente já existe
    const checkOngId = await connection('ongs')
        .select('*')
        .where('id', id)
        .first();
    
    while (checkOngId) { //enquanto o id criado existir ele vai criando um novo
        id = generateId();
    }

    return id;
}

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = await generateId();

        await connection('ongs').insert({ //como é assincrono, ele espera essa função terminar para seguir com o resto do código
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    }
}