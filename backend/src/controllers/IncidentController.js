const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; //paginação

        const [count] = await connection('incidents').count(); //contagem de todos os casos

        const incidents = await connection('incidents')
         .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //traz os dados da tabela relacionada
         .limit(5)
         .offset((page - 1) * 5) //paginação exibir de 5 em 5
         .select(['incidents.*', 
                 'ongs.name', 
                 'ongs.email', 
                 'ongs.whatsapp', 
                 'ongs.city', 
                 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']); //exibir a contagem total na header

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};