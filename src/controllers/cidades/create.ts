import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// Utilizando interfaces para tipar o body
interface ICidade {
  nome: string;
}

// o parametro *next* na rota é um middleware, que executa uma rotina antes de fazer a rotina principal do endpoint
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

  console.log(req.body.nome);

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);

  //Além do body, é possível resgatar parâmetro de diversas maneiras, como por exemplo:
  // req.headers, geralmente é por onde se mandam dados sensíveis
  // req.params, são dados especificados na url da requisição
  // req.query, são dados passados na url, mas de forma implícita, ex.: api/teste?nome=aaaa
  // req.body, pegar parâmetro que vem dentro do corpo da requisição (body)
  
};