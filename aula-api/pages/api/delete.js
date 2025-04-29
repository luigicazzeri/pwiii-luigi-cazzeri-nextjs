import { createConnection } from 'mysql2/promise';

async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'testeApi',
    });
}

export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Metodo não permitido'});
    }
    
    const { id } = req.body;
    console.log(req.body)

    if (!id) {
        return res.status(400).json({ error: 'O id é obrigatórios no request body.'});
    }
    try {
        const connection = await connectToDatabase();
        const [result] = await connection.execute('DELETE From users WHERE id = ?', [
            id
        ]);

        await connection.end();

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado'});
        }

        res.status(200).json({ message: 'Usuário deletado com sucesso!'});
        } catch (error) {
            console.error('Error de conexão com o banco:', error);
            res.status(500).json({ error: 'Erro Interno de Servidor'});     
    }
}