import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

// Utilizando interfaces para tipar o body
interface ICidade {
  name: string;
  state: string;
  // state?: , significa que esse campo é opcional
}

const validations: yup.SchemaOf<ICidade> = yup.object().shape({
  name: yup.string().min(5).required(),
  state: yup.string().required()
});

// o parametro *next* na rota é um middleware, que executa uma rotina antes de fazer a rotina principal do endpoint
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  
  // req.headers, geralmente é por onde se mandam dados sensíveis
  // req.params, são dados especificados na url da requisição
  // req.query, são dados passados na url, mas de forma implícita, ex.: api/teste?nome=aaaa
  // req.body, pegar parâmetro que vem dentro do corpo da requisição (body)
  
  let data: ICidade | undefined;

  try {
    data = await validations.validate(req.body, { abortEarly: false });
  } catch (err) {
    const yupError = err as yup.ValidationError;
    // definindo um tipo para um tipo inesperado de uma função catch
    const errors: Record<string, string> = {};
    // define a forma de um objeto

    yupError.inner.forEach((infos) => {
      if(!infos.path) { return; }

      errors[infos.path] = infos.errors.join(', ');
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }

  console.log(data);

  return res.status(StatusCodes.OK).json(data);

  //Além do body, é possível resgatar parâmetro de diversas maneiras, como por exemplo:
};