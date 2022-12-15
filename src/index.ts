import { server } from './server/server';

server.listen(process.env.PORT || 5050, () => console.log('Servidor rodando...'));