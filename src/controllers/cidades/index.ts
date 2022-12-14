import * as create  from './create';
import * as index from './index_cidades';

/*
  com exceção do index, todos os arquivos dentro da pasta da entidade diz respeito a uma rotina
  de uma funcionalidade.
*/

/**
 * Já o arquivo index, ele será responsável por agrupar todas funcionalidades e exportar para que as rotas
 * tenham acesso a todas as rotinas.
 */

export const CidadesController = {
  ...create, ...index,
};