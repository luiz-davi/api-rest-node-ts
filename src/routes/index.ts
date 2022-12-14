import { Router } from 'express';
import { CidadesController } from '../controllers/index';

const router = Router();

router.get('/', CidadesController.index);

router.post('/', CidadesController.create);

export { router };