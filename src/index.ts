import { server } from './server/server';

server.listen(process.env.PORT || 4000, () => console.log('Servidor rodando...'));