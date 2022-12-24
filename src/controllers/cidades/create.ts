import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

// Utilizando interfaces para tipar o body
interface ICidade {
  name: string;
  state: string;
  // state?: , significa que esse campo é opcional
}
interface IFilter {
  filter?: string;
  limit?: number
  // parametro?: , significa que esse campo é opcional
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    name: yup.string().min(5).required(),
    state: yup.string().min(3).required()
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().min(3),
    limit: yup.number()
  })),
}));




// o parametro *next* na rota é um middleware, que executa uma rotina antes de fazer a rotina principal do endpoint
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  
  // Além do body, é possível resgatar parâmetro de diversas maneiras, como por exemplo:
  // req.headers, geralmente é por onde se mandam dados sensíveis
  // req.params, são dados especificados na url da requisição
  // req.query, são dados passados na url, mas de forma implícita, ex.: api/teste?nome=aaaa
  // req.body, pegar parâmetro que vem dentro do corpo da requisição (body)  

  return res.status(StatusCodes.OK).json(req.body);

};