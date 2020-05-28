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
    },

    async update(request, response) {
        const { id } = request.params;
        const { name, email, whatsapp, city, uf } = request.body;
        const authorization_id = request.headers.authorization;

        const ong_id = await connection('ongs')
         .where('id', id)
         .select('id')
         .first();
        
        try {
            if(ong_id.id === authorization_id) {
                await connection('ongs')
                 .where('id', id)
                 .update({
                    name,
                    email,
                    whatsapp,
                    city,
                    uf
                 });

                return response.status(200).json({ message: 'Updated succesfully.' });
            } else {
                return response.status(401).json({ error: 'Operation not permitted.' });
            }
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async delete(request, response) {
        const { id } = request.params;
        const authorization_id = request.headers.authorization;

        const ong_id = await connection('ongs')
         .where('id', id)
         .select('id')
         .first();

        try {
            if(ong_id.id === authorization_id) {
                await connection('ongs')
                 .where('id', id)
                 .delete();

                return response.status(200).json({ message: 'Deleted succesfully' });
            } else {
                return response.status(401).json({ error: 'Operation not permitted' });
            }
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async search(request, response) {
        const { id } = request.params;

        try {	
            const ong = await connection('ongs')
            .select(['ongs.*'])
            .where('ongs.id', id);
    
            response.status(200).json({ong});
        } catch (error) {
            response.status(500).json({ error: error });
        }
    }
}