import express from 'express';

// Ao passar o diretório raiz, o ts vai procurar o arquivo index para importar instantaneamente
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router);

export { server };