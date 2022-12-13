import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => { 
  return res.status(200).json({
    message: 'teste node'
  });
});

// o parametro *next* na rota é um middleware, que executa uma rotina antes de fazer a rotina principal do endpoint
router.post('/', (req, res, next) => {

  //Além do body, é possível resgatar parâmetro de diversas maneiras, como por exemplo:
  // req.headers, geralmente é por onde se mandam dados sensíveis
  // req.params, são dados especificados na url da requisição
  // req.query, são dados passados na url, mas de forma implícita, ex.: api/teste?nome=aaaa
  // req.body, pegar parâmetro que vem dentro do corpo da requisição (body)
  
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});


export { router };