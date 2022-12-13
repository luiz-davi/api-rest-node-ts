"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    return res.status(200).json({
        message: 'teste node'
    });
});
router.post('/', (req, res) => {
    //Além do body, é possível resgatar parâmetro de diversas maneiras, como por exemplo:
    // req.headers, geralmente é por onde se mandam dados sensíveis
    // req.params, são dados especificados na url da requisição
    // req.query, são dados passados na url, mas de forma implícita, ex.: api/teste?nome=aaaa
    // req.body, pegar parâmetro que vem dentro do corpo da requisição (body)
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(req.body);
});
