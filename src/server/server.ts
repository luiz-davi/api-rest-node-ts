import express from 'express';


const server = express();

server.get('/', (_, res) => {
  return res.status(200).json({
    message: 'teste node'
  });
});


export { server };